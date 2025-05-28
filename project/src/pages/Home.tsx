import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import AboutSection from '../components/home/AboutSection';
import ServicesSection from '../components/home/ServicesSection';
import ProjectsSection from '../components/home/ProjectsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import ContactCTA from '../components/home/ContactCTA';
import Achievements from '../components/home/Achievements';
import ClientsPartnersCertifications from '../components/home/ClientsPartnersCertifications';
const Home = () => {
  useEffect(() => {
    document.title = 'AUTOMAX - Industrial Automation Solutions';
  }, []);

  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactCTA />
      <Achievements />
      <ClientsPartnersCertifications />

    </>
  );
};

export default Home;