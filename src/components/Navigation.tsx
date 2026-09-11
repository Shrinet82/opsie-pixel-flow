import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDemo } from "@/components/DemoDialog";

const links = [
  { label: "VendorRoll", path: "/vendorroll" },
  { label: "Advisory", path: "/consulting" },
  { label: "Company", path: "/company" },
  { label: "FAQ", path: "/faq" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { open: openDemo } = useDemo();

  const go = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  const book = () => {
    openDemo();
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-sm border-b border-ink-rule">
      <div className="gutter flex items-center justify-between h-[68px]">
        <button
          onClick={() => go("/")}
          className="font-display text-[22px] font-normal tracking-[-0.01em] text-cream hover:text-signal transition-colors"
        >
          Oopsie
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => go(link.path)}
              className={`text-[14px] tracking-[-0.01em] transition-colors hover:text-signal ${
                location.pathname === link.path ? "text-signal" : "text-ink-body"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={book}
            className="border border-signal text-signal hover:bg-signal hover:text-ink text-[14px] font-medium tracking-[-0.01em] px-5 py-2 transition-colors"
          >
            Book a demo
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1 text-cream"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-ink-rule gutter py-5 flex flex-col gap-5">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => go(link.path)}
              className="text-left text-[16px] tracking-[-0.01em] text-ink-body hover:text-signal transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={book}
            className="border border-signal text-signal text-[15px] font-medium px-5 py-3 text-center"
          >
            Book a demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
