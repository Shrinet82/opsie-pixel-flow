const items = [
  "SOC 2 Type II report",
  "ISO 27001 certificate",
  "Penetration test report",
  "Cyber liability insurance",
  "Data processing agreement",
  "Sub-processor list",
  "Business continuity plan",
  "PCI DSS attestation",
  "Security questionnaire",
  "Certificate of insurance",
];

const Row = ({ ariaHidden }: { ariaHidden?: boolean }) => (
  <div className="flex items-center gap-10 pr-10 shrink-0" aria-hidden={ariaHidden}>
    {items.map((item) => (
      <div key={item} className="flex items-center gap-10 shrink-0">
        <span className="text-[15px] tracking-[-0.01em] whitespace-nowrap">
          {item}
        </span>
        <span className="w-[6px] h-[6px] bg-ink shrink-0" />
      </div>
    ))}
  </div>
);

const Ticker = () => (
  <section className="bg-signal text-ink py-4 overflow-hidden">
    <div className="flex w-max animate-marquee motion-reduce:animate-none">
      <Row />
      <Row ariaHidden />
    </div>
  </section>
);

export default Ticker;
