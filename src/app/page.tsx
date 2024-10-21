import Hero from '../../components/Hero';
import Services from '../../components/Services';
import FeaturedProjects from '../../components/FeaturedProjects';
import Testimonials from '../../components/Testimonials';
import ContactForm from '../../components/ContactForm';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <ContactForm />
    </main>
  );
}
