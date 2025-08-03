import React from 'react';
import { MessageCircle, Phone, Calendar } from 'lucide-react';

interface BottomCTAProps {
  onOpenTrialModal: () => void;
  onOpenChatModal: () => void;
  onOpenCounsellorModal: () => void;
}

const BottomCTA: React.FC<BottomCTAProps> = ({
  onOpenTrialModal,
  onOpenChatModal,
  onOpenCounsellorModal
}) => {
  return (
    <>
      {/* Main CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Future?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful students who have accelerated their learning with our personalized approach. 
              Your journey to expertise starts here.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <button
              onClick={onOpenTrialModal}
              className="group bg-white text-blue-600 px-8 py-6 rounded-2xl font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              <Calendar className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div>Book a Free Trial</div>
              <div className="text-sm font-normal text-blue-500 mt-1">Start learning today</div>
            </button>

            <button
              onClick={onOpenCounsellorModal}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-6 rounded-2xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              <Phone className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div>Talk to a Counsellor</div>
              <div className="text-sm font-normal text-orange-100 mt-1">Get personalized guidance</div>
            </button>

            <button
              onClick={onOpenChatModal}
              className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-6 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div>Chat with AI Mentor</div>
              <div className="text-sm font-normal text-green-100 mt-1">Get instant help</div>
            </button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-blue-100 mb-4">Still have questions?</p>
            <p className="text-sm text-blue-200">Call us at +1 (555) 123-4567 or email hello@learnwithus.com</p>
          </div>
        </div>
      </section>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
        <div className="flex">
          <button
            onClick={onOpenChatModal}
            className="flex-1 flex items-center justify-center py-3 text-green-600 hover:bg-green-50 transition-colors duration-200"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">Chat</span>
          </button>
          
          <button
            onClick={onOpenCounsellorModal}
            className="flex-1 flex items-center justify-center py-3 text-orange-600 hover:bg-orange-50 transition-colors duration-200 border-x border-gray-200"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span className="font-medium">Call</span>
          </button>
          
          <button
            onClick={onOpenTrialModal}
            className="flex-1 flex items-center justify-center py-3 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
          >
            <Calendar className="w-5 h-5 mr-2" />
            <span className="font-medium">Free Trial</span>
          </button>
        </div>
      </div>

      {/* Spacer for sticky bottom bar on mobile */}
      <div className="h-16 md:hidden"></div>
    </>
  );
};

export default BottomCTA;