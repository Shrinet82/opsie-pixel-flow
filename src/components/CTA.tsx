import { useDemo } from "@/components/DemoDialog";

const CTA = () => {
  const { open: goToContact } = useDemo();

  return (
    <section className="bg-signal text-white px-6 sm:px-12 py-14 sm:py-[54px]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10">
        <p
          className="display-sm font-semibold m-0"
          style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", maxWidth: "22ch" }}
        >
          Your auditor is going to ask. Have it ready.
        </p>
        <button
          onClick={goToContact}
          className="bg-white text-signal hover:bg-white/90 text-base font-semibold tracking-[-0.01em] px-[34px] py-[18px] shrink-0 w-fit transition-colors"
        >
          Book a demo
        </button>
      </div>
    </section>
  );
};

export default CTA;
