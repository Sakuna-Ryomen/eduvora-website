import { GraduationCap, Sparkles, ArrowRight, Zap, Users, Shield } from 'lucide-react';
import { Suspense, lazy, useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';

const Scene3D = lazy(() => import('./Scene3D').catch(() => {
  console.log('Failed to load Scene3D, using fallback');
  return { default: () => null };
}));

const Hero = () => {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow3D(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-accent via-light/20 to-transparent">
      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-light/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg animate-scale-in border border-light/20">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-secondary">Now Live • v1.4.0</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black leading-[1.1] animate-fade-in tracking-tight">
                <span className="text-gradient">Eduvora</span>
              </h1>
              
              <div className="flex items-center gap-3 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                <p className="text-2xl md:text-3xl font-bold text-dark">
                  Education, streamlined
                </p>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-secondary/80 leading-[1.8] animate-fade-in max-w-xl" style={{ animationDelay: '0.2s' }}>
              We built what students and teachers actually need—not another clunky admin panel. 
              Real-time everything. Works offline. Feels instant.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a 
                href="https://www.mediafire.com/file/odwbryob3sfsw1r/eduvora-1.4.0.apk/file"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-2xl smooth-hover flex items-center justify-center gap-2 border border-primary/20 hover:scale-105 transition-all"
              >
                Download Latest
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a 
                href="#features" 
                className="px-8 py-4 bg-white text-primary rounded-xl font-semibold shadow-md hover:shadow-xl smooth-hover border-2 border-primary/30 hover:border-primary hover:scale-105 transition-all"
              >
                See What's New
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-110 transition-transform inline-block">15K+</div>
                <div className="text-sm text-secondary/70 mt-1">Lines of Code</div>
              </div>
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-110 transition-transform inline-block">12+</div>
                <div className="text-sm text-secondary/70 mt-1">Features</div>
              </div>
              <div className="text-center lg:text-left group cursor-pointer">
                <div className="text-3xl md:text-4xl font-bold text-gradient group-hover:scale-110 transition-transform inline-block">500+</div>
                <div className="text-sm text-secondary/70 mt-1">Active Users</div>
              </div>
            </div>
          </div>

          {/* Right Content - 3D Scene */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {show3D ? (
              <ErrorBoundary fallback={
                <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-light/30 blur-3xl rounded-full animate-pulse-slow"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-64 h-64 mx-auto bg-gradient-to-br from-light/30 to-primary/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-light/30">
                        <GraduationCap size={120} className="text-primary/60" />
                      </div>
                    </div>
                  </div>
                </div>
              }>
                <Suspense fallback={
                  <div className="w-full h-[500px] md:h-[600px] flex items-center justify-center bg-gradient-to-br from-light/20 to-primary/10 rounded-3xl border border-light/30">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mx-auto mb-4"></div>
                      <p className="text-secondary/70 font-medium">Loading 3D Experience...</p>
                    </div>
                  </div>
                }>
                  <Scene3D />
                </Suspense>
              </ErrorBoundary>
            ) : (
              <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-light/30 blur-3xl rounded-full animate-pulse-slow"></div>
                  <GraduationCap className="relative text-primary animate-float" size={200} strokeWidth={1} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feature Pills */}
        <div className="mt-20 flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-3 smooth-hover border border-light/20 hover:border-primary/30 hover:scale-105 transition-all">
            <Sparkles className="text-primary" size={20} />
            <span className="font-semibold text-dark">Version 1.4.0</span>
          </div>
          <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-3 smooth-hover border border-light/20 hover:border-warning/30 hover:scale-105 transition-all">
            <Zap className="text-warning" size={20} />
            <span className="font-semibold text-dark">Real-Time</span>
          </div>
          <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-3 smooth-hover border border-light/20 hover:border-secondary/30 hover:scale-105 transition-all">
            <Users className="text-secondary" size={20} />
            <span className="font-semibold text-dark">Multi-Role</span>
          </div>
          <div className="glass-effect px-6 py-3 rounded-full flex items-center gap-3 smooth-hover border border-light/20 hover:border-success/30 hover:scale-105 transition-all">
            <Shield className="text-success" size={20} />
            <span className="font-semibold text-dark">Secure</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/40 rounded-full p-1 bg-white/50 backdrop-blur-sm">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
