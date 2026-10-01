import { useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Layout } from "@/components/site/Layout";
import { Words } from "@/components/site/Words";
import { CONTACT_API_URL } from "@/config/webhooks";
import { CONTACT_EMAIL } from "@/data/links";

const INTERESTS = ["Vendorroll", "Ledgerline", "Advisory", "Other"] as const;
const field =
  "mt-2 w-full border border-ink/25 bg-transparent px-4 py-3.5 text-[16px] text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink focus:ring-1 focus:ring-ink";

export default function Contact() {
  const [params] = useSearchParams();
  const topic = params.get("topic")?.toLowerCase();
  const preset = INTERESTS.find((i) => i.toLowerCase() === topic) ?? "Advisory";
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [mailto, setMailto] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const data = Object.fromEntries(f.entries()) as Record<string, string>;
    setState("sending");
    try {
      const res = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: window.location.href }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setState("done");
    } catch {
      const body = `Name: ${data.name}\nCompany: ${data.company}\nInterested in: ${data.interest}\n\n${data.message}`;
      setMailto(`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Enquiry from oopsie.tech")}&body=${encodeURIComponent(body)}`);
      setState("error");
    }
  }

  return (
    <Layout path="/contact">
      <section className="on-light min-h-screen bg-bone pb-24 pt-32 text-ink sm:pt-44">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="label muted hero-fade mb-8">Contact</p>
            <h1 className="h-display"><Words text="Talk to us." /></h1>
            <p className="lede muted hero-fade mt-8" style={{ ["--d" as string]: "400ms" }}>
              Tell us a little about your company. We reply within one business day.
            </p>
          </div>

          <div className="lg:col-span-7">
            {state === "done" ? (
              <div role="status" className="hair-t pt-8">
                <p className="h-section max-w-[20ch]">Thanks, we'll be in touch within one business day.</p>
                <Link to="/" className="link-u mt-8 inline-block text-[15px]">Back to home</Link>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-[14px] font-medium">
                    Name
                    <input name="name" required autoComplete="name" maxLength={120} className={field} />
                  </label>
                  <label className="block text-[14px] font-medium">
                    Work email
                    <input name="email" type="email" required autoComplete="email" maxLength={320} className={field} />
                  </label>
                </div>
                <label className="block text-[14px] font-medium">
                  Company
                  <input name="company" autoComplete="organization" maxLength={160} className={field} />
                </label>
                <label className="block text-[14px] font-medium">
                  Interested in
                  <select name="interest" defaultValue={preset} className={`${field} appearance-none`}>
                    {INTERESTS.map((i) => <option key={i}>{i}</option>)}
                  </select>
                </label>
                <label className="block text-[14px] font-medium">
                  Message
                  <textarea name="message" required rows={6} maxLength={5000} className={field} />
                </label>
                {/* Honeypot: hidden from people, tempting to bots. */}
                <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                  <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
                </div>
                <button type="submit" disabled={state === "sending"} className="btn btn-primary disabled:opacity-60">
                  {state === "sending" ? "Sending…" : "Send message"}
                </button>
                {state === "error" && (
                  <p role="alert" className="text-[15px]">
                    That didn't go through.{" "}
                    <a href={mailto} className="link-u">Email us instead</a> and we'll pick it up from there.
                  </p>
                )}
                <p className="muted text-[13px]">
                  We'll only use this to reply to you. See our <Link to="/privacy" className="link-u">Privacy notice</Link>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
