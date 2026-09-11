import { useDemo } from "@/components/DemoDialog";

const CTA = () => {
  const { open: openDemo } = useDemo();

  return (
    <section className="bg-signal text-ink gutter py-10 sm:py-14">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 sm:gap-10">
        <p className="font-display font-normal text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.08] tracking-[-0.02em] max-w-[22ch] m-0">
          Your auditor is going to ask. Have it ready.
        </p>
        <button
          onClick={openDemo}
          className="bg-ink text-cream hover:bg-cream hover:text-ink text-[14.5px] font-bold tracking-[-0.01em] px-7 py-4 shrink-0 w-fit transition-colors cursor-pointer"
        >
          Book a demo
        </button>
      </div>
    </section>
  );
};

export default CTA;
