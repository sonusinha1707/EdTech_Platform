import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      country: "🇺🇸",
      quote: "The personalized approach transformed my learning experience. My mentor understood exactly what I needed and helped me achieve my goals faster than I ever imagined.",
      rating: 5,
      course: "Web Development"
    },
    {
      name: "Raj Patel",
      country: "🇮🇳",
      quote: "24/7 AI support was a game-changer for me. Whenever I got stuck, help was just a click away. The quality of teaching exceeded all my expectations.",
      rating: 5,
      course: "Data Science"
    },
    {
      name: "Maria Garcia",
      country: "🇪🇸",
      quote: "From zero knowledge to landing my dream job in 6 months! The structured curriculum and weekly progress tracking kept me motivated throughout the journey.",
      rating: 5,
      course: "Digital Marketing"
    },
    {
      name: "David Kim",
      country: "🇰🇷",
      quote: "The session recordings were incredibly helpful for revision. I could go back and review complex topics anytime. Best investment in my career!",
      rating: 5,
      course: "Machine Learning"
    },
    {
      name: "Emma Thompson",
      country: "🇬🇧",
      quote: "My mentor's expertise and the personalized feedback helped me build confidence in my skills. The one-on-one sessions made all the difference.",
      rating: 5,
      course: "UI/UX Design"
    },
    {
      name: "Ahmed Hassan",
      country: "🇪🇬",
      quote: "The industry-relevant curriculum and real-world projects prepared me perfectly for my new role. Highly recommend this platform to anyone serious about learning.",
      rating: 5,
      course: "Mobile Development"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Student{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who have transformed their careers and achieved their learning goals 
            with our personalized approach.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-100" />
            
            <div className="relative z-10">
              <div className="flex mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <h4 className="text-lg font-bold text-gray-900 mr-2">
                        {testimonials[currentIndex].name}
                      </h4>
                      <span className="text-2xl">{testimonials[currentIndex].country}</span>
                    </div>
                    <p className="text-blue-600 font-medium">{testimonials[currentIndex].course}</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors duration-200"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
            <div className="text-gray-600">Happy Students</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Course Completion Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;