import { useInView } from '../../hooks/useInView';
import { img } from '../../utils/images';

const milestones = [
  { year: '1962', event: 'Founded in Le Locle by master watchmaker Henri Lecourt' },
  { year: '1978', event: 'Introduced the first in-house escapement, Calibre MSW-10' },
  { year: '1994', event: 'Launched the Obsidian — a black DLC titanium first in independent watchmaking' },
  { year: '2011', event: 'Meridian Manufacture opens — 100% vertical integration achieved' },
  { year: '2021', event: 'The Solstice Tourbillon wins Grand Prix d\'Horlogerie de Genève' },
];

export default function Heritage() {
  const { ref, inView } = useInView();
  return (
    <section id="craftsmanship" className="section-pad bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: image */}
          <div ref={ref} className="relative"
               style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-28px)', transition: 'opacity .8s ease, transform .8s ease' }}>
            <div className="relative overflow-hidden" style={{ height: '560px' }}>
              <img
                src={img('1585123334904-845d60e97b29', 800, 80)}
                alt="Watchmaker at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
            </div>
            {/* Floating stat */}
            <div className="absolute -right-6 bottom-10 bg-dark-card border border-dark-border p-6 shadow-card">
              <p className="font-serif text-gold text-4xl font-light">300+</p>
              <p className="font-sans text-platinum-dim text-xs tracking-wider uppercase mt-1">Hours of hand finishing<br />per movement</p>
            </div>
          </div>

          {/* Right: text + timeline */}
          <div style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(28px)', transition: 'opacity .8s .1s ease, transform .8s .1s ease' }}>
            <span className="overline">Our Heritage</span>
            <h2 className="h2 mb-4">Six Decades of<br />Obsessive Craft</h2>
            <div className="divider-gold" />
            <p className="font-sans text-platinum-dim/60 text-sm leading-relaxed mb-10">
              From a single bench in 1962 to a fully integrated manufacture, every chapter of Meridian's story is written in precision steel and polished gold. We have never outsourced a single component. We never will.
            </p>

            {/* Timeline */}
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-5 items-start"
                     style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(16px)', transition: `opacity .6s ${.2 + i * .08}s ease, transform .6s ${.2 + i * .08}s ease` }}>
                  <span className="font-serif text-gold font-semibold text-sm w-12 shrink-0 pt-0.5">{m.year}</span>
                  <div className="flex-1 border-l border-dark-border pl-5">
                    <p className="font-sans text-platinum-dim/70 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
