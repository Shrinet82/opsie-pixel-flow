import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useDemo } from "@/components/DemoDialog";

const faqs = [
  {
    question: "What does VendorRoll actually do?",
    answer:
      "It holds your vendor register and keeps it current. Vendors are taken through intake and approval, asked for the evidence and questionnaires their risk tier requires, and tracked through contract renewal. Every approval and rejection is recorded against the vendor, so the audit trail builds itself.",
  },
  {
    question: "Do our vendors need to create an account?",
    answer:
      "No. Vendors receive a secure link that opens a portal where they upload documents and answer questionnaires. They can see their own progress, and partial submissions are saved, so nothing is lost if they come back later.",
  },
  {
    question: "What happens when a document expires?",
    answer:
      "Expiry is read from the document itself when it is uploaded, along with its type and issuer. VendorRoll watches those dates and raises the vendor's risk and notifies the owner before the certificate lapses, rather than after.",
  },
  {
    question: "Can we use this while preparing for SOC 2 or ISO 27001?",
    answer:
      "That is the common case. Third-party risk management is an explicit requirement in both frameworks, and VendorRoll produces the evidence and the trail that satisfies it. Our advisory practice can work alongside the platform on the rest of the programme.",
  },
  {
    question: "Is the advisory work available on its own?",
    answer:
      "Yes. You can engage us for SOC 2 or ISO 27001 readiness without using VendorRoll — gap assessment, policy and evidence preparation, and support through the audit itself. Teams often start there and adopt the platform afterwards.",
  },
  {
    question: "Can we get the evidence out for an auditor?",
    answer:
      "Yes. Vendor records, questionnaire responses, and compliance reports export as PDF and CSV, and the activity log covers who did what and when across your organisation.",
  },
  {
    question: "How do different teams share it?",
    answer:
      "Access is organisation-scoped with roles, so compliance, security, and procurement each work from their own queue. Approval workflows route requests through the right people in the right order, and approvers can only act when it is genuinely their turn.",
  },
  {
    question: "How do we get access?",
    answer:
      "VendorRoll is sold direct rather than self-serve. Book a demo and we will walk through your vendor process, then set your organisation up if it is a fit.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { open: handleContactClick } = useDemo();

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="px-6 sm:px-12 py-16 sm:py-24">
      <h2
        className="display-sm font-semibold mb-12 sm:mb-16"
        style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)", maxWidth: "18ch" }}
      >
        Questions we get asked.
      </h2>

      <div className="flex flex-col border-t border-black" style={{ maxWidth: "72ch" }}>
        {faqs.map((faq, index) => {
          const isOpen = openItems.includes(index);
          return (
            <div
              key={faq.question}
              className="border-b border-rule-light"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full py-6 text-left flex justify-between items-start gap-6 group"
                aria-expanded={isOpen}
              >
                <h3
                  className="text-[17px] sm:text-[19px] font-semibold tracking-[-0.02em] leading-[1.35] group-hover:text-signal transition-colors"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <span className="shrink-0 mt-1 text-signal">
                  {isOpen ? (
                    <Minus className="w-5 h-5" />
                  ) : (
                    <Plus className="w-5 h-5" />
                  )}
                </span>
              </button>

              {isOpen && (
                <div
                  className="pb-6 pr-10"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="text-[16px] leading-[1.6] tracking-[-0.005em] text-ink-muted"
                    itemProp="text"
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
        <span className="text-[17px] tracking-[-0.01em]">
          Something we haven't covered?
        </span>
        <button
          onClick={handleContactClick}
          className="text-[15px] font-medium tracking-[-0.01em] text-signal hover:text-black transition-colors w-fit"
        >
          Ask us directly
        </button>
      </div>
    </section>
  );
};

export default FAQ;
