import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="border-t border-black px-6 sm:px-12 py-10 sm:py-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg tracking-[-0.035em]">Oopsie</span>
          <span className="text-sm text-ink-muted tracking-[-0.005em]">
            VendorRoll and compliance advisory.
          </span>
        </div>

        <div className="flex flex-wrap gap-x-8 gap-y-3">
          <button
            onClick={() => navigate("/vendorroll")}
            className="text-sm font-medium tracking-[-0.01em] hover:text-signal transition-colors"
          >
            VendorRoll
          </button>
          <button
            onClick={() => navigate("/consulting")}
            className="text-sm font-medium tracking-[-0.01em] hover:text-signal transition-colors"
          >
            Advisory
          </button>
          <button
            onClick={() => navigate("/company")}
            className="text-sm font-medium tracking-[-0.01em] hover:text-signal transition-colors"
          >
            Company
          </button>
          <button
            onClick={() => navigate("/faq")}
            className="text-sm font-medium tracking-[-0.01em] hover:text-signal transition-colors"
          >
            FAQ
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
