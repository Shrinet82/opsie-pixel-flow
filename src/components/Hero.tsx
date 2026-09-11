import { useNavigate } from "react-router-dom";
import { useDemo } from "@/components/DemoDialog";
import { PlateFrame } from "@/components/plates";
import { DashboardPlate } from "@/components/plates/DashboardPlate";

const Hero = () => {
  const navigate = useNavigate();
  const { open: openDemo } = useDemo();

  return (
    <section className="bg-ink text-cream gutter pt-[120px] sm:pt-[150px] pb-[var(--rhythm)]">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
        <div className="flex flex-col">
          <h1 className="t-display m-0 animate-wipe-up">
            Nothing <em className="italic text-signal font-light">expires</em>{" "}
            unnoticed.
          </h1>

          <div
            className="flex flex-col gap-7 mt-10 animate-rise"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="flex items-center gap-3">
              <span
                className="w-[30px] h-px bg-signal origin-left animate-draw-x"
                style={{ animationDelay: "0.5s" }}
              />
              <span className="text-[14px] font-medium tracking-[-0.01em]">
                VendorRoll
              </span>
            </div>

            <p className="t-body m-0 text-ink-body">
              VendorRoll tracks every vendor document you depend on — who issued
              it, what it proves, and the day it stops being true.
            </p>

            <div className="flex flex-wrap items-center gap-7">
              <button
                onClick={openDemo}
                className="bg-signal text-ink hover:bg-cream text-[15px] font-medium tracking-[-0.01em] px-7 py-3.5 transition-colors cursor-pointer"
              >
                Book a demo
              </button>
              <button
                onClick={() => navigate("/consulting")}
                className="text-[15px] tracking-[-0.01em] text-ink-body hover:text-signal underline underline-offset-[6px] decoration-ink-rule hover:decoration-signal transition-colors cursor-pointer"
              >
                SOC 2 and ISO 27001 advisory
              </button>
            </div>
          </div>
        </div>

        <div className="animate-rise" style={{ animationDelay: "0.25s" }}>
          <PlateFrame
            label="PLATE 01"
            state="DASHBOARD · OVERDUE EVIDENCE"
            minHeight={420}
          >
            <DashboardPlate />
          </PlateFrame>
        </div>
      </div>
    </section>
  );
};

export default Hero;
