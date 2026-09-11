import { useNavigate } from "react-router-dom";
import { Section, PlateHead } from "@/components/plates";

const Offerings = () => {
  const navigate = useNavigate();

  return (
    <Section ground="cream">
      <PlateHead
        numeral="07"
        heading="Two ways Oopsie takes compliance off your plate."
        ground="cream"
      >
        <div className="grid md:grid-cols-2 mt-8 sm:mt-10 border-t border-cream-rule-strong">
          <div className="py-7 sm:py-8 sm:pr-8 md:pr-10 md:border-r border-cream-rule flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-[30px] h-[3px] bg-signal-cream inline-block" />
              <span className="text-[14px] font-bold tracking-[-0.02em]">
                VendorRoll
              </span>
            </div>
            <p className="m-0 text-[16px] sm:text-[16.5px] leading-[1.6] text-cream-body max-w-[44ch]">
              The platform. Vendor intake, approval routing, evidence collection,
              questionnaires, and contract renewals — held in one register that
              stays current on its own.
            </p>
            <button
              onClick={() => navigate("/vendorroll")}
              className="mt-2 text-[15px] font-medium text-signal-cream hover:text-ink border-b border-signal-cream/40 hover:border-ink pb-0.5 transition-colors"
            >
              Explore VendorRoll
            </button>
          </div>

          <div className="py-7 sm:py-8 sm:pl-8 md:pl-10 flex flex-col items-start gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-[30px] h-[3px] bg-ink inline-block" />
              <span className="text-[14px] font-bold tracking-[-0.02em]">
                Advisory
              </span>
            </div>
            <p className="m-0 text-[16px] sm:text-[16.5px] leading-[1.6] text-cream-body max-w-[44ch]">
              The people. We map your controls against SOC 2 or ISO 27001, help
              write what's missing, and stay beside you through the audit itself.
            </p>
            <button
              onClick={() => navigate("/consulting")}
              className="mt-2 text-[15px] font-medium text-signal-cream hover:text-ink border-b border-signal-cream/40 hover:border-ink pb-0.5 transition-colors"
            >
              Explore advisory
            </button>
          </div>
        </div>
      </PlateHead>
    </Section>
  );
};

export default Offerings;
