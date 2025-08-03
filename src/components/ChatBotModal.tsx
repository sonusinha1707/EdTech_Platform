import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User } from 'lucide-react';

interface ChatBotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBotModal: React.FC<ChatBotModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI Learning Assistant. I'm here to help you with any questions about our courses, pricing, or learning process. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedResponses = {
    'hello': "Hello! Great to meet you! I'm here to help you learn more about our personalized 1-on-1 classes. What would you like to know?",
    'pricing': "Our pricing starts at $29/month for the 12-month plan, $39/month for 6 months, and $49/month for 3 months. All plans include 1-on-1 sessions, AI support, and session recordings. Would you like to know more about what's included?",
    'courses': "We offer personalized courses in Web Development, Data Science, Digital Marketing, UI/UX Design, Mobile Development, Machine Learning, and more. Each course is tailored to your specific goals and pace. What subject interests you most?",
    'trial': "Yes! We offer a completely free trial class where you can experience our teaching methodology firsthand. You'll get to meet your potential mentor and see how our 1-on-1 approach works. Would you like me to help you book one?",
    'mentors': "All our mentors are industry experts with years of practical experience. They're carefully selected and trained in our personalized teaching methodology. You'll be matched with a mentor who specializes in your chosen subject and understands your learning goals.",
    'support': "You get 24/7 AI support for instant help with any questions, plus access to your dedicated human mentor during scheduled sessions. You can also reach our support team anytime via email or chat.",
    'default': "That's a great question! For detailed information about that topic, I'd recommend speaking with one of our educational counselors who can provide personalized guidance. Would you like me to arrange a call for you?"
  };

  const botResponses = [
    "That's interesting! Tell me more about your learning goals.",
    "I can definitely help with that! What specific area would you like to focus on?",
    "Great question! Let me share some insights about that.",
    "Based on what you're telling me, I think our personalized approach would be perfect for you.",
    "That sounds like exactly what our 1-on-1 sessions are designed to address!"
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return predefinedResponses.hello;
    }
    if (message.includes('price') || message.includes('cost') || message.includes('pricing')) {
      return predefinedResponses.pricing;
    }
    if (message.includes('course') || message.includes('subject') || message.includes('learn')) {
      return predefinedResponses.courses;
    }
    if (message.includes('trial') || message.includes('free') || message.includes('demo')) {
      return predefinedResponses.trial;
    }
    if (message.includes('mentor') || message.includes('teacher') || message.includes('instructor')) {
      return predefinedResponses.mentors;
    }
    if (message.includes('support') || message.includes('help')) {
      return predefinedResponses.support;
    }
    
    return botResponses[Math.floor(Math.random() * botResponses.length)];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: generateBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md h-[600px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold">AI Learning Assistant</h3>
              <p className="text-xs text-green-100">Online • Ready to help</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.sender === 'user' ? 'bg-blue-600 ml-2' : 'bg-green-600 mr-2'
                }`}>
                  {message.sender === 'user' ? (
                    <User className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>
                <div className={`px-4 py-2 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-br-md'
                    : 'bg-gray-100 text-gray-800 rounded-bl-md'
                }`}>
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-2">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-100 px-4 py-2 rounded-2xl rounded-bl-md">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-100">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="w-10 h-10 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <Send className="w-5 h-5 text-white" />
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-2">
            AI responses are simulated for demonstration purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBotModal;