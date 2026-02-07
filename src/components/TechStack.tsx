import { Code2, Database, Smartphone, Cloud, Shield, Zap } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: <Smartphone className="text-blue-600" size={32} />,
      color: 'from-blue-500 to-blue-600',
      items: [
        { name: 'React Native', description: 'Cross-platform mobile framework' },
        { name: 'Expo', description: 'Development platform and SDK' },
        { name: 'TypeScript', description: 'Type-safe JavaScript' },
        { name: 'React Navigation', description: 'Routing and navigation' }
      ]
    },
    {
      category: 'Backend & Database',
      icon: <Database className="text-green-600" size={32} />,
      color: 'from-green-500 to-green-600',
      items: [
        { name: 'Appwrite', description: 'Backend as a Service (BaaS)' },
        { name: 'Appwrite Realtime', description: 'WebSocket-based live updates' },
        { name: 'SQLite', description: 'Local database for offline support' },
        { name: 'Appwrite Functions', description: 'Cloud functions' }
      ]
    },
    {
      category: 'Cloud & Infrastructure',
      icon: <Cloud className="text-purple-600" size={32} />,
      color: 'from-purple-500 to-purple-600',
      items: [
        { name: 'Appwrite Cloud', description: 'Managed cloud infrastructure' },
        { name: 'Real-time Subscriptions', description: 'Live data synchronization' },
        { name: 'Cloud Storage', description: 'File and document storage' },
        { name: 'Secure Sessions', description: 'Session management' }
      ]
    },
    {
      category: 'Security',
      icon: <Shield className="text-red-600" size={32} />,
      color: 'from-red-500 to-red-600',
      items: [
        { name: 'Expo SecureStore', description: 'Encrypted local storage' },
        { name: 'OAuth 2.0', description: 'Authentication protocol' },
        { name: 'JWT Tokens', description: 'Secure token-based auth' },
        { name: 'Input Sanitization', description: 'XSS & SQL injection prevention' }
      ]
    },
    {
      category: 'Development Tools',
      icon: <Code2 className="text-orange-600" size={32} />,
      color: 'from-orange-500 to-orange-600',
      items: [
        { name: 'Jest', description: 'Testing framework' },
        { name: 'React Testing Library', description: 'Component testing' },
        { name: 'ESLint', description: 'Code quality & linting' },
        { name: 'Git & GitHub', description: 'Version control' }
      ]
    },
    {
      category: 'Performance',
      icon: <Zap className="text-yellow-600" size={32} />,
      color: 'from-yellow-500 to-yellow-600',
      items: [
        { name: 'React Native Reanimated', description: 'Smooth animations' },
        { name: 'Connection Pooling', description: 'Optimized database queries' },
        { name: 'Query Caching', description: 'Faster data retrieval' },
        { name: 'Lazy Loading', description: 'Efficient resource loading' }
      ]
    }
  ];

  return (
    <section id="tech" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
              ⚡ MODERN TECH STACK
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Technology <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Built with cutting-edge, production-ready technologies ensuring scalability, 
            security, and exceptional performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg smooth-hover cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  {tech.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-gradient transition-all duration-300">{tech.category}</h3>
                <div className="space-y-4">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group/item">
                      <div className="font-semibold text-gray-800 mb-1 group-hover/item:text-primary transition-colors duration-300 flex items-center gap-2">
                        <div className={`w-2 h-2 bg-gradient-to-br ${tech.color} rounded-full`}></div>
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-600 ml-4">{item.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Section */}
        <div className="glass-effect rounded-3xl p-8 md:p-12 shadow-2xl border-2 border-white/20">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Architecture <span className="text-gradient">Highlights</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-gradient">Frontend Architecture</h4>
              </div>
              <ul className="space-y-4">
                {[
                  'Component-based architecture with React Native',
                  'Type-safe development with TypeScript',
                  'Context API for global state management',
                  'Custom hooks for reusable logic',
                  'Responsive design for all screen sizes',
                  'Dark mode support throughout'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Database className="text-white" size={24} />
                </div>
                <h4 className="text-2xl font-bold text-gradient">Backend Architecture</h4>
              </div>
              <ul className="space-y-4">
                {[
                  'Serverless cloud functions',
                  'Real-time WebSocket connections',
                  'RESTful API integration',
                  'Hybrid local + cloud database',
                  'Automatic data synchronization',
                  'Offline-first capability'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
