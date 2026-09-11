import { useNavigate } from "react-router-dom";

const Offerings = () => {
  const navigate = useNavigate();

  return (
    <section className="px-6 sm:px-12 py-16 sm:py-24">
      <h2
        className="display-sm font-semibold mb-12 sm:mb-16"
        style={{ fontSize: "clamp(1.9rem, 4vw, 2.5rem)", maxWidth: "20ch" }}
      >
        Two ways Oopsie takes compliance off your plate.
      </h2>

      <div className="grid md:grid-cols-2 gap-12 md:gap-0">
        <div className="md:pr-12 lg:pr-20 md:border-r border-rule-light flex flex-col items-start gap-5">
          <div className="flex items-center gap-3">
            <span className="w-[30px] h-[3px] bg-signal" />
            <span className="text-[15px] font-bold tracking-[-0.025em]">
              VendorRoll
            </span>
          </div>
          <p
            className="text-[17px] leading-[1.55] tracking-[-0.01em]"
            style={{ maxWidth: "44ch" }}
          >
            The platform. Vendor intake, approval routing, evidence collection,
            questionnaires, and contract renewals — held in one register that
            stays current on its own.
          </p>
          <button
            onClick={() => navigate("/vendorroll")}
            className="text-[15px] font-medium tracking-[-0.01em] text-signal hover:text-black transition-colors"
          >
            Explore VendorRoll
          </button>
        </div>

        <div className="md:pl-12 lg:pl-20 flex flex-col items-start gap-5">
          <div className="flex items-center gap-3">
            <span className="w-[30px] h-[3px] bg-black" />
            <span className="text-[15px] font-bold tracking-[-0.025em]">
              Advisory
            </span>
          </div>
          <p
            className="text-[17px] leading-[1.55] tracking-[-0.01em]"
            style={{ maxWidth: "44ch" }}
          >
            The people. We map your controls against SOC 2 or ISO 27001, help
            write what's missing, and stay beside you through the audit itself.
          </p>
          <button
            onClick={() => navigate("/consulting")}
            className="text-[15px] font-medium tracking-[-0.01em] text-signal hover:text-black transition-colors"
          >
            Explore advisory
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
