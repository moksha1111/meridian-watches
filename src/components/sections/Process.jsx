import { useInView } from '../../hooks/useInView';
import { img } from '../../utils/images';
import { steps } from '../../data/process';

export default function Process() {
  const { ref, inView } = useInView();
  return (
    <section id="atelier" className="section-pad bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16"
             style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(26px)', transition: 'opacity .6s ease, transform .6s ease' }}>
          <span className="overline">The Making</span>
          <h2 className="h2 mb-4">From Sketch<br />to Wrist</h2>
          <div className="w-12 h-px bg-gold mx-auto mt-6" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-dark-border mb-20">
          {steps.map((step, i) => (
            <div key={step.number} className="border-r border-b border-dark-border p-8 group hover:bg-dark-card transition-colors"
                 style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: `opacity .7s ${.1 + i * .1}s ease, transform .7s ${.1 + i * .1}s ease` }}>
              <p className="font-serif text-gold/30 group-hover:text-gold/60 text-6xl font-light leading-none mb-6 transition-colors">{step.number}</p>
              <h3 className="font-serif text-platinum text-xl font-light mb-3">{step.title}</h3>
              <p className="font-sans text-platinum-dim/45 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Atelier image strip */}
        <div className="grid grid-cols-3 gap-3">
          {['1587836374828-4dbafa94cf0e', '1622434641406-a158123450f9', '1508057198894-247b23fe5ade'].map((id, i) => (
            <div key={id} className="relative overflow-hidden group" style={{ height: '220px' }}>
              <img src={img(id, 600, 75)} alt="Atelier" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-dark/40 group-hover:bg-dark/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
