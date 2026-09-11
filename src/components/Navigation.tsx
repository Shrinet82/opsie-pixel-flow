import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDemo } from "@/components/DemoDialog";

const links = [
  { label: "VendorRoll", path: "/vendorroll" },
  { label: "Advisory", path: "/consulting" },
  { label: "Company", path: "/company" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const { open: openDemo } = useDemo();

  const goToContact = () => {
    openDemo();
    setIsMenuOpen(false);
  };

  const go = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-black">
      <div className="flex items-center justify-between h-16 px-6 sm:px-12">
        <button
          onClick={() => go("/")}
          className="font-archivo font-bold text-lg tracking-[-0.035em] hover:text-signal transition-colors"
        >
          Oopsie
        </button>

        <div className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => go(link.path)}
              className={`text-[13.5px] font-medium tracking-[-0.01em] transition-colors hover:text-signal ${
                location.pathname === link.path ? "text-signal" : "text-black"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={goToContact}
            className="bg-signal hover:bg-signal-hover text-white text-[13.5px] font-semibold tracking-[-0.01em] px-[18px] py-[9px] transition-colors"
          >
            Book a demo
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-1"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-rule-light px-6 py-5 flex flex-col gap-5">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => go(link.path)}
              className="text-left text-base font-medium tracking-[-0.015em] hover:text-signal transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={goToContact}
            className="bg-signal hover:bg-signal-hover text-white text-base font-semibold tracking-[-0.01em] px-5 py-3 text-center transition-colors"
          >
            Book a demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
