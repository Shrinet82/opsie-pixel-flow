import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { CONTACT_API_URL } from "@/config/webhooks";

type DemoContextValue = { open: () => void };

const DemoContext = createContext<DemoContextValue | null>(null);

export const useDemo = () => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemo must be used inside DemoProvider");
  }
  return context;
};

const fieldClass =
  "w-full border border-black bg-white px-4 py-3 text-[15px] tracking-[-0.01em] outline-none focus:border-signal focus:ring-1 focus:ring-signal transition-colors placeholder:text-ink-faint";

const labelClass = "block text-[14px] font-medium tracking-[-0.01em] mb-2";

const emptyForm = {
  name: "",
  email: "",
  businessType: "",
  automation: "",
  website: "",
};

export const DemoProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const open = useCallback(() => setIsOpen(true), []);
  const value = useMemo(() => ({ open }), [open]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          businessType: formData.businessType,
          automation: formData.automation,
          website: formData.website,
          source: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error(`Submission failed with status ${response.status}`);
      }

      toast({
        title: "Message sent",
        description: "We'll get back to you within one working day.",
        duration: 5000,
      });

      setFormData(emptyForm);
      setIsOpen(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "That didn't send",
        description:
          "Something went wrong on our side. Try again in a moment, or email us directly.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DemoContext.Provider value={value}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl border border-black p-0 gap-0 rounded-none sm:rounded-none max-h-[90vh] overflow-y-auto">
          <div className="border-b border-rule-light px-6 sm:px-10 py-6">
            <DialogTitle
              className="display-sm font-semibold"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Book a demo
            </DialogTitle>
            <p className="text-[15px] leading-[1.55] text-ink-muted mt-3 max-w-[46ch]">
              Tell us roughly where you are. We'll come back within one working
              day with a time, and we'll spend it on your vendor process rather
              than a slide deck.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="px-6 sm:px-10 py-6 flex flex-col gap-5"
          >
            <input
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="demo-name" className={labelClass}>
                  Name
                </label>
                <input
                  id="demo-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="demo-email" className={labelClass}>
                  Work email
                </label>
                <input
                  id="demo-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="demo-company" className={labelClass}>
                Company
              </label>
              <input
                id="demo-company"
                name="businessType"
                type="text"
                value={formData.businessType}
                onChange={handleChange}
                className={fieldClass}
                placeholder="Company name and roughly how many vendors you track"
              />
            </div>

            <div>
              <label htmlFor="demo-need" className={labelClass}>
                What are you dealing with
              </label>
              <textarea
                id="demo-need"
                name="automation"
                required
                value={formData.automation}
                onChange={handleChange}
                className={`${fieldClass} min-h-28 resize-y`}
                placeholder="An audit with a date on it, a vendor register that has drifted, or something else"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-signal hover:bg-signal-hover disabled:opacity-60 disabled:cursor-not-allowed text-white text-base font-semibold tracking-[-0.01em] px-[34px] py-[16px] w-fit transition-colors"
            >
              {isSubmitting ? "Sending" : "Request a demo"}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </DemoContext.Provider>
  );
};
