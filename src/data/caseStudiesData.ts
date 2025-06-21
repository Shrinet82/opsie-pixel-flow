
import { Users, Target, TrendingUp, MessageSquare, LucideIcon } from "lucide-react";

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
    title: "Ops Layer for a Design Consultancy Scaling Globally",
    client: "UX/UI Consultancy scaling from 6 to 18 team members across 3 time zones",
    icon: Users,
    challenge: "As the team grew, onboarding freelancers, designers, and project managers became chaotic. Each hire involved custom Slack invites, region-specific documents, adding to 3+ Notion workspaces, Asana templates, and manual NDA + project briefs.",
    solution: "Multi-branch onboarding system using form-based triggers and conditional logic. Based on location & role, the flow branches into Slack invites, correct regional documents, Notion access, Asana templates, and manager introductions.",
    tools: ["n8n", "Notion API", "Slack API", "Asana", "Google Workspace"],
    results: [
      "Cut onboarding time from 2.5 hours per hire to 10 minutes",
      "100% reduction in errors in access or document delivery",
      "Manager onboarding score went up by 40%"
    ],
    quote: "Opsie gave us the ability to scale our people without scaling the chaos. It's like having an invisible team member who never forgets a step.",
    author: "Rina S., Partner @Axiom Design Lab",
    color: "from-blue-100 to-cyan-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Automated Talent Funnel for a Startup Accelerator",
    client: "Early-stage accelerator reviewing 300+ founder applications/month",
    icon: Target,
    challenge: "Manually managing intake forms, evaluating pitch decks, and scheduling calls with shortlisted founders was overwhelming. They used Google Forms + Sheets, internal Slack threads, and individual Calendly links.",
    solution: "Founder Evaluation Pipeline with auto-evaluation + CRM syncing. Deck + pitch answers auto-scored using Gemini Pro, summary generated, shortlist gets auto Calendly link, and final statuses tracked in Airtable.",
    tools: ["n8n", "Gemini", "Notion API", "Google Calendar", "Airtable", "Slack"],
    results: [
      "90% reduction in manual shortlist & scheduling time",
      "Consistent scoring across teams",
      "3 new founders discovered who were missed in manual review"
    ],
    quote: "Opsie turned our application chaos into a system. The clarity and speed it brought is now baked into how we operate.",
    author: "Kartik M., Program Director @Fundraze Accelerator",
    color: "from-purple-100 to-pink-100",
    iconColor: "text-purple-600"
  },
  {
    title: "Real-Time Leave + Payroll Sync for a Global Remote Team",
    client: "35-member remote SaaS company working across 5 countries",
    icon: TrendingUp,
    challenge: "Leave requests came via email, Notion, and Slack DMs. HR had to update local payroll and benefits in country-specific formats. Errors led to payroll delays and employee dissatisfaction.",
    solution: "Leave-to-Payroll Sync Engine integrated with Notion + Remote.com. Validates against role, holiday region, and balance, updates Notion calendar, sends formatted summaries to HR, and confirms via Slack.",
    tools: ["n8n", "Notion API", "Remote API", "Slack", "Google Sheets"],
    results: [
      "Reduced payroll reporting time by 75%",
      "0 missed leave payouts since automation",
      "HR NPS improved by 24 points in 1 quarter"
    ],
    quote: "Before Opsie, leave tracking was a blind spot. Now it's so seamless, we're thinking of expanding to reimbursements and asset management.",
    author: "Ananya T., Head of People @SaaSyBits",
    color: "from-green-100 to-emerald-100",
    iconColor: "text-green-600"
  },
  {
    title: "WhatsApp Dental Appointment Automation System",
    client: "Independent dental clinic with 500+ monthly patient appointments",
    icon: MessageSquare,
    challenge: "Manual appointment booking via phone calls was time-consuming. High no-show rates, missed follow-ups, and staff spending 3+ hours daily on scheduling. Patients struggled with clinic hours for rescheduling.",
    solution: "AI-powered WhatsApp chatbot with real-time calendar integration. Automated booking, rescheduling, reminders, and digital consent forms. Multilingual support with HIPAA-compliant patient data handling.",
    tools: ["WhatsApp Business API", "n8n", "Google Calendar", "OpenAI GPT", "Airtable", "Twilio"],
    results: [
      "95% reduction in missed appointments",
      "60% decrease in administrative phone time",
      "40% increase in patient satisfaction scores",
      "24/7 booking availability improved retention by 30%"
    ],
    quote: "Our patients love booking through WhatsApp - it's so convenient. We've practically eliminated no-shows and our staff can focus on patient care instead of endless phone calls.",
    author: "Dr. Maria Gonzalez, DDS @Bright Smile Dental",
    color: "from-orange-100 to-red-100",
    iconColor: "text-orange-600"
  }
];
