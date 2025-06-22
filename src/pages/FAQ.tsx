
import Navigation from "@/components/Navigation";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FAQPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 dark:from-gray-900 dark:via-purple-950/50 dark:to-blue-950/30 transition-colors duration-300">
      <Navigation />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-8 text-midnight-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
        
        <FAQ />
      </div>
    </div>
  );
};

export default FAQPage;
