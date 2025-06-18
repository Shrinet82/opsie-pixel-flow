
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    automation: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "You're in! 🛠️",
      description: "Your automation brief is in. Opsie will get back within 24 hours.",
      duration: 5000,
    });
    
    setFormData({ name: "", email: "", businessType: "", automation: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-purple-50/20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-primary-500 animate-pulse" />
            </div>
            <h2 className="font-sora font-bold text-4xl md:text-5xl text-midnight-900 mb-6">
              Let's build your first <span className="text-primary-500">automation</span>
            </h2>
            <p className="text-xl text-midnight-600">
              Tell us what's driving you crazy, and we'll make it disappear
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-midnight-700 font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="glow-border focus:border-primary-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-midnight-700 font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="glow-border focus:border-primary-400"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessType" className="block text-midnight-700 font-medium mb-2">
                Business Type
              </label>
              <Input
                id="businessType"
                name="businessType"
                type="text"
                value={formData.businessType}
                onChange={handleChange}
                className="glow-border focus:border-primary-400"
                placeholder="e.g., Marketing Agency, SaaS Startup, Consulting"
              />
            </div>

            <div>
              <label htmlFor="automation" className="block text-midnight-700 font-medium mb-2">
                What's one thing you want to automate?
              </label>
              <Textarea
                id="automation"
                name="automation"
                required
                value={formData.automation}
                onChange={handleChange}
                className="glow-border focus:border-primary-400 min-h-32"
                placeholder="Describe your most painful manual process... be specific!"
              />
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-primary-500 hover:bg-primary-600 text-white font-sora font-semibold text-lg py-6 h-auto pixel-shadow hover:pixel-shadow-hover transition-all duration-300 group"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Submit My Automation Brief
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>

          <div className="text-center mt-8 text-midnight-500">
            <p className="text-sm">
              🔒 We respect your privacy. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
