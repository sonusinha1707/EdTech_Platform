import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Curriculum from './components/Curriculum';
import USPSection from './components/USPSection';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import PricingPlans from './components/PricingPlans';
import BottomCTA from './components/BottomCTA';
import ModalForm from './components/ModalForm';
import ChatBotModal from './components/ChatBotModal';

function App() {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isChatModalOpen, setIsChatModalOpen] = useState(false);
  const [isCounsellorModalOpen, setIsCounsellorModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenTrialModal={() => setIsTrialModalOpen(true)} />
      
      <section id="home">
        <HeroSection onOpenTrialModal={() => setIsTrialModalOpen(true)} />
      </section>
      
      <section id="curriculum">
        <Curriculum />
      </section>
      
      <section id="why-choose-us">
        <USPSection />
      </section>
      
      <section id="how-it-works">
        <HowItWorks />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
      
      <section id="pricing">
        <PricingPlans />
      </section>
      
      <BottomCTA 
        onOpenTrialModal={() => setIsTrialModalOpen(true)}
        onOpenChatModal={() => setIsChatModalOpen(true)}
        onOpenCounsellorModal={() => setIsCounsellorModalOpen(true)}
      />

      <ModalForm
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
        title="Book Your Free Trial Class"
        type="trial"
      />

      <ModalForm
        isOpen={isCounsellorModalOpen}
        onClose={() => setIsCounsellorModalOpen(false)}
        title="Talk to a Counsellor"
        type="counsellor"
      />

      <ChatBotModal
        isOpen={isChatModalOpen}
        onClose={() => setIsChatModalOpen(false)}
      />
    </div>
  );
}

export default App;