import { Star, Quote } from 'lucide-react';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Head of Department, Computer Science',
      avatar: '👩‍💼',
      content: 'Eduvora transformed how we manage our department. Real-time updates mean I\'m always in the loop, and the dashboard gives me insights I never had before. It\'s like having an assistant that never sleeps.',
      rating: 5,
      institution: 'Tech University'
    },
    {
      name: 'Rahul Sharma',
      role: 'Professor, Mathematics',
      avatar: '👨‍🏫',
      content: 'I used to spend hours on attendance and leave management. Now it takes minutes. My students love how easy it is to submit assignments and check their progress. This actually feels built for real educators.',
      rating: 5,
      institution: 'State College'
    },
    {
      name: 'Priya Desai',
      role: 'Student, Final Year',
      avatar: '👩‍🎓',
      content: 'Finally, an app that doesn\'t feel like it was designed in 2010. I get instant notifications about everything, can track my attendance, and submit leaves without running around campus. Game changer.',
      rating: 5,
      institution: 'Engineering College'
    }
  ];

  return (
    <section id="testimonials" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-accent to-light/30">
      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full mb-4">
            <Star className="text-primary" size={18} fill="currentColor" />
            <span className="text-sm font-semibold text-secondary">What People Say</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-dark">
            Real feedback from <span className="text-gradient">real users</span>
          </h2>
          <p className="text-lg text-secondary/80 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what educators and students have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer ${
                activeIndex === index ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveIndex(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Quote className="text-white" size={24} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-dark/90 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-primary/10">
                <div className="w-12 h-12 bg-gradient-to-br from-light to-primary/20 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-dark">{testimonial.name}</div>
                  <div className="text-sm text-secondary/70">{testimonial.role}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.institution}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="glass-effect rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-gradient mb-2">4.9/5</div>
              <div className="text-secondary/70">Average Rating</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-gradient mb-2">500+</div>
              <div className="text-secondary/70">Active Users</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-secondary/70">Institutions</div>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <div className="text-4xl font-bold text-gradient mb-2">98%</div>
              <div className="text-secondary/70">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
