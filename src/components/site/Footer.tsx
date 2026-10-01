import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { VENDORROLL_URL } from "@/data/links";

const col = "label muted mb-5";
const item = "block py-1.5 text-[15px] text-bone/80 transition-colors hover:text-bone";

export function Footer() {
  return (
    <footer className="on-dark bg-ink pb-8 pt-20 text-bone">
      <div className="wrap">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-3xl tracking-[-0.02em]">Oopsie</p>
            <p className="muted mt-4 max-w-[34ch] text-[15px] leading-relaxed">
              Enterprise-quality software and compliance, for the businesses in between.
            </p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-4 md:col-span-7">
            <div>
              <p className={col}>Products</p>
              <a href={VENDORROLL_URL} className={item}>
                Vendorroll <ArrowUpRight size={13} className="inline -translate-y-px" aria-hidden />
              </a>
              <Link to="/ledgerline" className={item}>
                Ledgerline <span className="label !text-[10px] text-copper">Soon</span>
              </Link>
            </div>
            <div>
              <p className={col}>Services</p>
              <Link to="/advisory" className={item}>Advisory</Link>
              <Link to="/advisory#pen-testing" className={item}>Penetration testing</Link>
            </div>
            <div>
              <p className={col}>Company</p>
              <Link to="/company" className={item}>About</Link>
              <Link to="/contact" className={item}>Contact</Link>
            </div>
            <div>
              <p className={col}>Legal</p>
              <Link to="/privacy" className={item}>Privacy</Link>
              <Link to="/terms" className={item}>Terms</Link>
            </div>
          </nav>
        </div>
        <div className="hair-t mt-16 flex flex-col gap-2 pt-6 sm:flex-row sm:justify-between">
          <p className="label muted">© 2026 Oopsie</p>
          <p className="label muted">Built in India, for teams everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
