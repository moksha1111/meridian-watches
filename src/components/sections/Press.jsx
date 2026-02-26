import { useInView } from '../../hooks/useInView';
import { pressQuotes } from '../../data/press';

export default function Press() {
  const { ref, inView } = useInView();
  return (
    <section id="press" className="section-pad bg-dark">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="text-center mb-16"
             style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(26px)', transition: 'opacity .6s ease, transform .6s ease' }}>
          <span className="overline">As Seen In</span>
          <h2 className="h2">The World Notices</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pressQuotes.map((q, i) => (
            <div key={q.id} className="border border-dark-border p-8 hover:border-gold/25 transition-colors"
                 style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(28px)', transition: `opacity .7s ${i * 120}ms ease, transform .7s ${i * 120}ms ease` }}>
              {/* Open quote mark */}
              <p className="font-serif text-gold/20 text-8xl font-light leading-none mb-2 -mt-4">"</p>
              <p className="font-serif italic text-platinum/75 text-lg leading-relaxed mb-8">
                {q.quote}
              </p>
              <div className="border-t border-dark-border pt-5 flex items-center justify-between">
                <p className="font-sans font-semibold text-gold text-xs tracking-[0.3em] uppercase">{q.source}</p>
                <p className="font-sans text-platinum-dim/35 text-xs">{q.issue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
