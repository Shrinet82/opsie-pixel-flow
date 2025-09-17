import { Bot, Play, CheckCircle, MessageSquare, Calendar, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Contact from "@/components/Contact";

const AIAgents = () => {
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
              <span className="text-primary-600 dark:text-primary-400 ml-2">(Short Demo)</span>
            </h2>
            <p className="text-lg text-midnight-600 dark:text-gray-300 max-w-2xl mx-auto">
              Watch the entire flow: a person messaging WhatsApp, the AI responding, and the appointment appearing on Google Calendar. Fast and compelling.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden neo-card">
              <CardContent className="p-0">
                <div className="aspect-video bg-black relative">
                  <iframe
                    src="https://www.youtube.com/embed/6wyEuIt8iE0"
                    title="AI Agent Demo Video"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
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

      <Contact />
    </div>
  );
};

export default AIAgents;