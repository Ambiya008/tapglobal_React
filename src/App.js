import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Company from './pages/Company/Company';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import TurnaroundManagement from './pages/Services/TurnaroundManagement';
import EnterpriseStrategy from './pages/Services/EnterpriseStrategy';
import DigitalTransformation from './pages/Services/DigitalTransformation';
import MergersAcquisitions from './pages/Services/MergersAcquisitions';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services/turnaround-management" element={<TurnaroundManagement />} />
        <Route path="/services/enterprise-strategy" element={<EnterpriseStrategy />} />
        <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
        <Route path="/services/mergers-acquisitions" element={<MergersAcquisitions />} />
      </Routes>
    </Router>
  );
}

export default App;
