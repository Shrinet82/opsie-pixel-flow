import { Bot, Play, CheckCircle, MessageSquare, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { GOOGLE_SHEETS_WEBHOOK_URL } from "@/config/webhooks";

const AIAgents = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    clinicName: "",
    phone: "",
    currentBookingMethod: "",
  });

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submissionData = {
        timestamp: new Date().toISOString(),
        name: formData.name,
        email: formData.email,
        clinicName: formData.clinicName,
        phone: formData.phone,
        currentBookingMethod: formData.currentBookingMethod,
        source: "AI Agents Page",
        type: "AI Agent Demo Request"
      };

      if (GOOGLE_SHEETS_WEBHOOK_URL) {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(submissionData),
        });

        toast({
          title: "Demo Request Sent!",
          description: "We'll be in touch within 24 hours to schedule your personalized demo.",
        });
      } else {
        toast({
          title: "Demo Request Received!",
          description: "We'll be in touch soon to schedule your personalized demo.",
        });
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        clinicName: "",
        phone: "",
        currentBookingMethod: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "There was an issue submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-accent-50/20 dark:from-midnight-900 dark:to-midnight-800">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                <Bot className="w-12 h-12 text-primary-600 dark:text-primary-400" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-sora font-black text-midnight-900 dark:text-white mb-6">
              The 24/7 AI Receptionist
              <br />
              <span className="text-primary-600 dark:text-primary-400">Your Clinic Deserves</span>
            </h1>
            <p className="text-xl sm:text-2xl text-midnight-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Turn your WhatsApp into an automated booking machine. Free up your staff, eliminate errors, and capture every patient lead, day or night.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToDemo}
                size="lg" 
                className="bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold"
              >
                <Play className="w-5 h-5 mr-2" />
                See Live Demo
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                size="lg"
                className="border-primary-300 text-primary-600 hover:bg-primary-50 dark:border-primary-600 dark:text-primary-400 dark:hover:bg-primary-900/20 px-8 py-4 text-lg font-semibold"
              >
                Book a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section id="demo" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-sora font-bold text-midnight-900 dark:text-white mb-4">
              See It In Action
              <span className="text-primary-600 dark:text-primary-400 ml-2">(90-Second Demo)</span>
            </h2>
            <p className="text-lg text-midnight-600 dark:text-gray-300 max-w-2xl mx-auto">
              Watch the entire flow: a person messaging WhatsApp, the AI responding, and the appointment appearing on Google Calendar. Fast and compelling.
            </p>
          </div>
          
          {/* Placeholder for video - replace with actual video component */}
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden neo-card">
              <CardContent className="p-0">
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-accent-100 dark:from-midnight-800 dark:to-midnight-700 flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                    <p className="text-lg font-semibold text-midnight-700 dark:text-gray-300">
                      Video Demo Coming Soon
                    </p>
                    <p className="text-midnight-600 dark:text-gray-400">
                      Watch the AI agent in action
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-midnight-900/50 dark:to-midnight-800/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-sora font-bold text-midnight-900 dark:text-white mb-4">
              From Chaos to Control: The Impact of AI on a
              <span className="text-teal-600 dark:text-teal-400 block">Modern Dental Practice</span>
            </h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden neo-card mb-8">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full mr-4">
                    <Calendar className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-sora font-bold text-midnight-900 dark:text-white">
                      AI-Powered Appointment Booking for Healthcare
                    </h3>
                    <p className="text-midnight-600 dark:text-gray-300 text-lg mt-1">
                      Sunrise Dental Clinic, a busy practice managing 200+ weekly appointments
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Challenge */}
                  <div className="space-y-4">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                      <h4 className="text-xl font-bold psychology-red">Challenge</h4>
                    </div>
                    <p className="text-midnight-600 dark:text-gray-300 leading-relaxed">
                      Receptionists spent nearly 2 hours daily on repetitive booking and cancellation calls. 
                      Constant phone ringing led to busy lines during peak hours, patient frustration, and all 
                      inquiries after 6 PM were completely missed opportunities. Manual calendar entry occasionally 
                      led to scheduling errors and double bookings.
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-4">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <h4 className="text-xl font-bold psychology-blue">Our Solution</h4>
                    </div>
                    <p className="text-midnight-600 dark:text-gray-300 leading-relaxed">
                      Deployed AI-powered booking agent directly onto clinic's primary WhatsApp number. 
                      The agent provides 24/7 instant responses for end-to-end appointment booking, cancellations, 
                      and availability checks. Integrates seamlessly with Google Calendar for real-time updates 
                      without manual data entry.
                    </p>
                  </div>
                </div>

                {/* Tools */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-midnight-900 dark:text-white mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {["WhatsApp API", "Google Gemini", "n8n", "Google Calendar API", "Supabase", "Twilio"].map((tool) => (
                      <span key={tool} className="px-4 py-2 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 rounded-full text-sm font-medium">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div className="mt-8">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <h4 className="text-xl font-bold psychology-green">Results</h4>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Staff time spent on scheduling decreased from 80 mins/day to 5 mins/day",
                      "New patient acquisition increased by 15% through capturing after-hours leads",
                      "Staff efficiency and focus on in-person patients increased by 75%",
                      "Scheduling errors eliminated, reducing related escalations by 90%"
                    ].map((result, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-midnight-600 dark:text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-900/20 dark:to-cyan-900/20 rounded-lg border-l-4 border-teal-500">
                  <blockquote className="text-lg italic text-midnight-700 dark:text-gray-300 mb-4">
                    "Our front desk has been transformed. We're capturing bookings at 10 PM on a Sunday. 
                    Our team can finally focus on providing excellent care to the patients in front of them 
                    instead of being tied to the phone. It's a well-oiled machine that delights our patients."
                  </blockquote>
                  <cite className="text-teal-600 dark:text-teal-400 font-semibold">
                    Dr. Anjali Sharma, Clinic Director @Sunrise Dental
                  </cite>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-sora font-bold text-midnight-900 dark:text-white mb-4">
              Simple for You,
              <span className="text-primary-600 dark:text-primary-400 block">Seamless for Your Patients</span>
            </h2>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <MessageSquare className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto" />
                </div>
                <h3 className="text-xl font-sora font-bold text-midnight-900 dark:text-white mb-3">
                  Patient Messages
                </h3>
                <p className="text-midnight-600 dark:text-gray-300 leading-relaxed">
                  A patient scans your QR code or messages your existing WhatsApp number.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <Bot className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto" />
                </div>
                <h3 className="text-xl font-sora font-bold text-midnight-900 dark:text-white mb-3">
                  AI Handles the Rest
                </h3>
                <p className="text-midnight-600 dark:text-gray-300 leading-relaxed">
                  The AI agent chats with the patient to find a suitable time, gathers details, and confirms the booking.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <Calendar className="w-8 h-8 text-primary-600 dark:text-primary-400 mx-auto" />
                </div>
                <h3 className="text-xl font-sora font-bold text-midnight-900 dark:text-white mb-3">
                  Instantly Scheduled
                </h3>
                <p className="text-midnight-600 dark:text-gray-300 leading-relaxed">
                  The appointment appears instantly in your clinic's Google Calendar. No manual work needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-accent-50/20 dark:from-midnight-900 dark:to-midnight-800">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-sora font-bold text-midnight-900 dark:text-white mb-6">
                Ready to Upgrade
                <span className="text-primary-600 dark:text-primary-400 block">Your Front Desk?</span>
              </h2>
              <p className="text-xl text-midnight-600 dark:text-gray-300 leading-relaxed">
                Get a personalized demo and see how we can transform your clinic. We'll handle the entire setup for you.
              </p>
            </div>
            
            <div className="bg-white dark:bg-midnight-800 rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-midnight-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-midnight-700 dark:text-white"
                      placeholder="Dr. Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-midnight-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-midnight-700 dark:text-white"
                      placeholder="sarah@dentalclinic.com"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="clinicName" className="block text-sm font-medium text-midnight-700 dark:text-gray-300 mb-2">
                      Clinic Name *
                    </label>
                    <input
                      type="text"
                      id="clinicName"
                      name="clinicName"
                      required
                      value={formData.clinicName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-midnight-700 dark:text-white"
                      placeholder="Smile Dental Clinic"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-midnight-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-midnight-700 dark:text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="currentBookingMethod" className="block text-sm font-medium text-midnight-700 dark:text-gray-300 mb-2">
                    How do patients currently book appointments?
                  </label>
                  <textarea
                    id="currentBookingMethod"
                    name="currentBookingMethod"
                    rows={3}
                    value={formData.currentBookingMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-midnight-700 dark:text-white"
                    placeholder="Phone calls, online portal, walk-ins..."
                  />
                </div>
                
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-8 py-4 bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white text-lg font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Schedule My Free Demo
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAgents;