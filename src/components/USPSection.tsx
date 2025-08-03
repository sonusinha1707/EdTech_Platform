import React from 'react';
import { Users, Bot, Target, BarChart3, Video, Wrench } from 'lucide-react';

const USPSection: React.FC = () => {
  const usps = [
    {
      icon: Users,
      title: "1-on-1 Live Sessions",
      description: "Personal attention with dedicated mentors for maximum learning efficiency",
      color: "blue"
    },
    {
      icon: Bot,
      title: "24/7 AI Doubt Support",
      description: "Instant AI-powered assistance whenever you need help or clarification",
      color: "green"
    },
    {
      icon: Target,
      title: "Personalized Learning Path",
      description: "Customized curriculum based on your goals, pace, and learning style",
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Weekly Progress Reports",
      description: "Detailed analytics and insights to track your learning journey",
      color: "orange"
    },
    {
      icon: Video,
      title: "Session Recordings",
      description: "Access to all your class recordings for revision and practice",
      color: "teal"
    },
    {
      icon: Wrench,
      title: "Industry-Relevant Tools",
      description: "Learn with the latest tools and technologies used in the industry",
      color: "red"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-200', hover: 'hover:bg-blue-50' },
      green: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-200', hover: 'hover:bg-green-50' },
      purple: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-200', hover: 'hover:bg-purple-50' },
      orange: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200', hover: 'hover:bg-orange-50' },
      teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200', hover: 'hover:bg-teal-50' },
      red: { bg: 'bg-red-100', text: 'text-red-600', border: 'border-red-200', hover: 'hover:bg-red-50' }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Our Platform
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference with our unique blend of personalized attention, 
            cutting-edge technology, and proven teaching methodologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            const colorClasses = getColorClasses(usp.color);
            
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-2 ${colorClasses.border} ${colorClasses.hover}`}
              >
                <div className={`w-16 h-16 ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-8 h-8 ${colorClasses.text}`} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {usp.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Learning Experience?</h3>
            <p className="text-gray-600 mb-6">Join thousands of successful students who have already accelerated their learning with our platform.</p>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">4.9/5</div>
                <div className="text-sm text-gray-600">Student Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;