import { 
  Bell, 
  Calendar, 
  ClipboardCheck, 
  FileText, 
  MessageSquare, 
  TrendingUp,
  Clock,
  Shield,
  Zap,
  Users,
  BarChart,
  Lock,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: <Zap className="text-white" size={32} />,
      title: 'Lightning Fast',
      description: 'See changes instantly. No waiting, no refresh button. Updates appear as they happen—like magic, but it\'s just good engineering.',
      color: 'from-primary to-secondary',
      stats: '< 500ms'
    },
    {
      icon: <Bell className="text-white" size={32} />,
      title: 'Smart Alerts',
      description: 'Get notified about what matters. New assignment? Alert. Class cancelled? You\'ll know. No more checking your email 50 times.',
      color: 'from-warning to-orange-500',
      stats: 'Cloud-synced'
    },
    {
      icon: <ClipboardCheck className="text-white" size={32} />,
      title: 'Attendance Tracking',
      description: 'Mark attendance in seconds. Visual charts show trends at a glance. Teachers can actually focus on teaching.',
      color: 'from-success to-emerald-600',
      stats: 'Auto-sync'
    },
    {
      icon: <Calendar className="text-white" size={32} />,
      title: 'Your Schedule',
      description: 'Weekly timetable that\'s actually readable. Color-coded classes. Knows when you have conflicts. It just works.',
      color: 'from-primary to-light',
      stats: 'Smart AI'
    },
    {
      icon: <FileText className="text-white" size={32} />,
      title: 'Notes & Files',
      description: 'Upload study materials once, share with everyone. PDFs, images, whatever—we handle it. No more "can you send the notes again?"',
      color: 'from-secondary to-dark',
      stats: 'Multi-format'
    },
    {
      icon: <MessageSquare className="text-white" size={32} />,
      title: 'Announcements',
      description: 'Push important updates to students instantly. Mark them urgent. They\'ll actually see it—unlike email.',
      color: 'from-pink-500 to-rose-600',
      stats: 'Priority levels'
    },
    {
      icon: <TrendingUp className="text-white" size={32} />,
      title: 'Leave Requests',
      description: 'Submit leave in 30 seconds. Teachers approve with one tap. Everyone knows the status. No paper trail needed.',
      color: 'from-primary to-indigo-600',
      stats: 'One-tap approval'
    },
    {
      icon: <Users className="text-white" size={32} />,
      title: 'Event Management',
      description: 'Create events, set RSVP limits, send reminders. Calendar integration means students won\'t miss it.',
      color: 'from-secondary to-primary',
      stats: 'RSVP tracking'
    },
    {
      icon: <Shield className="text-white" size={32} />,
      title: 'Secure Recovery',
      description: 'Forgot password? Reset via email. Your data stays yours. We verify everything because we care about security.',
      color: 'from-error to-red-700',
      stats: 'Email verified'
    },
    {
      icon: <BarChart className="text-white" size={32} />,
      title: 'Visual Analytics',
      description: 'See patterns in attendance, grades, engagement. Charts that make sense. Data that helps you make decisions.',
      color: 'from-primary to-light',
      stats: 'Live metrics'
    },
    {
      icon: <Lock className="text-white" size={32} />,
      title: 'Secure Login',
      description: 'Biometric support. Multi-device login. Sessions that don\'t expire mid-lecture. Security meets convenience.',
      color: 'from-dark to-secondary',
      stats: 'Biometric'
    },
    {
      icon: <Clock className="text-white" size={32} />,
      title: 'Activity Feed',
      description: 'See what\'s happening right now. Recent submissions, new announcements, who\'s online—all in one glance.',
      color: 'from-light to-primary',
      stats: 'Real-time'
    },
  ];

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-transparent to-light/20">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-light/30 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-md mb-6 border border-light/30">
            <Sparkles className="text-primary" size={18} />
            <span className="text-sm font-semibold text-secondary">12+ Powerful Features</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Everything you need. <span className="text-gradient">Nothing you don't.</span>
          </h2>
          <p className="text-xl text-secondary/80 max-w-3xl mx-auto leading-[1.8]">
            Designed by educators, built for real classrooms. No fluff, just features that actually get used every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-md hover:shadow-2xl smooth-hover cursor-pointer overflow-hidden border border-light/20 hover:border-primary/20"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient overlay on hover */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}
              ></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`inline-flex w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl items-center justify-center mb-5 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-light/30 group-hover:bg-white/20 text-xs font-bold text-secondary group-hover:text-white rounded-full transition-all duration-300">
                    {feature.stats}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-white transition-colors duration-300">{feature.title}</h3>
                <p className="text-secondary/80 group-hover:text-white/90 leading-[1.7] transition-colors duration-300">{feature.description}</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Technical Stats */}
        <div className="mt-24 relative">
          <div className="glass-effect rounded-3xl p-8 md:p-12 border-2 border-light/30 shadow-xl backdrop-blur-md">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center tracking-tight">
              Built for <span className="text-gradient">performance</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:-rotate-6 transition-all">
                  <Zap className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                <div className="text-secondary/70 font-semibold">Real-Time</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-secondary to-dark rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:-rotate-6 transition-all">
                  <Clock className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">&lt;500ms</div>
                <div className="text-secondary/70 font-semibold">Latency</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-success to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:-rotate-6 transition-all">
                  <Shield className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">Offline</div>
                <div className="text-secondary/70 font-semibold">Ready</div>
              </div>
              <div className="text-center transform hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="w-20 h-20 mx-auto mb-5 bg-gradient-to-br from-primary to-light rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:-rotate-6 transition-all">
                  <Bell className="text-white" size={32} />
                </div>
                <div className="text-4xl font-bold text-gradient mb-2">Dark</div>
                <div className="text-secondary/70 font-semibold">Mode</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
