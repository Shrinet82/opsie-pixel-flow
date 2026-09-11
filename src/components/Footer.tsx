import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-ink text-cream border-t border-ink-rule gutter py-9 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8">
        <div className="flex flex-col gap-1.5">
          <span className="font-display text-[22px] font-normal tracking-[-0.01em]">
            Oopsie
          </span>
          <span className="text-[14px] text-ink-muted">
            VendorRoll and compliance advisory.
          </span>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          <button
            onClick={() => navigate("/vendorroll")}
            className="text-[14px] font-medium text-ink-body hover:text-signal transition-colors cursor-pointer"
          >
            VendorRoll
          </button>
          <button
            onClick={() => navigate("/consulting")}
            className="text-[14px] font-medium text-ink-body hover:text-signal transition-colors cursor-pointer"
          >
            Advisory
          </button>
          <button
            onClick={() => navigate("/company")}
            className="text-[14px] font-medium text-ink-body hover:text-signal transition-colors cursor-pointer"
          >
            Company
          </button>
          <button
            onClick={() => navigate("/faq")}
            className="text-[14px] font-medium text-ink-body hover:text-signal transition-colors cursor-pointer"
          >
            FAQ
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
