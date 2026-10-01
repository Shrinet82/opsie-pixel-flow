import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ledgerline from "./pages/Ledgerline";
import Advisory from "./pages/Advisory";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import { Privacy, Terms } from "./pages/Legal";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

// /vendorroll, /sentra, /consulting and /faq are redirected at the edge (vercel.json).
const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ledgerline" element={<Ledgerline />} />
      <Route path="/advisory" element={<Advisory />} />
      <Route path="/company" element={<Company />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
