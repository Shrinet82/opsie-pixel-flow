import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import * as Menu from "@radix-ui/react-dropdown-menu";
import { ArrowUpRight, ChevronDown, Menu as MenuIcon, X } from "lucide-react";
import { VENDORROLL_URL } from "@/data/links";

const linkClass =
  "label !text-[12px] px-3 py-2 text-bone/70 transition-colors hover:text-bone aria-[current=page]:text-bone";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);
  const closeTimer = useRef<number>();
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobile(false), [pathname]);

  const hoverOpen = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hoverClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <header
      className={`on-dark fixed inset-x-0 top-0 z-50 border-b text-bone transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled
          ? "border-bone/10 bg-ink/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-16 items-center justify-between">
        <Link to="/" className="font-serif text-[1.65rem] leading-none tracking-[-0.02em]" aria-label="Oopsie home">
          Oopsie
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          <Menu.Root open={open} onOpenChange={setOpen} modal={false}>
            <Menu.Trigger
              className={`${linkClass} inline-flex items-center gap-1.5`}
              onPointerEnter={hoverOpen}
              onPointerLeave={hoverClose}
            >
              Products
              <ChevronDown size={13} aria-hidden className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
            </Menu.Trigger>
            <Menu.Portal>
              <Menu.Content
                align="start"
                sideOffset={10}
                onPointerEnter={hoverOpen}
                onPointerLeave={hoverClose}
                className="on-dark z-50 w-[420px] border border-bone/10 bg-ink-2 p-2 text-bone shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] data-[state=open]:animate-[word-up_0.2s_var(--ease)]"
              >
                <Menu.Item asChild>
                  <a
                    href={VENDORROLL_URL}
                    className="group block p-4 outline-none transition-colors data-[highlighted]:bg-bone/5 hover:bg-bone/5"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-serif text-xl">
                        Vendorroll <ArrowUpRight size={15} className="inline -translate-y-px opacity-70" aria-hidden />
                      </span>
                      <span className="label !text-[10px] text-vendorroll-dark">Live · Free trial</span>
                    </span>
                    <span className="muted mt-1.5 block text-[14px]">Vendor compliance, without the chasing.</span>
                  </a>
                </Menu.Item>
                <Menu.Item asChild>
                  <Link
                    to="/ledgerline"
                    className="block p-4 outline-none transition-colors data-[highlighted]:bg-bone/5 hover:bg-bone/5"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <span className="font-serif text-xl">Ledgerline</span>
                      <span className="label !text-[10px] text-copper">Coming soon</span>
                    </span>
                    <span className="muted mt-1.5 block text-[14px]">
                      Billing for subscription and usage-based pricing.
                    </span>
                  </Link>
                </Menu.Item>
              </Menu.Content>
            </Menu.Portal>
          </Menu.Root>

          <NavLink to="/advisory" className={linkClass}>Advisory</NavLink>
          <NavLink to="/company" className={linkClass}>Company</NavLink>
          <Link to="/contact" className="btn btn-secondary ml-4 !px-5 !py-2.5 !text-[14px]">
            Talk to us
          </Link>
        </nav>

        <Dialog.Root open={mobile} onOpenChange={setMobile}>
          <Dialog.Trigger className="-mr-2 p-2 md:hidden" aria-label="Open menu">
            <MenuIcon size={22} aria-hidden />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Content
              aria-describedby={undefined}
              className="on-dark fixed inset-0 z-[60] flex flex-col bg-ink text-bone"
            >
              <Dialog.Title className="sr-only">Menu</Dialog.Title>
              <div className="wrap flex h-16 shrink-0 items-center justify-between">
                <span className="font-serif text-[1.65rem] leading-none tracking-[-0.02em]">Oopsie</span>
                <Dialog.Close className="-mr-2 p-2" aria-label="Close menu">
                  <X size={22} aria-hidden />
                </Dialog.Close>
              </div>
              <nav aria-label="Mobile" className="wrap flex flex-1 flex-col overflow-y-auto pb-10 pt-6">
                <p className="label muted mb-3">Products</p>
                <a href={VENDORROLL_URL} className="hair-b flex items-baseline justify-between py-4 font-serif text-3xl">
                  <span>Vendorroll <ArrowUpRight size={20} className="inline" aria-hidden /></span>
                  <span className="label !text-[10px] text-vendorroll-dark">Live</span>
                </a>
                <Link to="/ledgerline" className="hair-b flex items-baseline justify-between py-4 font-serif text-3xl">
                  <span>Ledgerline</span>
                  <span className="label !text-[10px] text-copper">Soon</span>
                </Link>
                <Link to="/advisory" className="hair-b py-4 font-serif text-3xl">Advisory</Link>
                <Link to="/company" className="hair-b py-4 font-serif text-3xl">Company</Link>
                <Link to="/contact" className="hair-b py-4 font-serif text-3xl">Contact</Link>
                <Link to="/contact" className="btn btn-primary mt-auto w-full">Talk to us</Link>
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
