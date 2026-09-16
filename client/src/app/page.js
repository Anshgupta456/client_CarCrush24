import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ReachSection from '../components/ReachSection';
import WhyChooseSection from '../components/WhyChooseSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaBannerSection from '../components/CtaBannerSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#F8F9F5]">
      {/* Floating Pill Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* 4-Pillar Trust Bar Ribbon */}
        <TrustBar />

        {/* Reach Section - Serving You Across North India */}
        <ReachSection />

        {/* How It Works - 5 Simple Steps */}
        <HowItWorksSection />

        {/* Why Choose CarCrush24 - Comparison Section */}
        <WhyChooseSection />

        {/* What Our Customers Say - Testimonials */}
        <TestimonialsSection />

        {/* Ready to Recycle CTA Banner */}
        <CtaBannerSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
