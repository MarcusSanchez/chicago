import Header from '../../components/Header';
import ContactForm from './(components)/ContactForm';
import ContactInfo from './(components)/ContactInfo';
import ContactActions from './(components)/ContactActions';
import Footer from '../../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>

      <ContactActions />
      <Footer />
    </div>
  );
}