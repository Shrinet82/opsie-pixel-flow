import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Sparkles } from "lucide-react";
import { CONTACT_API_URL } from "@/config/webhooks";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    automation: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessType: formData.businessType,
          automation: formData.automation,
          website: formData.website,
          source: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      toast({
        title: "You're in! 🛠️",
        description:
          "Your automation brief is in. Oopsie will get back within 24 hours.",
        duration: 5000,
      });

      setFormData({
        name: "",
        email: "",
        businessType: "",
        automation: "",
        website: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description:
          "We couldn't submit your request right now. Please try again in a moment.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-purple-50/20 dark:from-gray-900 dark:to-purple-950/20 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-primary-500 dark:text-primary-400 animate-pulse transition-colors duration-300" />
            </div>
            <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-midnight-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Let's build your first{" "}
              <span className="text-primary-500 dark:text-primary-400">
                automation
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-midnight-600 dark:text-gray-300 transition-colors duration-300">
              Tell us what's driving you crazy, and we'll make it disappear
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-midnight-700 dark:text-gray-300 font-medium mb-2 transition-colors duration-300"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="glow-border focus:border-primary-400 dark:bg-gray-800 dark:border-gray-600 transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-midnight-700 dark:text-gray-300 font-medium mb-2 transition-colors duration-300"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="glow-border focus:border-primary-400 dark:bg-gray-800 dark:border-gray-600 transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="businessType"
                className="block text-midnight-700 dark:text-gray-300 font-medium mb-2 transition-colors duration-300"
              >
                Business Type
              </label>
              <Input
                id="businessType"
                name="businessType"
                type="text"
                value={formData.businessType}
                onChange={handleChange}
                className="glow-border focus:border-primary-400 dark:bg-gray-800 dark:border-gray-600 transition-colors duration-300"
                placeholder="e.g., Marketing Agency, SaaS Startup, Consulting"
              />
            </div>

            <div>
              <label
                htmlFor="automation"
                className="block text-midnight-700 dark:text-gray-300 font-medium mb-2 transition-colors duration-300"
              >
                What's one thing you want to automate?
              </label>
              <Textarea
                id="automation"
                name="automation"
                required
                value={formData.automation}
                onChange={handleChange}
                className="glow-border focus:border-primary-400 min-h-32 dark:bg-gray-800 dark:border-gray-600 transition-colors duration-300"
                placeholder="Describe your most painful manual process... be specific!"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-sora font-semibold text-lg py-6 h-auto pixel-shadow hover:pixel-shadow-hover transition-all duration-300 group"
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

          <div className="text-center mt-8 text-midnight-500 dark:text-gray-400 transition-colors duration-300">
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
