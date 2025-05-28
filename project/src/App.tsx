import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Admin from './pages/admin/Admin';
import AdminLogin from './pages/admin/AdminLogin';
import SignUp from './pages/admin/SignUp';
import AdminServices from './pages/admin/AdminServices';
import AdminProjects from './pages/admin/AdminProjects';
import NotFound from './pages/NotFound';

// Solutions pages
import Solutions from './pages/Solutions';
import Automation from './pages/solutions/Automation';
import ControlPanels from './pages/solutions/ControlPanels';
import AutomationConsulting from './pages/solutions/AutomationConsulting';
import EngineeringServices from './pages/solutions/EngineeringServices';
import GlobalEngineeringOutsourcing from './pages/solutions/GlobalEngineeringOutsourcing';
import RepairsServiceCenters from './pages/solutions/RepairsServiceCenters';
import IndustrialSoftware from './pages/solutions/IndustrialSoftware';
import MachineVision from './pages/solutions/MachineVision';
import PartnerProducts from './pages/solutions/PartnerProducts';
import EPlan from './pages/solutions/EPlan';
import SiemensSoftware from './pages/solutions/SiemensSoftware';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        
        {/* Solutions routes */}
        <Route path="solutions" element={<Solutions />} />
        <Route path="solutions/automation" element={<Automation />} />
        <Route path="solutions/control-panels" element={<ControlPanels />} />
        <Route path="solutions/automation-consulting" element={<AutomationConsulting />} />
        <Route path="solutions/engineering-services" element={<EngineeringServices />} />
        <Route path="solutions/global-engineering-outsourcing" element={<GlobalEngineeringOutsourcing />} />
        <Route path="solutions/repairs-service-centers" element={<RepairsServiceCenters />} />
        <Route path="solutions/industrial-software" element={<IndustrialSoftware />} />
        <Route path="solutions/machine-vision" element={<MachineVision />} />
        <Route path="solutions/partner-products" element={<PartnerProducts />} />
        
        {/* Nested software solution routes */}
        <Route path="solutions/industrial-software/e-plan" element={<EPlan />} />
        <Route path="solutions/industrial-software/siemens-software" element={<SiemensSoftware />} />
        
        {/* Admin routes */}
        <Route path="admin/login" element={<AdminLogin />} />
        <Route path="admin/signup" element={<SignUp />} />
        <Route path="admin" element={<Admin />}>
          <Route index element={<AdminServices />} />
          <Route path="services" element={<AdminServices />} />
          <Route path="projects" element={<AdminProjects />} />
        </Route>
        
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;