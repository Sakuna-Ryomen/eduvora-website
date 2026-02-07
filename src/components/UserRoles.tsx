import { User, UserCog, Users2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

const UserRoles = () => {
  const [activeRole, setActiveRole] = useState(0);

  const roles = [
    {
      icon: <User size={48} className="text-white" />,
      title: 'Student',
      color: 'from-blue-500 to-blue-600',
      description: 'Comprehensive tools for students to track their academic journey',
      features: [
        'View personalized dashboard with attendance & upcoming events',
        'Access notes, assignments, and study materials',
        'Submit leave applications and track status',
        'View schedule and timetable',
        'Receive real-time notifications',
        'Submit grievances through redressal system',
        'View announcements and events',
        'Track academic progress and statistics'
      ]
    },
    {
      icon: <UserCog size={48} className="text-white" />,
      title: 'Teacher',
      color: 'from-green-500 to-green-600',
      description: 'Powerful tools for teachers to manage classes and students',
      features: [
        'Real-time dashboard with live statistics',
        'Mark attendance for classes',
        'Upload and manage study notes',
        'Create announcements for students',
        'Review and process leave requests',
        'Create and manage events',
        'View teaching schedules',
        'Access real-time activity feed',
        'Manage profile and academic credentials'
      ]
    },
    {
      icon: <Users2 size={48} className="text-white" />,
      title: 'HOD (Head of Department)',
      color: 'from-purple-500 to-purple-600',
      description: 'Advanced oversight and management capabilities for department heads',
      features: [
        'Department-wide real-time dashboard',
        'Live teacher and student statistics',
        'Monitor pending leave approvals',
        'View and manage all schedules',
        'Department overview with real-time data',
        'Approve/reject leave applications',
        'Access department-wide reports',
        'Manage teachers and students',
        'Review grievances and redressal queries'
      ]
    }
  ];

  return (
    <section id="roles" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
              👥 USER ROLES
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Three Roles, <span className="text-gradient">One Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Eduvora provides tailored experiences for each user role with specialized 
            dashboards and features designed for their specific needs.
          </p>
        </div>

        {/* Desktop View - Cards */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {roles.map((role, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg smooth-hover cursor-pointer relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveRole(index)}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${role.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className={`w-24 h-24 bg-gradient-to-br ${role.color} rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-xl`}>
                  {role.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-center group-hover:text-white transition-colors duration-300">{role.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90 text-center mb-6 transition-colors duration-300">{role.description}</p>
                
                <ul className="space-y-3">
                  {role.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group/item">
                      <CheckCircle2 
                        size={18} 
                        className="text-green-500 group-hover:text-white mr-2 mt-0.5 flex-shrink-0 group-hover/item:scale-125 transition-transform duration-300" 
                      />
                      <span className="text-gray-700 group-hover:text-white/90 text-sm transition-colors duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* View Details Button */}
                <button className="mt-6 w-full px-6 py-3 bg-gray-100 group-hover:bg-white/20 text-gray-800 group-hover:text-white rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105">
                  View Details
                </button>
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet View - Tabs */}
        <div className="lg:hidden">
          {/* Tab Buttons */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {roles.map((role, index) => (
              <button
                key={index}
                onClick={() => setActiveRole(index)}
                className={`flex-shrink-0 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeRole === index
                    ? `bg-gradient-to-r ${role.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 shadow hover:shadow-md'
                }`}
              >
                {role.title}
              </button>
            ))}
          </div>

          {/* Active Role Content */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className={`w-24 h-24 bg-gradient-to-br ${roles[activeRole].color} rounded-2xl flex items-center justify-center mb-6 mx-auto animate-scale-in`}>
              {roles[activeRole].icon}
            </div>
            <h3 className="text-3xl font-bold mb-3 text-center">{roles[activeRole].title}</h3>
            <p className="text-gray-600 text-center mb-8">{roles[activeRole].description}</p>
            
            <ul className="space-y-4">
              {roles[activeRole].features.map((feature, featureIndex) => (
                <li 
                  key={featureIndex} 
                  className="flex items-start group animate-fade-in"
                  style={{ animationDelay: `${featureIndex * 0.05}s` }}
                >
                  <CheckCircle2 size={20} className="text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="glass-effect rounded-3xl p-12 border-2 border-white/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience <span className="text-gradient">Eduvora</span>?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Download now and discover how Eduvora can transform your educational experience
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl smooth-hover">
              Download Latest Version
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserRoles;
