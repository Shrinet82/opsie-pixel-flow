import { useState } from "react";
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
  const { open: openDemo } = useDemo();

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );
  };

  return (
    <section className="bg-cream text-ink gutter py-10 sm:py-16">
      <div className="max-w-[72ch] border-t border-[rgba(14,15,18,0.6)]">
        {faqs.map((faq, index) => {
          const isOpen = openItems.includes(index);
          return (
            <div
              key={faq.question}
              className="border-b border-cream-rule"
              itemScope
              itemType="https://schema.org/Question"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                aria-expanded={isOpen}
                className="w-full flex gap-5 justify-between items-start py-5 sm:py-6 bg-transparent border-0 text-left cursor-pointer color-inherit font-sans"
              >
                <span
                  className={`text-[clamp(16.5px,1.8vw,19px)] font-semibold tracking-[-0.02em] leading-[1.35] transition-colors ${
                    isOpen ? "text-signal-cream" : "text-ink hover:text-signal-cream"
                  }`}
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <span className="font-mono text-[18px] leading-none text-signal-cream shrink-0 mt-0.5">
                  {isOpen ? "\u2212" : "+"}
                </span>
              </button>

              {isOpen && (
                <div
                  className="pb-6 pr-6 sm:pr-10"
                  itemScope
                  itemType="https://schema.org/Answer"
                >
                  <p
                    className="m-0 text-[15.5px] sm:text-[16px] leading-[1.65] text-cream-body max-w-[64ch]"
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

      <div className="flex flex-wrap gap-4 items-center mt-8 sm:mt-12">
        <span className="text-[16.5px] sm:text-[17px]">
          Something we haven't covered?
        </span>
        <button
          type="button"
          onClick={openDemo}
          className="bg-ink text-cream hover:bg-signal-cream px-6 py-3.5 border-0 font-sans text-[14.5px] font-semibold transition-colors cursor-pointer"
        >
          Ask us directly
        </button>
      </div>
    </section>
  );
};

export default FAQ;
