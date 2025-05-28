import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'Molding Machines',
    category: 'Manufacturing',
    imageUrl: 'https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'SCADA for Oil & Gas Plant',
    category: 'Oil & Gas',
    imageUrl: 'https://img.freepik.com/free-photo/environmental-pollution-factory-exterior_23-2149057713.jpg?uid=R113950335&ga=GA1.1.1186134175.1746796340&semt=ais_hybrid&w=740',
  },
  {
    id: 3,
    title: 'Glass Lamination Upgrade',
    category: 'Glass',
    imageUrl: 'https://images.pexels.com/photos/257636/pexels-photo-257636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 4,
    title: 'Autoclave System',
    category: 'Manufacturing',
    imageUrl: 'https://images.pexels.com/photos/159298/gears-cogs-machine-machinery-159298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const ProjectsSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container-custom">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Recent <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-600">
            Explore our latest automation solutions implemented across various industries
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-sm font-medium text-blue-300 mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <Link 
                    to="/projects" 
                    className="inline-block px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-dark transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/projects" className="btn btn-primary">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;