import { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

interface PhoneModelProps {
  scrollY: number;
  mouseX: number;
  mouseY?: number;
}

function DashboardUI() {
  return (
    <div style={{
      width: '276px',
      height: '600px',
      background: 'linear-gradient(to bottom, #f8f9fa 0%, #ffffff 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflow: 'hidden',
      position: 'relative',
      borderRadius: '30px',
      boxShadow: '0 0 20px rgba(0,0,0,0.2)',
      userSelect: 'none',
      WebkitUserSelect: 'none',
      MozUserSelect: 'none',
      msUserSelect: 'none',
    }}>
      {/* Header */}
      <div style={{
        background: 'linear-gradient(135deg, #4A7FA7 0%, #1A3D63 100%)',
        padding: '16px',
        paddingTop: '50px',
        color: 'white',
        borderRadius: '30px 30px 0 0',
      }}>
        <div style={{ fontSize: '14px', opacity: 0.9, marginBottom: '4px' }}>Hello,</div>
        <div style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '8px' }}>Avinash Maurya</div>
        <div style={{ fontSize: '11px', opacity: 0.85 }}>TYIT • Div B</div>
        <div style={{
          position: 'absolute',
          top: '58px',
          right: '16px',
          width: '48px',
          height: '48px',
          background: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#4A7FA7',
        }}>A</div>
        <div style={{
          marginTop: '12px',
          background: 'rgba(255,255,255,0.2)',
          padding: '6px 14px',
          borderRadius: '20px',
          fontSize: '11px',
          display: 'inline-block',
        }}>Academic Year 2025-26</div>
      </div>

      {/* Performance Cards */}
      <div style={{ padding: '16px', paddingTop: '20px' }}>
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0A1931' }}>
          Performance Snapshot
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
          {[
            { icon: '✓', value: '0%', label: 'Attendance', bg: '#E3F2FD' },
            { icon: '📄', value: '0', label: 'Notes', bg: '#E3F2FD' },
            { icon: '📅', value: '0', label: 'Events', bg: '#E3F2FD' },
            { icon: '🔔', value: '0', label: 'Notices', bg: '#FFE3E3' },
          ].map((item, i) => (
            <div key={i} style={{
              background: 'white',
              borderRadius: '16px',
              padding: '14px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: item.bg,
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                marginBottom: '8px',
              }}>{item.icon}</div>
              <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#0A1931', marginBottom: '2px' }}>
                {item.value}
              </div>
              <div style={{ fontSize: '11px', color: '#666' }}>{item.label}</div>
            </div>
          ))}
        </div>

        {/* Quick Services */}
        <div style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0A1931' }}>
          Quick Services
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
          {[
            { icon: '🕐', label: 'Schedule', bg: '#4A7FA7' },
            { icon: '📝', label: 'Leave', bg: '#1A3D63' },
            { icon: '⚖️', label: 'Redressal', bg: '#4A7FA7' },
            { icon: '👤', label: 'Profile', bg: '#1A3D63' },
          ].map((item, i) => (
            <div key={i} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
            }}>
              <div style={{
                width: '52px',
                height: '52px',
                background: item.bg,
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
              }}>{item.icon}</div>
              <div style={{ fontSize: '10px', color: '#666', textAlign: 'center' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PhoneModel({ scrollY: _scrollY, mouseX: _mouseX }: PhoneModelProps) {
  const phoneRef = useRef<THREE.Group>(null);
  const [dragRotation, setDragRotation] = useState({ x: 0.1, y: 0.2 });
  const [isDragging, setIsDragging] = useState(false);
  const [zoom, setZoom] = useState(4);
  const isHoveringRef = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastRotation = useRef({ x: 0.1, y: 0.2 });

  useFrame(() => {
    if (phoneRef.current) {
      // Apply zoom
      phoneRef.current.position.z = zoom;
    }
  });

  const handlePointerDown = (e: any) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    lastRotation.current = { ...dragRotation };
    e.stopPropagation();
  };

  const handlePointerMove = (e: any) => {
    if (!isDragging) return;
    
    const deltaX = (e.clientX - dragStart.current.x) * 0.01;
    const deltaY = (e.clientY - dragStart.current.y) * 0.01;
    
    const newRotation = {
      x: lastRotation.current.x - deltaY,
      y: lastRotation.current.y + deltaX,
    };
    
    // Apply rotation limits
    newRotation.x = Math.max(-Math.PI * 0.4, Math.min(Math.PI * 0.4, newRotation.x));
    
    setDragRotation(newRotation);
    
    if (phoneRef.current) {
      phoneRef.current.rotation.x = newRotation.x;
      phoneRef.current.rotation.y = newRotation.y;
    }
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  const handlePointerEnter = () => {
    isHoveringRef.current = true;
    document.body.style.cursor = 'grab';
  };

  const handlePointerLeave = () => {
    isHoveringRef.current = false;
    document.body.style.cursor = 'default';
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isHoveringRef.current) return;
      e.preventDefault();
      e.stopPropagation();
      
      setZoom((prev) => {
        const newZoom = prev - e.deltaY * 0.005;
        return Math.max(-2, Math.min(8, newZoom));
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.body.style.cursor = 'default';
    };
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.body.style.cursor = 'grabbing';
      window.addEventListener('pointermove', handlePointerMove);
      window.addEventListener('pointerup', handlePointerUp);
      return () => {
        document.body.style.cursor = 'grab';
        window.removeEventListener('pointermove', handlePointerMove);
        window.removeEventListener('pointerup', handlePointerUp);
      };
    }
  }, [isDragging]);

  return (
    <group 
      ref={phoneRef} 
      rotation={[dragRotation.x, dragRotation.y, 0]} 
      position={[0, 0, zoom]}
    >
      {/* Invisible interaction box */}
      <mesh
        onPointerDown={handlePointerDown}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        visible={false}
      >
        <boxGeometry args={[3, 5, 1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Dashboard UI */}
      <group position={[0, 0, 0]}>
        {/* Black screen background */}
        <mesh position={[0, 0, 0]}>
          <planeGeometry args={[0.69, 1.5]} />
          <meshBasicMaterial color="#000000" />
        </mesh>
        
        {/* Dashboard UI overlay */}
        <Html
          transform
          position={[0, 0, 0.01]}
          distanceFactor={1.35}
          style={{
            width: '276px',
            height: '600px',
            pointerEvents: 'none',
          }}
          zIndexRange={[0, 0]}
        >
          <DashboardUI />
        </Html>
      </group>
    </group>
  );
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1.5, 3.2, 0.2]} />
      <meshStandardMaterial color="#4A7FA7" opacity={0.5} transparent />
    </mesh>
  );
}

function CameraController({ mouseX, mouseY }: { mouseX: number; mouseY: number }) {
  const { camera } = useThree();
  
  useFrame(() => {
    camera.position.x += (mouseX * 2 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 2 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });
  
  return null;
}

function Scene3D() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  try {
    return (
      <div className="w-full h-[500px] md:h-[600px]">
        <Canvas 
          camera={{ position: [0, 0, 7], fov: 45 }}
          onCreated={({ gl }) => {
            gl.setClearColor('#f9fafb', 0);
            gl.toneMapping = THREE.ACESFilmicToneMapping;
            gl.toneMappingExposure = 1.2;
          }}
        >
          <Suspense fallback={<LoadingFallback />}>
            {/* Main lighting */}
            <ambientLight intensity={0.3} />
            <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
            <directionalLight position={[-5, 3, 2]} intensity={0.6} color="#B3CFE5" />
            
            {/* Rim lighting for phone edges */}
            <spotLight 
              position={[-3, 2, 5]} 
              angle={0.5} 
              penumbra={1} 
              intensity={1.5} 
              color="#4A7FA7" 
            />
            <spotLight 
              position={[3, -2, 5]} 
              angle={0.5} 
              penumbra={1} 
              intensity={1} 
              color="#B3CFE5" 
            />
            
            {/* Screen glow simulation */}
            <pointLight position={[0, 0, 2]} intensity={0.8} color="#00CED1" distance={5} />
            
            <PhoneModel scrollY={scrollY} mouseX={mousePos.x} mouseY={mousePos.y} />
            <OrbitControls 
              enabled={false}
            />
          </Suspense>
        </Canvas>
      </div>
    );
  } catch (error) {
    console.error('Scene3D render error:', error);
    return null;
  }
}

export default Scene3D;
