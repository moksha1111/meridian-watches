import Navbar        from './components/layout/Navbar';
import Footer        from './components/layout/Footer';
import Hero          from './components/sections/Hero';
import Collections   from './components/sections/Collections';
import Heritage      from './components/sections/Heritage';
import FeaturedModel from './components/sections/FeaturedModel';
import Process       from './components/sections/Process';
import Stats         from './components/sections/Stats';
import Press         from './components/sections/Press';
import Appointment   from './components/sections/Appointment';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Collections />
      <Heritage />
      <FeaturedModel />
      <Process />
      <Press />
      <Appointment />
      <Footer />
    </>
  );
}
