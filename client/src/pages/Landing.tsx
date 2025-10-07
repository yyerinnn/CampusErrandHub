import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ErrandForm from "@/components/ErrandForm";
import AdvertiserSection from "@/components/AdvertiserSection";
import Footer from "@/components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhySection />
      
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ErrandForm />
        </div>
      </section>
      
      <AdvertiserSection />
      <Footer />
    </div>
  );
}
