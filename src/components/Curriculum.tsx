import React from 'react';
import { BookOpen, Code, Users, CheckCircle, Target, BarChart3 } from 'lucide-react';

const Curriculum: React.FC = () => {
  const modules = [
    {
      icon: BookOpen,
      title: "Fundamentals Mastery",
      description: "Build strong foundation with core concepts and principles",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Real-world Project Building",
      description: "Apply knowledge through hands-on industry-relevant projects",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      title: "Personalized Doubt Solving",
      description: "Get instant clarification on complex topics from experts",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: CheckCircle,
      title: "Weekly Assignments",
      description: "Reinforce learning with carefully crafted practice problems",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      icon: Target,
      title: "Exam & Interview Preparation",
      description: "Master test-taking strategies and interview techniques",
      gradient: "from-red-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Feedback Loops and Revisions",
      description: "Continuous improvement through detailed progress analysis",
      gradient: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What You'll{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Learn
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive curriculum is designed to take you from beginner to expert with structured, 
            personalized learning modules that adapt to your pace and style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${module.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {module.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {module.description}
                  </p>
                </div>
                
                <div className={`h-1 bg-gradient-to-r ${module.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium">All modules include live sessions, recordings, and practice materials</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;