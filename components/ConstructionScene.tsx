'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'

function MetricOverlay({ position, title, value, status, delay = 0, isMobile }: any) {
  return (
    <Html position={position} center className="pointer-events-none">
      <div 
        className={`bg-white/95 backdrop-blur-md border border-slate-200 rounded-lg animate-[fadeIn_0.5s_ease_forwards] ${isMobile ? 'p-1.5 w-24' : 'p-3 w-44 shadow-[0_8px_20px_rgba(0,0,0,0.08)]'}`}
        style={{ animationDelay: `${delay}s`, opacity: 0 }}
      >
        <div className={`text-slate-500 uppercase tracking-wider mb-0.5 ${isMobile ? 'text-[6px]' : 'text-[10px]'}`}>{title}</div>
        <div className={`text-slate-900 font-bold leading-tight mb-0.5 ${isMobile ? 'text-xs' : 'text-xl'}`}>{value}</div>
        <div className="flex items-center gap-1">
          <div className={`rounded-full ${status === 'success' ? 'bg-[#10b981]' : 'bg-blue-500'} ${isMobile ? 'w-1 h-1' : 'w-1.5 h-1.5'}`}></div>
          <span className={`text-slate-400 ${isMobile ? 'text-[6px]' : 'text-[10px]'}`}>En tiempo real</span>
        </div>
      </div>
    </Html>
  )
}

function FloatingDrone({ delay, radius, speed, height }: { delay: number, radius: number, speed: number, height: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = (state.clock.elapsedTime * speed) + delay
      meshRef.current.position.x = Math.cos(time) * radius
      meshRef.current.position.z = Math.sin(time) * radius
      meshRef.current.position.y = height + Math.sin(time * 3) * 0.15
      
      meshRef.current.rotation.y = -time
      meshRef.current.rotation.z = Math.sin(time * 3) * 0.1
    }
  })

  return (
    <group ref={meshRef}>
      <mesh>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshStandardMaterial color="#475569" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.3, 0]}>
        <coneGeometry args={[0.2, 0.6, 16]} />
        <meshBasicMaterial color="#10b981" transparent={true} opacity={0.1} />
      </mesh>
      <mesh position={[0.06, 0, 0]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshBasicMaterial color="#10b981" />
      </mesh>
    </group>
  )
}

function FuturisticBuilding({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05 - (isMobile ? 1.5 : 0.8)
    }
  })

  const floors = 12
  const floorHeight = 0.5
  const buildingWidth = 1.6
  const buildingDepth = 1.6
  const totalHeight = floors * floorHeight
  const coreWidth = buildingWidth * 0.3

  return (
    <group ref={groupRef} scale={isMobile ? 0.6 : 0.65}>
      <mesh position={[0, totalHeight / 2, 0]}>
        <boxGeometry args={[coreWidth, totalHeight + 0.5, coreWidth]} />
        <meshStandardMaterial color="#020617" metalness={0.8} roughness={0.1} />
      </mesh>

      <mesh position={[0, totalHeight / 2, 0]}>
        <cylinderGeometry args={[coreWidth * 0.8, coreWidth * 0.8, totalHeight + 1, 8]} />
        <meshStandardMaterial color="#0f172a" metalness={1} roughness={0} />
      </mesh>

      {Array.from({ length: floors }).map((_, i) => {
        const yPos = i * floorHeight + floorHeight / 2
        const isBuilt = i < 8
        const rotationOffset = isBuilt ? 0 : (i - 8) * 0.05
        
        return (
          <group key={i} position={[0, yPos, 0]} rotation={[0, rotationOffset, 0]}>
            {isBuilt ? (
              <>
                <mesh position={[0, -floorHeight / 2 + 0.05, 0]}>
                  <boxGeometry args={[buildingWidth, 0.1, buildingDepth]} />
                  <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.1} />
                </mesh>
                
                <mesh position={[buildingWidth/2 - 0.05, 0, buildingWidth/2 - 0.05]}>
                  <boxGeometry args={[0.05, floorHeight, 0.05]} />
                  <meshStandardMaterial color="#334155" metalness={1} />
                </mesh>
                <mesh position={[-buildingWidth/2 + 0.05, 0, buildingWidth/2 - 0.05]}>
                  <boxGeometry args={[0.05, floorHeight, 0.05]} />
                  <meshStandardMaterial color="#334155" metalness={1} />
                </mesh>
                <mesh position={[buildingWidth/2 - 0.05, 0, -buildingWidth/2 + 0.05]}>
                  <boxGeometry args={[0.05, floorHeight, 0.05]} />
                  <meshStandardMaterial color="#334155" metalness={1} />
                </mesh>
                <mesh position={[-buildingWidth/2 + 0.05, 0, -buildingWidth/2 + 0.05]}>
                  <boxGeometry args={[0.05, floorHeight, 0.05]} />
                  <meshStandardMaterial color="#334155" metalness={1} />
                </mesh>

                <mesh position={[0, 0, 0]}>
                  <boxGeometry args={[buildingWidth - 0.15, floorHeight - 0.12, buildingDepth - 0.15]} />
                  <meshStandardMaterial 
                    color="#000"
                    emissive={Math.random() > 0.5 ? "#ffd700" : "#000"} 
                    emissiveIntensity={0.4}
                    metalness={1} roughness={0.05} transparent opacity={0.9}
                  />
                </mesh>
              </>
            ) : (
              <mesh position={[0, 0, 0]}>
                <boxGeometry args={[buildingWidth - 0.1, floorHeight - 0.1, buildingDepth - 0.1]} />
                <meshStandardMaterial 
                  color="#ffd700" emissive="#ffd700" emissiveIntensity={0.6}
                  wireframe={true} transparent opacity={0.4}
                />
              </mesh>
            )}
          </group>
        )
      })}

      <mesh position={[0, totalHeight / 2, 0]}>
        <boxGeometry args={[buildingWidth + 0.5, totalHeight + 1, buildingDepth + 0.5]} />
        <meshStandardMaterial 
          color="#ffd700" emissive="#ffd700" emissiveIntensity={0.3}
          wireframe={true} transparent opacity={0.15} 
        />
      </mesh>

      <mesh position={[0, -0.05, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[buildingWidth, buildingWidth + 1.2, 8]} />
        <meshBasicMaterial color="#ffd700" transparent opacity={0.15} wireframe side={THREE.DoubleSide} />
      </mesh>
      
      <mesh position={[0, -0.15, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[buildingWidth + 1.5, buildingWidth + 1.6, 64]} />
        <meshBasicMaterial color="#334155" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>

      <gridHelper args={[20, 20, '#cbd5e1', '#f1f5f9']} position={[0, -0.3, 0]} material-opacity={0.3} material-transparent={true} />

      <FloatingDrone delay={0} radius={2.2} speed={0.8} height={totalHeight * 0.9} />
      <FloatingDrone delay={Math.PI} radius={2.8} speed={0.5} height={totalHeight * 0.5} />
      <FloatingDrone delay={Math.PI / 2} radius={2.0} speed={1.2} height={totalHeight * 0.2} />

      <MetricOverlay 
        position={isMobile ? [0, totalHeight + 1.2, 0] : [-2.8, totalHeight, 0]} 
        title="Progreso Estructural" value="75%" status="success" delay={0.5} 
        isMobile={isMobile}
      />
      <MetricOverlay 
        position={isMobile ? [-1.6, totalHeight * 0.6, 1] : [2.8, totalHeight * 0.6, 0]} 
        title="Materiales" value="45T / 60T" status="info" delay={1} 
        isMobile={isMobile}
      />
      <MetricOverlay 
        position={isMobile ? [1.6, 0.5, 1] : [-2.5, 0.5, 1.5]} 
        title="Personal" value="84 Ope." status="success" delay={1.5} 
        isMobile={isMobile}
      />
    </group>
  )
}

export default function ConstructionScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="w-full h-[500px] md:h-[700px] relative">
      <Canvas camera={{ position: isMobile ? [5, 3, 7] : [6, 4, 8], fov: 45 }}>
        <color attach="background" args={['#ffffff']} />
        <ambientLight intensity={2} color="#ffffff" />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, 5, -10]} intensity={0.5} color="#ffffff" />
        
        <FuturisticBuilding isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
