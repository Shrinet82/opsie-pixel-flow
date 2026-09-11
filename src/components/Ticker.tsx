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
  <div
    className="flex items-center gap-10 pr-10 shrink-0"
    aria-hidden={ariaHidden}
  >
    {items.map((item) => (
      <div key={item} className="flex items-center gap-10 shrink-0">
        <span className="text-[15px] font-medium tracking-[-0.015em] whitespace-nowrap">
          {item}
        </span>
        <span className="w-[7px] h-[7px] bg-signal shrink-0" />
      </div>
    ))}
  </div>
);

const Ticker = () => (
  <section className="bg-black text-white py-5 overflow-hidden border-y border-black">
    <div className="flex w-max animate-marquee motion-reduce:animate-none">
      <Row />
      <Row ariaHidden />
    </div>
  </section>
);

export default Ticker;
