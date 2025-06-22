
import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What types of tasks can Opsie automate?",
      answer: "Opsie can automate repetitive business processes like data entry, email workflows, social media posting, report generation, customer onboarding, lead qualification, invoice processing, and much more. If you're doing it manually more than once, we can likely automate it."
    },
    {
      question: "How long does it take to implement an automation?",
      answer: "Simple automations can be set up within 24-48 hours, while complex multi-step workflows typically take 1-2 weeks. During our free audit, we'll give you a precise timeline based on your specific needs."
    },
    {
      question: "Do I need technical knowledge to use automated workflows?",
      answer: "Not at all! We build everything using no-code tools and provide complete training. You'll be able to monitor, modify, and manage your automations without any technical background."
    },
    {
      question: "What tools do you use for automation?",
      answer: "We primarily use Zapier, Make.com, Airtable, Google Workspace, and various AI tools. We select the best combination based on your existing tech stack and specific requirements."
    },
    {
      question: "How much can automation save my business?",
      answer: "Most clients save 10-20 hours per week per automation, which typically translates to $2,000-$5,000+ monthly in time savings. The ROI usually pays for itself within the first month."
    },
    {
      question: "Do you provide ongoing support after implementation?",
      answer: "Yes! We offer maintenance packages to monitor your automations, make updates as needed, and provide support. We also train your team so you can handle basic modifications yourself."
    },
    {
      question: "What if my automation breaks or stops working?",
      answer: "We build robust automations with error handling and monitoring. If something does break, our support team fixes it quickly. Most automations run for months without any issues."
    },
    {
      question: "Can you integrate with my existing software?",
      answer: "Most likely! We work with 1000+ popular business tools including CRMs, email platforms, accounting software, project management tools, and more. We'll check compatibility during your free audit."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-gray-900 dark:to-blue-950/20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex justify-center mb-6">
              <HelpCircle className="w-12 h-12 text-primary-500 dark:text-primary-400 animate-pulse" />
            </div>
            <h2 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl text-midnight-900 dark:text-gray-100 mb-6 transition-colors duration-300">
              Frequently Asked <span className="text-primary-500 dark:text-primary-400">Questions</span>
            </h2>
            <p className="text-lg sm:text-xl text-midnight-600 dark:text-gray-300 transition-colors duration-300">
              Everything you need to know about business automation with Opsie
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 sm:px-8 py-6 text-left flex justify-between items-start hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200"
                  aria-expanded={openItems.includes(index)}
                >
                  <h3 
                    className="font-sora font-semibold text-lg sm:text-xl text-midnight-900 dark:text-gray-100 pr-4 leading-tight transition-colors duration-300"
                    itemProp="name"
                  >
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 mt-1">
                    {openItems.includes(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary-500 dark:text-primary-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary-500 dark:text-primary-400" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div 
                    className="px-6 sm:px-8 pb-6 animate-in slide-in-from-top-2 duration-300"
                    itemScope 
                    itemType="https://schema.org/Answer"
                  >
                    <p 
                      className="text-midnight-600 dark:text-gray-300 leading-relaxed transition-colors duration-300"
                      itemProp="text"
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-midnight-500 dark:text-gray-400 mb-4 transition-colors duration-300">
              Still have questions?
            </p>
            <button 
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-primary-500 dark:text-primary-400 hover:text-primary-600 dark:hover:text-primary-300 font-semibold transition-colors duration-200"
            >
              Get in touch with our team →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
