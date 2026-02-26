import { useInView } from '../../hooks/useInView';

const stats = [
  { value: '1962',   label: 'Founded',              sub: 'Le Locle, Switzerland' },
  { value: '100%',   label: 'In-House Made',         sub: 'Every single component' },
  { value: '62',     label: 'Years of Manufacture',  sub: 'Unbroken heritage' },
  { value: '34',     label: 'Master Watchmakers',    sub: 'At our atelier' },
  { value: '4,200+', label: 'Timepieces Delivered',  sub: 'To collectors worldwide' },
  { value: '99.97%', label: 'Accuracy Rate',         sub: 'COSC certified' },
];

export default function Stats() {
  const { ref, inView } = useInView();
  return (
    <section className="bg-dark-card border-y border-dark-border py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 divide-x divide-dark-border">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center px-6 py-2"
                 style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: `opacity .6s ${i * 80}ms ease, transform .6s ${i * 80}ms ease` }}>
              <p className="font-serif text-gold text-3xl md:text-4xl font-light">{s.value}</p>
              <p className="font-sans text-platinum text-xs font-medium tracking-wider mt-2 leading-tight">{s.label}</p>
              <p className="font-sans text-platinum-dim/35 text-[10px] mt-1">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
