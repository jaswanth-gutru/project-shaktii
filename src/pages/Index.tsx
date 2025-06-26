
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ChatbotSection from '@/components/ChatbotSection';
import SelfDefenseSection from '@/components/SelfDefenseSection';
import PersonalitySection from '@/components/PersonalitySection';
import InteractionSection from '@/components/InteractionSection';
import ResourcesSection from '@/components/ResourcesSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ChatbotSection />
      <SelfDefenseSection />
      <PersonalitySection />
      <InteractionSection />
      <ResourcesSection />
      <Footer />
    </div>
  );
};

export default Index;
