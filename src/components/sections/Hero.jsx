import { img } from '../../utils/images';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={img('1560343090-f0409e92791a', 1600, 85)}
          alt="Meridian watch"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-dark/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/30" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pb-28 pt-40 w-full">
        <div className="max-w-2xl">
          <p className="font-sans text-gold text-[10px] tracking-[0.5em] uppercase mb-6"
             style={{ animation: 'fadeUp .8s ease both' }}>
            Swiss Manufacture · Since 1962
          </p>
          <h1 className="font-serif font-light text-platinum text-5xl md:text-7xl lg:text-8xl leading-[1.0] mb-8"
              style={{ animation: 'fadeUp .9s .1s ease both' }}>
            Time,<br />
            <em className="text-gold not-italic">Perfected</em>.
          </h1>
          <p className="font-sans text-platinum-dim/60 text-sm md:text-base leading-relaxed max-w-md mb-10"
             style={{ animation: 'fadeUp .9s .2s ease both' }}>
            Each Meridian timepiece is conceived, engineered, and finished entirely in-house at our Le Locle atelier. No shortcuts. No compromises.
          </p>
          <div className="flex flex-wrap gap-4"
               style={{ animation: 'fadeUp .9s .35s ease both' }}>
            <a href="#collections" className="btn-gold">Explore Collections</a>
            <a href="#craftsmanship" className="btn-outline">Our Craft</a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-12 hidden md:flex flex-col items-center gap-3"
           style={{ animation: 'fadeUp 1s .6s ease both' }}>
        <span className="font-sans text-platinum-dim/30 text-[9px] tracking-[0.35em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
