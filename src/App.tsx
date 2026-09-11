import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VendorRoll from "./pages/VendorRoll";
import Consulting from "./pages/Consulting";
import Company from "./pages/Company";
import FAQPage from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import { DemoProvider } from "./components/DemoDialog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <DemoProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/vendorroll" element={<VendorRoll />} />
          {/* Legacy codename URL — kept alive so old /sentra links don't 404 */}
          <Route path="/sentra" element={<VendorRoll />} />
          <Route path="/consulting" element={<Consulting />} />
          <Route path="/company" element={<Company />} />
          <Route path="/faq" element={<FAQPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </DemoProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
