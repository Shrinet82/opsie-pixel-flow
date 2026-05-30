import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import {
  AlertTriangle,
  ArrowRight,
  Bot,
  Building2,
  CalendarClock,
  CheckCircle2,
  ClipboardList,
  FileSearch,
  KeyRound,
  Link2,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const workflowSteps = [
  {
    id: "01",
    title: "Secure Admin Access",
    description:
      "Internal teams sign in and manage the complete vendor risk lifecycle from one dashboard.",
    icon: ShieldCheck,
  },
  {
    id: "02",
    title: "Vendor Onboarding",
    description:
      "Create vendors, assign compliance templates, and instantly track progress with risk badges.",
    icon: Building2,
  },
  {
    id: "03",
    title: "Portal Link Delivery",
    description:
      "Generate a 48-hour token link so vendors can submit documents and questionnaires without login friction.",
    icon: KeyRound,
  },
  {
    id: "04",
    title: "AI Document Intelligence",
    description:
      "Uploaded evidence is analyzed for type, issuer, expiry date, and confidence score in real time.",
    icon: Bot,
  },
  {
    id: "05",
    title: "Review and Approve",
    description:
      "Compliance owners approve, reject, or request replacement files while preserving audit history.",
    icon: ClipboardList,
  },
  {
    id: "06",
    title: "Continuous Monitoring",
    description:
      "Expiry alerts and risk recalculation keep security posture current across all active vendors.",
    icon: AlertTriangle,
  },
];

const moduleCards = [
  {
    title: "Executive Dashboard",
    points: [
      "High/Medium/Low risk snapshots",
      "Average risk score tracking",
      "Compliance expiry alerts",
    ],
    icon: FileSearch,
  },
  {
    title: "Vendor Detail Workspace",
    points: [
      "Overview and risk intake",
      "Compliance evidence review",
      "Questionnaires, portal, intelligence tabs",
    ],
    icon: UsersRound,
  },
  {
    title: "Questionnaire Engine",
    points: [
      "Template builder for security assessments",
      "Vendor answer exports in CSV/PDF",
      "Partial submissions with prefill",
    ],
    icon: ClipboardList,
  },
  {
    title: "Access and Reporting",
    points: [
      "Token-based vendor access links",
      "One-click invite and revoke controls",
      "Downloadable PDF compliance reports",
    ],
    icon: Link2,
  },
];

const Sentra = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/40 to-cyan-50/30 bg-pixel-pattern">
      <Navigation />

      <section className="pt-24 pb-16 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="mb-6 bg-primary-100 text-primary-700 border border-primary-200 hover:bg-primary-100">
              <Sparkles className="w-3.5 h-3.5 mr-1" />
              New Product Launch
            </Badge>

            <h1 className="font-sora font-black text-4xl sm:text-5xl lg:text-6xl text-midnight-900 leading-tight mb-6">
              Sentra: AI Vendor
              <span className="block bg-gradient-to-r from-primary-600 via-primary-500 to-cyan-500 bg-clip-text text-transparent">
                Compliance Copilot
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-midnight-600 max-w-3xl mx-auto leading-relaxed mb-10">
              Manage third-party risk, compliance evidence, security
              questionnaires, and AI-powered document intelligence from a single
              operational command center.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary-500 hover:bg-primary-600 text-white font-sora font-semibold px-8"
                onClick={() => {
                  const section = document.getElementById("sentra-workflow");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Product Workflow
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-primary-300 text-primary-700 hover:bg-primary-50 font-sora font-semibold px-8"
                onClick={() =>
                  navigate("/", { state: { scrollTo: "contact" } })
                }
              >
                Book Launch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Card className="pixel-shadow border-red-200/70 bg-gradient-to-br from-white to-red-50/60">
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-red-600" />
                  </div>
                  <h2 className="font-sora font-bold text-2xl text-midnight-900">
                    Admin Risk Team
                  </h2>
                </div>
                <p className="text-midnight-600 leading-relaxed mb-4">
                  Control every vendor from dashboard to detail view: risk
                  intake, compliance approval, questionnaire assignment, and
                  downloadable audit-ready reports.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-red-100 text-red-700 border-red-200 hover:bg-red-100">
                    Risk Scoring
                  </Badge>
                  <Badge className="bg-amber-100 text-amber-700 border-amber-200 hover:bg-amber-100">
                    Review Queue
                  </Badge>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-100">
                    Alerts
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="pixel-shadow border-cyan-200/70 bg-gradient-to-br from-white to-cyan-50/60">
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <UsersRound className="w-5 h-5 text-cyan-700" />
                  </div>
                  <h2 className="font-sora font-bold text-2xl text-midnight-900">
                    External Vendors
                  </h2>
                </div>
                <p className="text-midnight-600 leading-relaxed mb-4">
                  Vendors receive a secure token link and complete submissions
                  in a simple portal with document uploads, questionnaire
                  answers, and visible progress.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200 hover:bg-cyan-100">
                    48h Token Access
                  </Badge>
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-100">
                    No Login Needed
                  </Badge>
                  <Badge className="bg-indigo-100 text-indigo-700 border-indigo-200 hover:bg-indigo-100">
                    Fast Submission
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="sentra-workflow"
        className="py-16 sm:py-20 px-4 sm:px-6 bg-white/70 border-y border-primary-100"
      >
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-midnight-900 mb-4">
              End-to-End Workflow,
              <span className="text-primary-600">
                {" "}
                Built for Compliance Teams
              </span>
            </h2>
            <p className="text-midnight-600 text-lg">
              From onboarding to intelligence and reporting, Sentra keeps every
              action traceable, reviewable, and launch-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card
                  key={step.id}
                  className="border-primary-100 bg-gradient-to-br from-white to-primary-50/40 pixel-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center font-bold">
                        {step.id}
                      </div>
                      <Icon className="w-5 h-5 text-primary-600" />
                    </div>
                    <h3 className="font-sora font-bold text-xl text-midnight-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-midnight-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-sora font-bold text-3xl sm:text-4xl text-midnight-900 mb-4">
              What You Launch With on Day One
            </h2>
            <p className="text-lg text-midnight-600 max-w-3xl mx-auto">
              Practical modules that map directly to your full vendor lifecycle,
              not just a dashboard shell.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            {moduleCards.map((module) => {
              const Icon = module.icon;
              return (
                <Card
                  key={module.title}
                  className="border-primary-100 bg-gradient-to-br from-white to-slate-50 pixel-shadow"
                >
                  <CardContent className="p-7">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-700" />
                      </div>
                      <h3 className="font-sora font-bold text-2xl text-midnight-900">
                        {module.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {module.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start text-midnight-600"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 mr-2 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="max-w-5xl mx-auto">
            <Card className="border-primary-200 bg-gradient-to-r from-primary-600 via-primary-500 to-violet-600 text-white overflow-hidden">
              <CardContent className="p-8 sm:p-10">
                <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
                  <div>
                    <h3 className="font-sora font-bold text-3xl sm:text-4xl mb-4">
                      Ready to Launch Sentra in Your Security Program?
                    </h3>
                    <p className="text-primary-100 text-lg leading-relaxed max-w-2xl">
                      Run your first pilot with vendor intake, compliance
                      tracking, and AI-powered document intelligence in one
                      controlled workflow.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-5">
                      <Badge className="bg-white/15 text-white border-white/30 hover:bg-white/15">
                        Token Vendor Portal
                      </Badge>
                      <Badge className="bg-white/15 text-white border-white/30 hover:bg-white/15">
                        Audit Activity Logs
                      </Badge>
                      <Badge className="bg-white/15 text-white border-white/30 hover:bg-white/15">
                        PDF Risk Reports
                      </Badge>
                      <Badge className="bg-white/15 text-white border-white/30 hover:bg-white/15">
                        AI Expiry Alerts
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 min-w-[240px]">
                    <Button
                      variant="secondary"
                      className="bg-white text-primary-700 hover:bg-primary-50 font-semibold"
                      onClick={() =>
                        navigate("/", { state: { scrollTo: "contact" } })
                      }
                    >
                      Book Product Demo
                      <CalendarClock className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/60 bg-transparent text-white hover:bg-white/10"
                      onClick={() => navigate("/case-studies")}
                    >
                      See Proof in Case Studies
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sentra;
