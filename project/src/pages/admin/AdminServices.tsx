import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash, Search } from 'lucide-react';
import { getServices, createService, updateService, deleteService, testSupabaseConnection } from '../../lib/api';
import { Service } from '../../types';

// Common icons that can be used for services
const commonIcons = ['🏭', '⚙️', '🔧', '🔩', '🛠️', '⛽', '🧪', '🧵', '🍽️', '🏗️', '💧', '🌡️', '🔌', '💡'];

const AdminServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentService, setCurrentService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    icon: '🏭',
    features: [] as string[]
  });
  const [featureInput, setFeatureInput] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        // First test the Supabase connection
        const isConnected = await testSupabaseConnection();
        if (!isConnected) {
          setError('Failed to connect to the database. Please check your Supabase configuration.');
          setLoading(false);
          return;
        }
        
        const data = await getServices();
        setServices(data);
      } catch (err: any) {
        console.error('Error fetching services:', err);
        setError(`Failed to load services: ${err.message || 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddService = () => {
    setFormData({
      title: '',
      description: '',
      image: '',
      icon: '🏭',
      features: []
    });
    setFeatureInput('');
    setIsAddModalOpen(true);
  };

  const handleEditService = (service: Service) => {
    setCurrentService(service);
    setFormData({
      title: service.title,
      description: service.description,
      image: service.image,
      icon: service.icon || '🏭',
      features: service.features || []
    });
    setFeatureInput('');
    setIsEditModalOpen(true);
  };

  const handleDeleteService = (service: Service) => {
    setCurrentService(service);
    setIsDeleteModalOpen(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFormData({
        ...formData,
        features: [...formData.features, featureInput.trim()]
      });
      setFeatureInput('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    const updatedFeatures = [...formData.features];
    updatedFeatures.splice(index, 1);
    setFormData({
      ...formData,
      features: updatedFeatures
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddFeature();
    }
  };

  const handleSubmitAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Log the data being sent for debugging
      console.log('Creating service with data:', formData);
      
      const newService = await createService(formData);
      console.log('Service created successfully:', newService);
      
      setServices([newService, ...services]);
      setIsAddModalOpen(false);
      setError(''); // Clear any previous errors on success
    } catch (err: any) {
      console.error('Error creating service:', err);
      // Show more specific error message to help with debugging
      setError(`Failed to create service: ${err.message || 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentService) return;
    
    try {
      setLoading(true);
      const updatedService = await updateService(currentService.id, formData);
      
      setServices(services.map(service =>
        service.id === currentService.id ? updatedService : service
      ));
      
      setIsEditModalOpen(false);
    } catch (err: any) {
      console.error('Error updating service:', err);
      setError('Failed to update service. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleConfirmDelete = async () => {
    if (!currentService) return;
    
    try {
      setLoading(true);
      await deleteService(currentService.id);
      setServices(services.filter(service => service.id !== currentService.id));
      setIsDeleteModalOpen(false);
    } catch (err: any) {
      console.error('Error deleting service:', err);
      setError('Failed to delete service. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Manage Services</h2>
          <p className="text-gray-600">Add, edit or remove services displayed on the website</p>
        </div>
        
        <button
          onClick={handleAddService}
          className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add New Service
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
              placeholder="Search services..."
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
                    Icon
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Features
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <tr key={service.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-2xl">
                        {service.icon || '🏭'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-medium text-gray-800">{service.title}</span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600 truncate max-w-xs">
                          {service.description}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">
                          {service.features ? `${service.features.length} features` : 'No features'}
                        </p>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEditService(service)}
                          className="text-blue-600 hover:text-blue-900 mr-3"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteService(service)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                      {searchTerm ? 'No services match your search' : 'No services found'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Add Service Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Add New Service</h3>
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
                    Service Title <span className="text-red-500">*</span>
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
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="image"
                    name="image"
                    type="url"
                    required
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="icon" className="block text-sm font-medium text-gray-700 mb-1">
                    Icon
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {commonIcons.map((icon) => (
                      <button
                        key={icon}
                        type="button"
                        onClick={() => setFormData({ ...formData, icon })}
                        className={`w-10 h-10 text-xl flex items-center justify-center border rounded-md ${
                          formData.icon === icon ? 'border-primary bg-blue-50' : 'border-gray-300'
                        }`}
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                  <input
                    id="icon"
                    name="icon"
                    type="text"
                    value={formData.icon}
                    onChange={handleInputChange}
                    maxLength={2}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Features
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Add a feature and press Enter"
                      className="flex-1 border border-gray-300 rounded-md rounded-r-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button
                      type="button"
                      onClick={handleAddFeature}
                      className="px-4 py-2 bg-primary text-white rounded-md rounded-l-none hover:bg-primary-dark"
                    >
                      Add
                    </button>
                  </div>
                  
                  {formData.features.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Added Features:</h4>
                      <ul className="space-y-2">
                        {formData.features.map((feature, index) => (
                          <li key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
                            <span className="text-sm">{feature}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveFeature(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash className="h-4 w-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
                  {loading ? 'Adding...' : 'Add Service'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
      
      {/* Edit Service Modal */}
      {isEditModalOpen && currentService && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
          >
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-gray-800">Edit Service</h3>
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
                    Service Title <span className="text-red-500">*</span>
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
                  <label htmlFor="edit-image" className="block text-sm font-medium text-gray-700 mb-1">
                    Image URL <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="edit-image"
                    name="image"
                    type="url"
                    required
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="edit-icon" className="block text-sm font-medium text-gray-700 mb-1">
                    Icon
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {commonIcons.map((icon) => (
                      <button
                        key={icon}
                        type="button"
                        onClick={() => setFormData({ ...formData, icon })}
                        className={`w-10 h-10 text-xl flex items-center justify-center border rounded-md ${
                          formData.icon === icon ? 'border-primary bg-blue-50' : 'border-gray-300'
                        }`}
                      >
                        {icon}
                      </button>
                    ))}
                  </div>
                  <input
                    id="edit-icon"
                    name="icon"
                    type="text"
                    value={formData.icon}
                    onChange={handleInputChange}
                    maxLength={2}
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Features
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={featureInput}
                      onChange={(e) => setFeatureInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Add a feature and press Enter"
                      className="flex-1 border border-gray-300 rounded-md rounded-r-none px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button
                      type="button"
                      onClick={handleAddFeature}
                      className="px-4 py-2 bg-primary text-white rounded-md rounded-l-none hover:bg-primary-dark"
                    >
                      Add
                    </button>
                  </div>
                  
                  {formData.features.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Added Features:</h4>
                      <ul className="space-y-2">
                        {formData.features.map((feature, index) => (
                          <li key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-md">
                            <span className="text-sm">{feature}</span>
                            <button
                              type="button"
                              onClick={() => handleRemoveFeature(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash className="h-4 w-4" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
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
      {isDeleteModalOpen && currentService && (
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
                Delete Service
              </h3>
              
              <p className="text-center text-gray-600 mb-6">
                Are you sure you want to delete <span className="font-semibold">{currentService.title}</span>? This action cannot be undone.
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
    </div>
  );
};

export default AdminServices;