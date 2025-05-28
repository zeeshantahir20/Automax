import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash, Search, Image, Info, AlertCircle } from 'lucide-react';
import { getProjects, createProject, updateProject, deleteProject, signIn } from '../../lib/api';
import { Project } from '../../types';
import ErrorDiagnostics from '../../components/ErrorDiagnostics';
import { supabase } from '../../lib/supabase';

const categories = ['Manufacturing', 'Oil & Gas', 'Glass', 'Rubber', 'Automotive', 'Food & Beverage', 'Utilities'];

const AdminProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [loginError, setLoginError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    category: 'Manufacturing',
    description: '',
    imageUrl: '',
    client: '',
    completionDate: new Date().toISOString().split('T')[0]
  });

  useEffect(() => {
    const checkAuthAndFetchProjects = async () => {
      try {
        setLoading(true);
        
        // Check if user is authenticated
        const { data: { user } } = await supabase.auth.getUser();
        setIsAuthenticated(!!user);
        
        // Fetch projects regardless of auth status (RLS will handle permissions)
        const data = await getProjects();
        setProjects(data);
      } catch (err: any) {
        console.error('Error fetching projects or checking auth:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    checkAuthAndFetchProjects();
    
    // Setup auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session?.user);
    });
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddProject = () => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    
    setFormData({
      title: '',
      category: 'Manufacturing',
      description: '',
      imageUrl: '',
      client: '',
      completionDate: new Date().toISOString().split('T')[0]
    });
    setIsAddModalOpen(true);
  };

  const handleEditProject = (project: Project) => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    
    setCurrentProject(project);
    setFormData({
      title: project.title,
      category: project.category,
      description: project.description,
      imageUrl: project.imageUrl,
      client: project.client,
      completionDate: project.completionDate.split('T')[0]
    });
    setIsEditModalOpen(true);
  };

  const handleDeleteProject = (project: Project) => {
    if (!isAuthenticated) {
      setIsLoginModalOpen(true);
      return;
    }
    
    setCurrentProject(project);
    setIsDeleteModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleLoginInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setLoginError('');
      
      const { email, password } = loginForm;
      
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        setLoginError(`Login failed: ${error.message}`);
        return;
      }
      
      setIsLoginModalOpen(false);
      setLoginForm({ email: '', password: '' });
    } catch (err: any) {
      console.error('Login error:', err);
      setLoginError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      setError('You must be logged in to add projects.');
      setIsLoginModalOpen(true);
      return;
    }
    
    try {
      setLoading(true);
      console.log('Creating project with data:', formData);
      
      // Add proper error handling with detailed logging
      try {
        const newProject = await createProject(formData);
        console.log('Project created successfully:', newProject);
        setProjects([newProject, ...projects]);
        setIsAddModalOpen(false);
        setError('');
      } catch (createError: any) {
        console.error('Detailed error creating project:', {
          message: createError.message,
          status: createError?.status,
          statusText: createError?.statusText,
          details: createError?.details,
          hint: createError?.hint,
          code: createError?.code,
          error: createError
        });
        
        // Check if this is an authentication error
        if (createError.code === 'PGRST301' || createError.message?.includes('permission') || createError.code === '42501') {
          setError('Permission denied. Please make sure you are logged in as an admin user.');
          setIsAuthenticated(false);
          setIsLoginModalOpen(true);
        } else {
          setError(`Failed to create project. ${createError.message || 'Please try again.'}`);
        }
      }
    } catch (err: any) {
      console.error('Error in form submission:', err);
      setError('Failed to process form submission. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentProject) return;
    
    if (!isAuthenticated) {
      setError('You must be logged in to edit projects.');
      setIsLoginModalOpen(true);
      return;
    }
    
    try {
      setLoading(true);
      const updatedProject = await updateProject(currentProject.id, formData);
      
      setProjects(projects.map(project =>
        project.id === currentProject.id ? updatedProject : project
      ));
      
      setIsEditModalOpen(false);
    } catch (err: any) {
      console.error('Error updating project:', err);
      setError('Failed to update project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!currentProject) return;
    
    if (!isAuthenticated) {
      setError('You must be logged in to delete projects.');
      setIsLoginModalOpen(true);
      return;
    }
    
    try {
      setLoading(true);
      await deleteProject(currentProject.id);
      setProjects(projects.filter(project => project.id !== currentProject.id));
      setIsDeleteModalOpen(false);
    } catch (err: any) {
      console.error('Error deleting project:', err);
      setError('Failed to delete project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ErrorDiagnostics />
      
      {!isAuthenticated && (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded mb-4 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2" />
          <div>
            <p className="font-bold">Authentication Required</p>
            <p className="text-sm">You need to be logged in to add, edit, or delete projects.</p>
          </div>
          <button 
            onClick={() => setIsLoginModalOpen(true)}
            className="ml-auto bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded"
          >
            Log In
          </button>
        </div>
      )}
      
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Manage Projects</h2>
          <p className="text-gray-600">Add, edit or remove projects displayed on the website</p>
        </div>
        
        <button
          onClick={handleAddProject}
          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Project
        </button>
      </div>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        <div className="overflow-x-auto">
          {loading && !isAddModalOpen && !isEditModalOpen && !isDeleteModalOpen ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <tr key={project.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="h-12 w-20 bg-gray-100 rounded overflow-hidden">
                          <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="h-full w-full object-cover"
                            onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/150?text=No+Image')}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-medium text-gray-800">{project.title}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                          {project.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {project.client}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(project.completionDate).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEditProject(project)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteProject(project)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                      {searchTerm ? 'No projects match your search' : 'No projects found'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
      
      {/* Add Project Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Add New Project</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmitAdd}>
              <div className="p-6 space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="client" className="block text-sm font-medium text-gray-700 mb-1">
                    Client <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="client"
                    name="client"
                    type="text"
                    required
                    value={formData.client}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={3}
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="imageUrl"
                    name="imageUrl"
                    type="url"
                    required
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="completionDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Completion Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="completionDate"
                    name="completionDate"
                    type="date"
                    required
                    value={formData.completionDate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50"
                >
                  {loading ? 'Adding...' : 'Add Project'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
      
      {/* Edit Project Modal */}
      {isEditModalOpen && currentProject && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Edit Project</h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmitEdit}>
              <div className="p-6 space-y-4">
                <div>
                  <label htmlFor="edit-title" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="edit-title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="edit-category" className="block text-sm font-medium text-gray-700 mb-1">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="edit-category"
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="edit-client" className="block text-sm font-medium text-gray-700 mb-1">
                    Client <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="edit-client"
                    name="client"
                    type="text"
                    required
                    value={formData.client}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="edit-description" className="block text-sm font-medium text-gray-700 mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="edit-description"
                    name="description"
                    rows={3}
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="edit-imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="edit-imageUrl"
                    name="imageUrl"
                    type="url"
                    required
                    value={formData.imageUrl}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="edit-completionDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Completion Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="edit-completionDate"
                    name="completionDate"
                    type="date"
                    required
                    value={formData.completionDate}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50"
                >
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
      
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && currentProject && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg max-w-md w-full"
          >
            <div className="p-6">
              <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                <Trash className="h-6 w-6 text-red-600" />
              </div>
              
              <h3 className="text-xl font-semibold text-center text-gray-800 mb-2">
                Delete Project
              </h3>
              
              <p className="text-center text-gray-600 mb-6">
                Are you sure you want to delete <span className="font-semibold">{currentProject.title}</span>? This action cannot be undone.
              </p>
              
              <div className="flex justify-center space-x-3">
                <button
                  type="button"
                  onClick={() => setIsDeleteModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleConfirmDelete}
                  disabled={loading}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 disabled:opacity-50"
                >
                  {loading ? 'Deleting...' : 'Delete'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
      
      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg max-w-md w-full"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Log In</h3>
              <button
                onClick={() => setIsLoginModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className="p-6 space-y-4">
                {loginError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                    {loginError}
                  </div>
                )}
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={loginForm.email}
                    onChange={handleLoginInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={loginForm.password}
                    onChange={handleLoginInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsLoginModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark disabled:opacity-50"
                >
                  {loading ? 'Logging in...' : 'Log In'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AdminProjects;