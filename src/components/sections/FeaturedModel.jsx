import { useInView } from '../../hooks/useInView';
import { img } from '../../utils/images';
import { featuredModel } from '../../data/specs';

export default function FeaturedModel() {
  const { ref, inView } = useInView();
  return (
    <section className="section-pad bg-dark">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Right: specs (shown first on mobile, second on desktop) */}
          <div className="order-2 lg:order-2"
               style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(28px)', transition: 'opacity .8s .1s ease, transform .8s .1s ease' }}>
            <span className="overline">Featured Reference</span>
            <p className="font-sans text-platinum-dim/40 text-[10px] tracking-[0.3em] uppercase mb-2">Ref. {featuredModel.ref}</p>
            <h2 className="h2 mb-3">{featuredModel.name}</h2>
            <div className="divider-gold" />
            <p className="font-sans text-platinum-dim/60 text-sm leading-relaxed mb-8">{featuredModel.tagline}</p>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-0 border-l border-t border-dark-border mb-10">
              {featuredModel.specs.map(s => (
                <div key={s.label} className="border-r border-b border-dark-border p-4">
                  <p className="font-sans text-platinum-dim/30 text-[9px] tracking-[0.2em] uppercase">{s.label}</p>
                  <p className="font-sans text-platinum text-sm font-medium mt-1">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-4 items-center">
              <a href="#appointment" className="btn-gold">Request Information</a>
              <p className="font-serif text-platinum text-xl">{featuredModel.price}</p>
            </div>
          </div>

          {/* Left: image */}
          <div className="order-1 lg:order-1 relative"
               style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateX(0)' : 'translateX(-28px)', transition: 'opacity .8s ease, transform .8s ease' }}>
            <div className="relative overflow-hidden" style={{ height: '600px' }}>
              <img
                src={img(featuredModel.photoId, 800, 85)}
                alt={featuredModel.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gold frame accent */}
              <div className="absolute inset-4 border border-gold/10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
