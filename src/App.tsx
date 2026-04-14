import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '@/pages/Landing';
import HowItWorks from '@/pages/HowItWorks';
import WhyNevara from '@/pages/WhyNevara';
import Roadmap from '@/pages/Roadmap';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/why-nevara" element={<WhyNevara />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Fallback to home */}
        <Route path="*" element={<Landing />} />
      </Routes>
    </Router>
  );
}

export default App;
