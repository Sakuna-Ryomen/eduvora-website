import { Calendar, CheckCircle, Zap, Download, ExternalLink } from 'lucide-react';

const Releases = () => {
  const releases = [
    {
      version: '1.4.0',
      date: 'February 7, 2026',
      status: 'Latest',
      focus: 'Real-Time Systems & Live Updates',
      highlights: [
        'Real-Time Dashboard System for HOD and Teachers',
        'Enhanced Notification System with Appwrite Realtime',
        'Notification Bell Icons with Live Badges',
        'WebSocket-based instant updates',
        'Real-time activity feeds',
        'Multi-collection subscriptions',
        'Auto-refresh functionality',
        'Improved dashboard data architecture'
      ],
      stats: {
        features: '5+',
        improvements: '3',
        coverage: '68%'
      },
      color: 'from-blue-500 to-blue-600',
      badgeColor: 'bg-blue-600',
      downloadUrl: '#'
    },
    {
      version: '1.3.0',
      date: 'January 28, 2026',
      status: 'Stable',
      focus: 'Account Recovery, HOD Features & Database Migration',
      highlights: [
        'Complete Account Recovery System',
        'Password recovery with email verification',
        'HOD Schedule Management interface',
        'Teacher Feature Enhancements (Announcements, Events)',
        'Enhanced Leave Request Processing',
        'Admin Role Migration',
        'Enhanced Database Helpers',
        'Appwrite Functions Integration',
        'Authentication System Improvements',
        'Student Module Enhancements'
      ],
      stats: {
        features: '7+',
        bugFixes: '5',
        docs: '8'
      },
      color: 'from-green-500 to-green-600',
      badgeColor: 'bg-green-600',
      downloadUrl: '#'
    },
    {
      version: '1.2.0',
      date: 'December 11, 2025',
      status: 'Production',
      focus: 'QR Code Dual-Scan Attendance System',
      highlights: [
        'Full-screen QR code scanner with camera integration',
        'Dual-scan attendance logic (Begin QR + Finish QR)',
        'Dynamic header showing scan mode',
        'Visual scanning frame with instructions',
        'Time-stamped proof of attendance (HH:MM:SS)',
        'Red to green status indicators',
        'Automatic state reset after successful scans',
        'Camera permission handling for iOS & Android'
      ],
      stats: {
        features: '8',
        security: '2-step',
        accuracy: '100%'
      },
      color: 'from-purple-500 to-purple-600',
      badgeColor: 'bg-purple-600',
      downloadUrl: '#'
    },
    {
      version: '1.1.0',
      date: 'December 6, 2025',
      status: 'Major Update',
      focus: 'Teacher Module & Advanced Student Features',
      highlights: [
        'Complete Teacher Dashboard with statistics',
        'Subject Management with CRUD operations',
        'Attendance Marking with quick actions',
        'Interactive Donut Chart with touch-to-select',
        '12-month Calendar View with holiday detection',
        'Student List with search functionality',
        'Real-time AttendanceContext for cross-module sync',
        'Teacher Profile management',
        'Role switching between Student & Teacher views',
        'Full dark mode support across all screens'
      ],
      stats: {
        modules: '2',
        screens: '15+',
        features: '20+'
      },
      color: 'from-orange-500 to-orange-600',
      badgeColor: 'bg-orange-600',
      downloadUrl: '#'
    }
  ];

  return (
    <section id="releases" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-sm font-semibold">
              📦 VERSION RELEASES
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Release <span className="text-gradient">History</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Track the evolution of Eduvora through our major releases, 
            each bringing powerful new features and improvements.
          </p>
        </div>

        {/* Timeline connector */}
        <div className="hidden lg:block absolute left-1/2 top-48 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent transform -translate-x-1/2 opacity-20"></div>

        <div className="space-y-12">
          {releases.map((release, index) => (
            <div 
              key={index}
              className={`relative animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className={`hidden lg:block absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-br ${release.color} rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg z-10`}></div>
              
              <div className={`glass-effect rounded-3xl overflow-hidden shadow-2xl smooth-hover ${index % 2 === 0 ? 'lg:mr-auto lg:w-[calc(50%-3rem)]' : 'lg:ml-auto lg:w-[calc(50%-3rem)]'}`}>
                {/* Header */}
                <div className={`bg-gradient-to-r ${release.color} p-8 text-white relative overflow-hidden`}>
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full -ml-20 -mb-20"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <h3 className="text-4xl font-bold">v{release.version}</h3>
                        <span className={`${release.badgeColor} px-4 py-1.5 rounded-full text-sm font-bold shadow-lg`}>
                          {release.status}
                        </span>
                      </div>
                      <button className="flex items-center gap-2 px-6 py-3 bg-white/20 hover:bg-white/30 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
                        <Download size={20} />
                        Download
                      </button>
                    </div>
                    
                    <div className="flex items-center text-white/90 mb-3">
                      <Calendar size={18} className="mr-2" />
                      {release.date}
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Zap size={20} />
                      <span className="text-lg font-semibold">{release.focus}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h4 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                    <CheckCircle className="text-green-500 mr-2" size={24} />
                    Key Highlights
                  </h4>
                  
                  <ul className="space-y-3 mb-6">
                    {release.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start group">
                        <span className={`inline-block w-2 h-2 bg-gradient-to-br ${release.color} rounded-full mr-3 mt-2 group-hover:scale-150 transition-transform duration-300`}></span>
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    {Object.entries(release.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-br ${release.color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-sm text-gray-600 capitalize mt-1">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div className={`bg-gradient-to-r ${release.color} bg-opacity-5 px-8 py-4 flex items-center justify-between`}>
                  <span className="text-sm text-gray-600 font-medium">Released on {release.date}</span>
                  <a href="#" className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors duration-300">
                    View Details
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass-effect rounded-3xl p-12 border-2 border-white/20">
            <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Get notified about new releases and updates. Follow our development journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl smooth-hover">
                Download Latest Version
              </button>
              <button className="px-8 py-4 bg-white text-primary rounded-xl font-semibold shadow-lg hover:shadow-2xl smooth-hover border-2 border-primary/20">
                View Changelog
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Releases;
