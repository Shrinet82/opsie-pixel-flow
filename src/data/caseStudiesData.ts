
import { Users, Target, TrendingUp, MessageSquare, Calendar, LucideIcon } from "lucide-react";

export interface CaseStudy {
  title: string;
  client: string;
  icon: LucideIcon;
  challenge: string;
  solution: string;
  tools: string[];
  results: string[];
  quote: string;
  author: string;
  color: string;
  iconColor: string;
}

export const caseStudies: CaseStudy[] = [
  {
    title: "E-commerce Order Processing Revolution",
    client: "Fashion retail company processing 2,000+ orders daily across multiple platforms",
    icon: TrendingUp,
    challenge: "Orders from Shopify, Amazon, and Etsy required manual data entry into fulfillment systems. Customer service team spent 6 hours daily updating order statuses, creating shipping labels, and sending tracking notifications. Inventory discrepancies led to overselling.",
    solution: "Unified order processing pipeline that automatically syncs orders across platforms, generates shipping labels, updates inventory in real-time, and sends personalized tracking emails. Built conditional logic for expedited orders and automated inventory alerts.",
    tools: ["Zapier", "Shopify API", "Amazon API", "Klaviyo", "ShipStation", "Google Sheets"],
    results: [
      "87% reduction in order processing time",
      "Zero overselling incidents in 6 months",
      "Customer satisfaction increased by 35%",
      "Freed up 30 hours/week for strategic tasks"
    ],
    quote: "Opsie transformed our chaotic order management into a smooth, automated machine. We went from constantly firefighting to actually growing our business.",
    author: "Sarah Chen, COO @StyleFlow Boutique",
    color: "from-blue-100 to-cyan-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Lead Qualification & CRM Automation",
    client: "B2B marketing agency managing 500+ leads monthly for 12 clients",
    icon: Target,
    challenge: "Leads came from multiple sources - LinkedIn, website forms, cold outreach, and referrals. Manual lead scoring took 2+ hours daily, and follow-up sequences were inconsistent. Hot leads were getting lost in the pipeline while cold leads received too much attention.",
    solution: "Intelligent lead scoring system using behavioral data and demographic analysis. Automatically segments leads, assigns scores, routes to appropriate sales reps, and triggers personalized follow-up sequences based on lead temperature and industry.",
    tools: ["HubSpot", "n8n", "LinkedIn Sales Navigator", "Calendly", "Slack", "OpenAI API"],
    results: [
      "Lead response time improved from 4 hours to 5 minutes",
      "42% increase in qualified lead conversion",
      "Sales team productivity up 60%",
      "Revenue per lead increased by $1,200"
    ],
    quote: "Our sales team went from drowning in unqualified leads to having meaningful conversations with prospects who are ready to buy. It's like having a crystal ball for our pipeline.",
    author: "Marcus Rodriguez, VP Sales @GrowthTech Solutions",
    color: "from-purple-100 to-pink-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Client Onboarding & Project Management Streamline",
    client: "Digital marketing consultancy with 25+ simultaneous client projects",
    icon: Users,
    challenge: "New client onboarding involved 15+ manual steps across multiple platforms. Project kickoffs required creating folders, setting up communication channels, and gathering assets from clients. Each project manager had different processes, leading to inconsistent client experiences.",
    solution: "Comprehensive client onboarding workflow that creates project workspaces, sets up communication channels, sends branded welcome packages, and automatically schedules kickoff calls. Integrated with project management tools for seamless handoffs.",
    tools: ["ClickUp", "Slack API", "Google Drive", "Calendly", "DocuSign", "Notion"],
    results: [
      "Client onboarding time reduced from 3 days to 2 hours",
      "98% client satisfaction with onboarding process",
      "Project managers save 15 hours per new client",
      "Zero missed onboarding steps since implementation"
    ],
    quote: "Every client now gets a VIP onboarding experience that used to take our best project manager days to deliver. The consistency and professionalism has elevated our entire brand.",
    author: "Jennifer Walsh, Founder @Digital Dynamo Agency",
    color: "from-green-100 to-emerald-100",
    iconColor: "text-green-600"
  },
  {
    title: "Customer Support Ticket Intelligence System",
    client: "SaaS platform serving 10,000+ users with 200+ daily support requests",
    icon: MessageSquare,
    challenge: "Support tickets from email, chat, and phone were manually categorized and routed. Urgent issues were buried in general queues, leading to escalations. Knowledge base searches were manual, and response times varied wildly by agent skill level.",
    solution: "AI-powered ticket triage system that automatically categorizes, prioritizes, and routes tickets to specialized agents. Suggests relevant knowledge base articles, auto-generates draft responses for common issues, and escalates VIP customer requests immediately.",
    tools: ["Zendesk API", "OpenAI GPT-4", "Slack", "n8n", "Google Analytics", "Intercom"],
    results: [
      "Average response time decreased from 4 hours to 12 minutes",
      "Customer satisfaction scores improved by 48%",
      "Support team efficiency increased by 75%",
      "Reduced escalations by 90%"
    ],
    quote: "Our customers are amazed by how quickly and accurately we respond now. What used to feel like chaos in our support queue is now a well-oiled machine that actually delights our users.",
    author: "David Park, Head of Customer Success @CloudFlow Technologies",
    color: "from-orange-100 to-red-100",
    iconColor: "text-orange-600"
  },
  {
    title: "AI-Powered Appointment Booking for Healthcare",
    client: "Sunrise Dental Clinic, a busy practice managing 200+ weekly appointments",
    icon: Calendar,
    challenge: "Receptionists spent nearly 2 hours daily on repetitive booking and cancellation calls. Constant phone ringing led to busy lines during peak hours, patient frustration, and all inquiries after 6 PM were completely missed opportunities. Manual calendar entry occasionally led to scheduling errors and double bookings.",
    solution: "Deployed AI-powered booking agent directly onto clinic's primary WhatsApp number. The agent provides 24/7 instant responses for end-to-end appointment booking, cancellations, and availability checks. Integrates seamlessly with Google Calendar for real-time updates without manual data entry.",
    tools: ["WhatsApp API", "Google Gemini", "n8n", "Google Calendar API", "Supabase", "Twilio"],
    results: [
      "Staff time spent on scheduling decreased from 80 mins/day to 5 mins/day",
      "New patient acquisition increased by 15% through capturing after-hours leads",
      "Staff efficiency and focus on in-person patients increased by 75%",
      "Scheduling errors eliminated, reducing related escalations by 90%"
    ],
    quote: "Our front desk has been transformed. We're capturing bookings at 10 PM on a Sunday. Our team can finally focus on providing excellent care to the patients in front of them instead of being tied to the phone. It's a well-oiled machine that delights our patients.",
    author: "Dr. Anjali Sharma, Clinic Director @Sunrise Dental",
    color: "from-teal-100 to-cyan-100",
    iconColor: "text-teal-600"
  }
];
