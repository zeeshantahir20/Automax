import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getProjects, subscribeToProjects } from '../lib/api';
import { Project } from '../types';

const categories = ['All', 'Manufacturing', 'Oil & Gas', 'Glass', 'Rubber', 'Automotive', 'Food & Beverage', 'Utilities'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  useEffect(() => {
    document.title = 'Projects - AUTOMAX';
    
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await getProjects();
        setProjects(data);
      } catch (err: any) {
        console.error('Error fetching projects:', err);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();

    // Set up real-time subscription
    const subscription = subscribeToProjects((payload) => {
      if (payload.new) {
        // Handle different events by checking what changed
        setProjects(prevProjects => {
          // Check if this is an update to an existing project
          const existingIndex = prevProjects.findIndex(p => p.id === payload.new.id);
          
          if (existingIndex >= 0) {
            // Update existing project
            const updatedProjects = [...prevProjects];
            updatedProjects[existingIndex] = payload.new;
            return updatedProjects;
          } else {
            // Add new project
            return [payload.new, ...prevProjects];
          }
        });
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory, projects]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Projects</h1>
            <p className="text-xl text-blue-100">
              Explore our track record of successful implementations across various industries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200 sticky top-16 z-10">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}
          
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-semibold rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h3>
                    <p className="text-gray-600 mb-3 text-sm">{project.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{project.client}</span>
                      <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-3">No projects found</h3>
              <p className="text-gray-500">No projects match the selected category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;