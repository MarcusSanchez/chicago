import Header from '../../components/Header';
import AboutHero from './(components)/AboutHero';
import OurStory from './(components)/OurStory';
import MissionVision from './(components)/MissionVision';
import Approach from './(components)/Approach';
import Footer from '../../components/Footer';
import ContactTeaser from '@/components/ContactTeaser';

export default function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Approach />
      <ContactTeaser />
      <Footer />
    </div>
  );
}
