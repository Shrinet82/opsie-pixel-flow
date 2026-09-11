import { useNavigate } from "react-router-dom";
import { useDemo } from "@/components/DemoDialog";

const Hero = () => {
  const navigate = useNavigate();
  const { open: goToContact } = useDemo();

  return (
    <section className="pt-32 sm:pt-40">
      <div className="px-6 sm:px-12">
        <h1
          className="display font-bold animate-wipe-up"
          style={{ fontSize: "clamp(2.75rem, 8.5vw, 6.5rem)", maxWidth: "15ch" }}
        >
          Nothing expires unnoticed.
        </h1>
      </div>

      <div
        className="grid md:grid-cols-2 gap-10 md:gap-12 px-6 sm:px-12 pt-10 sm:pt-14 pb-14 sm:pb-16 md:items-end animate-rise"
        style={{ animationDelay: "0.12s" }}
      >
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-3">
            <span
              className="w-[30px] h-[3px] bg-signal origin-left animate-draw-x"
              style={{ animationDelay: "0.5s" }}
            />
            <span className="text-[15px] font-bold tracking-[-0.025em]">
              VendorRoll
            </span>
          </div>
          <button
            onClick={goToContact}
            className="bg-signal hover:bg-signal-hover text-white text-base font-semibold tracking-[-0.01em] px-[34px] py-[18px] transition-colors"
          >
            Book a demo
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <p
            className="text-[17px] sm:text-[19px] font-normal tracking-[-0.015em] leading-[1.5]"
            style={{ maxWidth: "40ch" }}
          >
            VendorRoll tracks every vendor document you depend on — who issued
            it, what it proves, and the day it stops being true.
          </p>
          <button
            onClick={() => navigate("/consulting")}
            className="text-[15px] font-medium tracking-[-0.01em] text-signal hover:text-black transition-colors text-left w-fit"
          >
            SOC 2 and ISO 27001 advisory
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
