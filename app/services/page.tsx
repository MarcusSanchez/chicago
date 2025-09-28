import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from './(components)/ServiceHero';
import PricingHeader from './(components)/PricingHeader';
import IndividualSessions from './(components)/IndividualSessions';
import PackageDeals from './(components)/PackageDeals';
import AIDrivenServices from './(components)/AIDrivenServices';
import AccessibilityNote from './(components)/AccessibilityNote';
import CallToAction from '@/components/CallToAction';

export default function Services() {
  return (
    <div className="min-h-screen">
      <Header />

      <ServiceHero />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PricingHeader />
          <IndividualSessions />
          <PackageDeals />
          <AIDrivenServices />
          {/*<GroupCoaching />*/}
          <AccessibilityNote />
          <CallToAction />
        </div>
      </section>

      <Footer />
    </div>
  );
}