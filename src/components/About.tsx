import { BookOpen, Users, Shield, Rocket, Target, Award, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-light/10 to-accent">
      {/* Decorative background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-light/40 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6 border border-light/30">
            <Code2 className="text-primary" size={18} />
            <span className="text-sm font-semibold text-secondary">The Story</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Built by students, <span className="text-gradient">for students</span>
          </h2>
          <p className="text-xl text-secondary/80 max-w-3xl mx-auto leading-[1.8]">
            We got tired of clunky college apps that felt like they were designed in 2005. So we built something better.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
              What makes it <span className="text-gradient">different?</span>
            </h3>
            <p className="text-secondary/80 text-lg leading-[1.8]">
              Eduvora started in August 2023 and has evolved through 1.4+ versions. Built with <span className="font-semibold text-primary">React Native</span>, <span className="font-semibold text-primary">Expo</span>, and <span className="font-semibold text-primary">TypeScript</span>,
              powered by <span className="font-semibold text-primary">Appwrite</span> for real-time backend. No lag. No "refresh to see new messages." Just instant WebSocket-based updates.
            </p>
            <p className="text-secondary/80 text-lg leading-[1.8]">
              From QR-code attendance to real-time dashboards, from iOS Face ID to 12-month calendars—every feature is built with attention to detail.
              Teachers mark attendance in seconds. Students see updates instantly. HODs get live statistics across departments.
            </p>
            <p className="text-secondary/80 text-lg leading-[1.8]">
              We obsessed over speed (&lt; 500ms latency), security (biometric auth), and user experience. With SQLite for offline support,
              Context API for state management, and cross-platform support for iOS & Android—it scales from 50 students to 5,000.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-5 pt-8">
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-all shadow-md">
                  <Rocket className="text-white" size={20} />
                </div>
                <span className="font-semibold text-dark">Live Today</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-11 h-11 bg-gradient-to-br from-success to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-all shadow-md">
                  <Target className="text-white" size={20} />
                </div>
                <span className="font-semibold text-dark">Real-Time</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-11 h-11 bg-gradient-to-br from-primary to-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-all shadow-md">
                  <Shield className="text-white" size={20} />
                </div>
                <span className="font-semibold text-dark">Secure</span>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer">
                <div className="w-11 h-11 bg-gradient-to-br from-secondary to-dark rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-all shadow-md">
                  <Award className="text-white" size={20} />
                </div>
                <span className="font-semibold text-dark">Professional</span>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl smooth-hover border-2 border-light/30 hover:border-primary/30">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg">
                <BookOpen className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-dark group-hover:text-gradient transition-all duration-300">Everything, one place</h4>
              <p className="text-secondary/80 leading-[1.7]">
                Notes, assignments, schedules, announcements. No hunting through five different apps to find what you need.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl smooth-hover border-2 border-light/30 hover:border-secondary/30">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-dark rounded-2xl flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg">
                <Users className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-dark group-hover:text-gradient transition-all duration-300">Three roles, one app</h4>
              <p className="text-secondary/80 leading-[1.7]">
                Students, teachers, HODs—everyone gets exactly what they need. No bloat, no confusion.
              </p>
            </div>

            <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-xl smooth-hover border-2 border-light/30 hover:border-success/30">
              <div className="w-16 h-16 bg-gradient-to-br from-success to-emerald-600 rounded-2xl flex items-center justify-center mb-5 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg">
                <Shield className="text-white" size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-3 text-dark group-hover:text-gradient transition-all duration-300">Security first</h4>
              <p className="text-secondary/80 leading-[1.7]">
                Encrypted data, secure auth, reliable infrastructure. Your information stays yours.
              </p>
            </div>
          </div>
        </div>

        {/* Development Timeline Banner */}
        <div className="animated-gradient rounded-3xl p-1 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="bg-dark rounded-3xl p-8 md:p-12 text-white">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight">38 days of work</h3>
                </div>
                <p className="text-2xl text-light font-bold mb-5">
                  Jan 1 – Feb 7, 2026
                </p>
                <p className="text-white/80 text-lg leading-[1.8]">
                  Intense sprint from idea to production. Two major releases. Real testing. Real users. No shortcuts on quality.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-110 transition-all duration-300 border border-white/10 cursor-pointer hover:border-primary/30">
                  <div className="text-4xl font-bold text-gradient mb-2">2</div>
                  <div className="text-sm text-white/70 font-medium">Releases</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-110 transition-all duration-300 border border-white/10 cursor-pointer hover:border-primary/30">
                  <div className="text-4xl font-bold text-gradient mb-2">120+</div>
                  <div className="text-sm text-white/70 font-medium">Commits</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-110 transition-all duration-300 border border-white/10 cursor-pointer hover:border-primary/30">
                  <div className="text-4xl font-bold text-gradient mb-2">68%</div>
                  <div className="text-sm text-white/70 font-medium">Tested</div>
                </div>
                <div className="glass-effect rounded-2xl p-6 text-center transform hover:scale-110 transition-all duration-300 border border-white/10 cursor-pointer hover:border-primary/30">
                  <div className="text-4xl font-bold text-gradient mb-2">45+</div>
                  <div className="text-sm text-white/70 font-medium">Screens</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
