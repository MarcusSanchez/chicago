import Header from '../components/Header';
import Hero from './(components)/Hero';
import Introduction from './(components)/Introduction';
import ServicesGlance from './(components)/ServicesGlance';
import WhyChooseUs from './(components)/WhyChooseUs';
import Testimonials from './(components)/Testimonials';
import ContactTeaser from '../components/ContactTeaser';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Introduction />
      <ServicesGlance />
      <WhyChooseUs />
      <Testimonials />
      <ContactTeaser />
      <Footer />
    </div>
  );
}
