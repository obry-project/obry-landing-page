'use client'

import { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function MetricCard({
  title, value, status, sub, delay, style,
}: {
  title: string; value: string; status: 'success' | 'info'; sub: string; delay: number; style?: React.CSSProperties
}) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay * 1000)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div style={{
      position: 'absolute',
      transition: 'opacity 0.6s ease, transform 0.6s ease',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(8px)',
      background: 'rgba(255,255,255,0.93)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(0,0,0,0.06)',
      borderRadius: '14px',
      boxShadow: '0 2px 16px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.04)',
      pointerEvents: 'none',
      zIndex: 10,
      ...style,
    }}>
      <div style={{ fontSize: '8px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '3px', fontFamily: '"SF Pro Text", system-ui, sans-serif' }}>
        {title}
      </div>
      <div style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '5px', fontFamily: '"SF Pro Display", system-ui, sans-serif' }}>
        {value}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
        <div style={{
          width: '6px', height: '6px', borderRadius: '50%', flexShrink: 0,
          background: status === 'success' ? '#10b981' : '#3b82f6',
          boxShadow: status === 'success' ? '0 0 0 2px rgba(16,185,129,0.2)' : '0 0 0 2px rgba(59,130,246,0.2)',
        }} />
        <span style={{ fontSize: '9px', color: '#94a3b8', fontWeight: 500, fontFamily: 'system-ui, sans-serif' }}>{sub}</span>
      </div>
    </div>
  )
}

function MobileMetricCard({
  title, value, status, sub, delay,
}: {
  title: string; value: string; status: 'success' | 'info'; sub: string; delay: number
}) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay * 1000)
    return () => clearTimeout(t)
  }, [delay])

  return (
    <div style={{
      transition: 'opacity 0.6s ease, transform 0.6s ease',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(6px)',
      background: 'rgba(255,255,255,0.93)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(0,0,0,0.06)',
      borderRadius: '10px',
      padding: '7px 10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
      pointerEvents: 'none',
      minWidth: '88px',
    }}>
      <div style={{ fontSize: '7px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: '2px', fontFamily: 'system-ui, sans-serif' }}>
        {title}
      </div>
      <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '4px', fontFamily: 'system-ui, sans-serif' }}>
        {value}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
        <div style={{
          width: '5px', height: '5px', borderRadius: '50%', flexShrink: 0,
          background: status === 'success' ? '#10b981' : '#3b82f6',
          boxShadow: status === 'success' ? '0 0 0 2px rgba(16,185,129,0.18)' : '0 0 0 2px rgba(59,130,246,0.18)',
        }} />
        <span style={{ fontSize: '8px', color: '#94a3b8', fontWeight: 500, fontFamily: 'system-ui, sans-serif' }}>{sub}</span>
      </div>
    </div>
  )
}

function Drone({ radius, speed, height, offset }: { radius: number; speed: number; height: number; offset: number }) {
  const groupRef = useRef<THREE.Group>(null)
  const propsRef = useRef<THREE.Mesh[]>([])
  const armOffsets: [number, number][] = [[0.1, 0.1], [-0.1, 0.1], [0.1, -0.1], [-0.1, -0.1]]

  useFrame((state) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime * speed + offset
    groupRef.current.position.x = Math.cos(t) * radius
    groupRef.current.position.z = Math.sin(t) * radius
    groupRef.current.position.y = height + Math.sin(state.clock.elapsedTime * 2.5) * 0.12
    groupRef.current.rotation.y = -t
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2.5) * 0.08
    propsRef.current.forEach((p) => { if (p) p.rotation.y += 0.4 })
  })

  return (
    <group ref={groupRef}>
      <mesh castShadow>
        <boxGeometry args={[0.12, 0.03, 0.12]} />
        <meshStandardMaterial color="#1e293b" roughness={0.2} metalness={0.9} />
      </mesh>
      <mesh position={[0, -0.01, 0]}>
        <boxGeometry args={[0.06, 0.02, 0.06]} />
        <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={1.0} />
      </mesh>
      {armOffsets.map(([ax, az], i) => (
        <group key={i}>
          <mesh position={[ax * 0.5, 0, az * 0.5]} rotation={[0, Math.PI / 4, Math.PI / 2]}>
            <cylinderGeometry args={[0.006, 0.006, 0.16, 4]} />
            <meshStandardMaterial color="#334155" roughness={0.4} metalness={0.7} />
          </mesh>
          <mesh position={[ax, 0, az]}>
            <cylinderGeometry args={[0.01, 0.01, 0.02, 6]} />
            <meshStandardMaterial color="#475569" roughness={0.3} metalness={0.8} />
          </mesh>
          <mesh
            ref={(el) => { if (el) propsRef.current[i] = el }}
            position={[ax, 0.018, az]}
          >
            <cylinderGeometry args={[0.09, 0.085, 0.004, 16]} />
            <meshStandardMaterial color="#7dd3fc" transparent opacity={0.45} roughness={0.05} metalness={0.3} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 0.018, 0.065]}>
        <sphereGeometry args={[0.01, 6, 6]} />
        <meshBasicMaterial color="#00ff88" />
      </mesh>
      <mesh position={[0, -0.025, 0]}>
        <sphereGeometry args={[0.008, 6, 6]} />
        <meshBasicMaterial color="#f87171" />
      </mesh>
    </group>
  )
}

function Worker({ position, color, phase }: { position: [number, number, number]; color: string; phase: number }) {
  const ref = useRef<THREE.Group>(null)
  const [baseX, , baseZ] = position

  useFrame((state) => {
    if (!ref.current) return
    const t = state.clock.elapsedTime
    ref.current.position.x = baseX + Math.sin(t * 0.4 + phase) * 0.05
    ref.current.position.z = baseZ + Math.cos(t * 0.3 + phase) * 0.05
    ref.current.rotation.y = Math.sin(t * 0.4 + phase) * 0.15
  })

  return (
    <group ref={ref} position={position}>
      <mesh position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.028, 0.032, 0.08, 8]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.13, 0]}>
        <boxGeometry args={[0.07, 0.1, 0.055]} />
        <meshStandardMaterial color={color} roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.22, 0]}>
        <sphereGeometry args={[0.033, 8, 8]} />
        <meshStandardMaterial color="#d4a574" roughness={0.85} />
      </mesh>
      <mesh position={[0, 0.255, 0]}>
        <cylinderGeometry args={[0.038, 0.034, 0.032, 8]} />
        <meshStandardMaterial color="#fbbf24" roughness={0.4} metalness={0.1} />
      </mesh>
      <mesh position={[0, 0.265, 0]} rotation={[0.15, 0, 0]}>
        <cylinderGeometry args={[0.045, 0.038, 0.01, 8]} />
        <meshStandardMaterial color="#f59e0b" roughness={0.3} metalness={0.15} />
      </mesh>
    </group>
  )
}

function Building({ isMobile }: { isMobile: boolean }) {
  const buildingRef = useRef<THREE.Group>(null)
  const beaconRef = useRef<THREE.Mesh>(null)
  const ropeRef = useRef<THREE.Mesh>(null)
  const loadRef = useRef<THREE.Mesh>(null)
  const craneJibRef = useRef<THREE.Group>(null)

  const FLOORS = 14
  const FLOOR_H = 0.44
  const BW = 1.6
  const BD = 1.3
  const BUILT = 10
  const TOTAL_H = FLOORS * FLOOR_H

  const materials = useMemo(() => {
    const concrete = new THREE.MeshStandardMaterial({ color: '#8fa3b8', roughness: 0.82, metalness: 0.04 })
    const concreteLight = new THREE.MeshStandardMaterial({ color: '#b8c8d8', roughness: 0.88, metalness: 0.02 })
    const concreteDark = new THREE.MeshStandardMaterial({ color: '#5a6d7e', roughness: 0.9, metalness: 0.05 })
    const steel = new THREE.MeshStandardMaterial({ color: '#3d4f60', roughness: 0.25, metalness: 0.9 })
    const steelLight = new THREE.MeshStandardMaterial({ color: '#607080', roughness: 0.3, metalness: 0.85 })
    const aluminum = new THREE.MeshStandardMaterial({ color: '#8899aa', roughness: 0.15, metalness: 0.95 })
    const glass = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#c8dff0'),
      metalness: 0.05, roughness: 0.03,
      transmission: 0.88, thickness: 0.15,
      transparent: true, opacity: 0.72,
      reflectivity: 0.95, envMapIntensity: 1.4,
      ior: 1.5,
      side: THREE.DoubleSide,
    })
    const glassLit = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#fef3c7'),
      emissive: new THREE.Color('#fbbf24'),
      emissiveIntensity: 0.12,
      metalness: 0.05, roughness: 0.03,
      transmission: 0.65, transparent: true, opacity: 0.85,
      reflectivity: 0.9, ior: 1.5,
      side: THREE.DoubleSide,
    })
    const glassDim = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1e3a4a'),
      emissive: new THREE.Color('#0c2233'),
      emissiveIntensity: 0.05,
      metalness: 0.1, roughness: 0.04,
      transmission: 0.5, transparent: true, opacity: 0.8,
      reflectivity: 0.95, ior: 1.5,
      side: THREE.DoubleSide,
    })
    const scaffoldMetal = new THREE.MeshStandardMaterial({ color: '#8b9aaa', roughness: 0.4, metalness: 0.75 })
    const scaffoldWood = new THREE.MeshStandardMaterial({ color: '#a0714a', roughness: 0.92, metalness: 0.0 })
    const crane = new THREE.MeshStandardMaterial({ color: '#f59e0b', roughness: 0.45, metalness: 0.65 })
    const craneDark = new THREE.MeshStandardMaterial({ color: '#d97706', roughness: 0.5, metalness: 0.6 })
    const slab = new THREE.MeshStandardMaterial({ color: '#7a8fa0', roughness: 0.75, metalness: 0.15 })
    const slabEdge = new THREE.MeshStandardMaterial({ color: '#6a7f90', roughness: 0.8, metalness: 0.1 })
    return { concrete, concreteLight, concreteDark, steel, steelLight, aluminum, glass, glassLit, glassDim, scaffoldMetal, scaffoldWood, crane, craneDark, slab, slabEdge }
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (buildingRef.current) buildingRef.current.position.y = Math.sin(t * 0.4) * 0.015
    if (beaconRef.current) beaconRef.current.visible = Math.sin(t * 1.8) > 0.3
    if (craneJibRef.current) craneJibRef.current.rotation.y = Math.sin(t * 0.12) * 0.4
    const swayX = Math.sin(t * 0.7) * 0.18
    const swayZ = Math.cos(t * 0.5) * 0.06
    if (ropeRef.current) { ropeRef.current.position.x = BW + 0.9 + swayX; ropeRef.current.position.z = swayZ }
    if (loadRef.current) { loadRef.current.position.x = BW + 0.9 + swayX; loadRef.current.position.z = swayZ }
  })

  const corners: [number, number, number][] = [
    [BW / 2 - 0.04, TOTAL_H / 2, BD / 2 - 0.04],
    [-BW / 2 + 0.04, TOTAL_H / 2, BD / 2 - 0.04],
    [BW / 2 - 0.04, TOTAL_H / 2, -BD / 2 + 0.04],
    [-BW / 2 + 0.04, TOTAL_H / 2, -BD / 2 + 0.04],
  ]

  const midColumns: [number, number, number][] = [
    [0, TOTAL_H / 2, BD / 2 - 0.04],
    [0, TOTAL_H / 2, -BD / 2 + 0.04],
    [BW / 2 - 0.04, TOTAL_H / 2, 0],
    [-BW / 2 + 0.04, TOTAL_H / 2, 0],
  ]

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]} receiveShadow>
        <planeGeometry args={[40, 40]} />
        <meshStandardMaterial color="#e8edf2" roughness={0.98} metalness={0.0} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.015, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#dde4ea" roughness={0.95} metalness={0.0} />
      </mesh>

      <gridHelper args={[14, 28, '#c8d0d8', '#d4dbe2']} position={[0, 0.001, 0]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.003, 0]}>
        <ringGeometry args={[2.8, 3.0, 64]} />
        <meshBasicMaterial color="#cbd5e1" transparent opacity={0.4} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.003, 0]}>
        <ringGeometry args={[4.8, 5.0, 64]} />
        <meshBasicMaterial color="#cbd5e1" transparent opacity={0.2} side={THREE.DoubleSide} />
      </mesh>

      <group ref={buildingRef} scale={isMobile ? 0.72 : 1}>
        <mesh position={[0, -0.18, 0]} castShadow receiveShadow>
          <boxGeometry args={[BW + 0.7, 0.35, BD + 0.7]} />
          <primitive object={materials.concreteDark} attach="material" />
        </mesh>
        <mesh position={[0, -0.005, 0]} castShadow receiveShadow>
          <boxGeometry args={[BW + 0.45, 0.1, BD + 0.45]} />
          <primitive object={materials.concreteDark} attach="material" />
        </mesh>

        <mesh position={[0, TOTAL_H / 2, 0]} castShadow>
          <boxGeometry args={[BW * 0.28, TOTAL_H + 0.2, BD * 0.28]} />
          <primitive object={materials.concrete} attach="material" />
        </mesh>

        {corners.map((pos, i) => (
          <group key={i}>
            <mesh position={pos} castShadow>
              <boxGeometry args={[0.08, TOTAL_H + 0.6, 0.08]} />
              <primitive object={materials.steel} attach="material" />
            </mesh>
            <mesh position={[pos[0], TOTAL_H + 0.1, pos[2]]}>
              <boxGeometry args={[0.12, 0.06, 0.12]} />
              <primitive object={materials.steel} attach="material" />
            </mesh>
          </group>
        ))}

        {midColumns.map((pos, i) => (
          <mesh key={i} position={pos} castShadow>
            <boxGeometry args={[0.045, TOTAL_H, 0.045]} />
            <primitive object={materials.steelLight} attach="material" />
          </mesh>
        ))}

        {Array.from({ length: FLOORS }).map((_, fi) => {
          const y = fi * FLOOR_H
          const isBuilt = fi < BUILT

          const faces = [
            { pos: [0, y + FLOOR_H / 2, BD / 2] as [number, number, number], rotY: 0, pw: BW - 0.1, isFront: true },
            { pos: [0, y + FLOOR_H / 2, -BD / 2] as [number, number, number], rotY: Math.PI, pw: BW - 0.1, isFront: false },
            { pos: [BW / 2, y + FLOOR_H / 2, 0] as [number, number, number], rotY: Math.PI / 2, pw: BD - 0.1, isFront: true },
            { pos: [-BW / 2, y + FLOOR_H / 2, 0] as [number, number, number], rotY: -Math.PI / 2, pw: BD - 0.1, isFront: false },
          ]

          return (
            <group key={fi}>
              <mesh position={[0, y + 0.03, 0]} castShadow receiveShadow>
                <boxGeometry args={[BW + 0.12, 0.06, BD + 0.12]} />
                <primitive object={materials.slab} attach="material" />
              </mesh>
              <mesh position={[0, y + 0.002, 0]} castShadow>
                <boxGeometry args={[BW + 0.18, 0.012, BD + 0.18]} />
                <primitive object={materials.slabEdge} attach="material" />
              </mesh>

              {isBuilt ? (
                <>
                  {faces.map(({ pos, rotY, pw, isFront }, pi) => {
                    const rand = (fi * 4 + pi) % 7
                    const mat = rand < 3 ? materials.glassLit : rand < 5 ? materials.glass : materials.glassDim
                    const subPanels = 2
                    const subW = (pw - 0.04) / subPanels

                    return (
                      <group key={pi}>
                        {Array.from({ length: subPanels }).map((_, si) => {
                          const offsetX = -pw / 2 + subW * (si + 0.5) + 0.02
                          return (
                            <group key={si}>
                              <mesh
                                position={[
                                  pos[0] + (rotY === Math.PI / 2 || rotY === -Math.PI / 2 ? 0 : offsetX),
                                  pos[1],
                                  pos[2] + (rotY === 0 || rotY === Math.PI ? 0 : offsetX),
                                ]}
                                rotation={[0, rotY, 0]}
                              >
                                <planeGeometry args={[subW - 0.02, FLOOR_H - 0.1]} />
                                <primitive object={mat} attach="material" />
                              </mesh>

                              <mesh
                                position={[
                                  pos[0] + (rotY === Math.PI / 2 || rotY === -Math.PI / 2 ? 0 : offsetX),
                                  pos[1],
                                  pos[2] + (rotY === 0 || rotY === Math.PI ? 0 : offsetX),
                                ]}
                                rotation={[0, rotY, 0]}
                              >
                                <boxGeometry args={[subW - 0.02, FLOOR_H - 0.1, 0.018]} />
                                <meshStandardMaterial color="#1a2a3a" roughness={0.1} metalness={0.4} transparent opacity={0.06} />
                              </mesh>
                            </group>
                          )
                        })}

                        {[y + 0.025, y + FLOOR_H - 0.02].map((my, mi) => (
                          <mesh key={`h${mi}`} position={[pos[0], my, pos[2]]} rotation={[0, rotY, 0]}>
                            <boxGeometry args={[pw + 0.01, 0.022, 0.03]} />
                            <primitive object={materials.aluminum} attach="material" />
                          </mesh>
                        ))}
                        {[-pw / 2, -pw / 6, pw / 6, pw / 2].map((ox, vi) => {
                          const vx = rotY === Math.PI / 2 || rotY === -Math.PI / 2 ? 0 : ox
                          const vz = rotY === 0 || rotY === Math.PI ? 0 : ox
                          return (
                            <mesh key={`v${vi}`} position={[pos[0] + vx, y + FLOOR_H / 2, pos[2] + vz]} rotation={[0, rotY, 0]}>
                              <boxGeometry args={[0.022, FLOOR_H - 0.01, 0.03]} />
                              <primitive object={materials.aluminum} attach="material" />
                            </mesh>
                          )
                        })}
                      </group>
                    )
                  })}
                </>
              ) : (
                <group>
                  {[
                    [BW / 2 + 0.05, y + FLOOR_H / 2, BD / 2 + 0.05],
                    [-BW / 2 - 0.05, y + FLOOR_H / 2, BD / 2 + 0.05],
                    [BW / 2 + 0.05, y + FLOOR_H / 2, -BD / 2 - 0.05],
                    [-BW / 2 - 0.05, y + FLOOR_H / 2, -BD / 2 - 0.05],
                  ].map((p, i) => (
                    <mesh key={i} position={p as [number, number, number]}>
                      <cylinderGeometry args={[0.025, 0.025, FLOOR_H + 0.04, 6]} />
                      <primitive object={materials.scaffoldMetal} attach="material" />
                    </mesh>
                  ))}

                  {[y + 0.06, y + FLOOR_H * 0.5, y + FLOOR_H - 0.04].map((hy, hi) => (
                    <group key={hi}>
                      <mesh position={[0, hy, BD / 2 + 0.05]}>
                        <boxGeometry args={[BW + 0.12, 0.02, 0.025]} />
                        <primitive object={materials.scaffoldMetal} attach="material" />
                      </mesh>
                      <mesh position={[0, hy, -BD / 2 - 0.05]}>
                        <boxGeometry args={[BW + 0.12, 0.02, 0.025]} />
                        <primitive object={materials.scaffoldMetal} attach="material" />
                      </mesh>
                      <mesh position={[BW / 2 + 0.05, hy, 0]}>
                        <boxGeometry args={[0.025, 0.02, BD + 0.12]} />
                        <primitive object={materials.scaffoldMetal} attach="material" />
                      </mesh>
                      <mesh position={[-BW / 2 - 0.05, hy, 0]}>
                        <boxGeometry args={[0.025, 0.02, BD + 0.12]} />
                        <primitive object={materials.scaffoldMetal} attach="material" />
                      </mesh>
                    </group>
                  ))}

                  {[0, 1, 2].map((p) => (
                    <mesh key={p} position={[0, y + 0.055, BD / 2 + 0.08 + p * 0.06]}>
                      <boxGeometry args={[BW + 0.22, 0.03, 0.055]} />
                      <primitive object={materials.scaffoldWood} attach="material" />
                    </mesh>
                  ))}

                  <mesh position={[0, y + FLOOR_H / 2, 0]}>
                    <boxGeometry args={[BW - 0.08, FLOOR_H - 0.06, BD - 0.08]} />
                    <meshBasicMaterial color="#f59e0b" wireframe transparent opacity={0.2} />
                  </mesh>
                </group>
              )}
            </group>
          )
        })}

        <mesh position={[0, TOTAL_H + 0.15, 0]} castShadow>
          <boxGeometry args={[BW + 0.1, 0.12, BD + 0.1]} />
          <primitive object={materials.concrete} attach="material" />
        </mesh>
        <mesh position={[0, TOTAL_H + 0.42, 0]}>
          <boxGeometry args={[BW * 0.6, 0.55, BD * 0.6]} />
          <primitive object={materials.concreteDark} attach="material" />
        </mesh>
        <mesh position={[0, TOTAL_H + 0.85, 0]}>
          <cylinderGeometry args={[0.06, 0.1, 0.6, 8]} />
          <primitive object={materials.concrete} attach="material" />
        </mesh>
        <mesh position={[0, TOTAL_H + 1.3, 0]}>
          <cylinderGeometry args={[0.018, 0.05, 0.9, 8]} />
          <primitive object={materials.steel} attach="material" />
        </mesh>
        <mesh position={[0, TOTAL_H + 1.82, 0]}>
          <cylinderGeometry args={[0.008, 0.016, 1.0, 6]} />
          <primitive object={materials.aluminum} attach="material" />
        </mesh>
        <mesh ref={beaconRef} position={[0, TOTAL_H + 2.34, 0]}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color="#ff3030" />
        </mesh>
      </group>

      <group ref={craneJibRef} position={[BW + 0.9, 0, 0]}>
        <mesh position={[0, (TOTAL_H * 1.05) / 2, 0]} castShadow>
          <boxGeometry args={[0.09, TOTAL_H * 1.05, 0.09]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.45} metalness={0.65} />
        </mesh>
        {[0.3, 0.6, 0.9, 1.2, 1.5, 1.8].map((h, i) => (
          <group key={i}>
            <mesh position={[0.04, h, 0.04]} rotation={[0, 0, 0.3]}>
              <cylinderGeometry args={[0.012, 0.012, 0.22, 4]} />
              <meshStandardMaterial color="#d97706" roughness={0.5} metalness={0.6} />
            </mesh>
            <mesh position={[-0.04, h + 0.1, 0.04]} rotation={[0, 0, -0.3]}>
              <cylinderGeometry args={[0.012, 0.012, 0.22, 4]} />
              <meshStandardMaterial color="#d97706" roughness={0.5} metalness={0.6} />
            </mesh>
          </group>
        ))}
        <mesh position={[-1.4, TOTAL_H * 1.02, 0]} castShadow>
          <boxGeometry args={[3.2, 0.065, 0.065]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.45} metalness={0.65} />
        </mesh>
        <mesh position={[1.1, TOTAL_H * 1.02, 0]} castShadow>
          <boxGeometry args={[1.0, 0.065, 0.065]} />
          <meshStandardMaterial color="#f59e0b" roughness={0.45} metalness={0.65} />
        </mesh>
        <mesh position={[1.7, TOTAL_H * 1.01, 0]}>
          <boxGeometry args={[0.35, 0.22, 0.22]} />
          <meshStandardMaterial color="#d97706" roughness={0.5} metalness={0.6} />
        </mesh>
        <mesh position={[0, TOTAL_H * 1.05 + 0.08, 0]}>
          <boxGeometry args={[0.15, 0.18, 0.15]} />
          <meshStandardMaterial color="#d97706" roughness={0.4} metalness={0.7} />
        </mesh>
        <mesh ref={ropeRef} position={[0, TOTAL_H * 0.54, 0]}>
          <cylinderGeometry args={[0.007, 0.007, TOTAL_H * 0.5, 4]} />
          <meshStandardMaterial color="#1e293b" roughness={0.9} metalness={0.1} />
        </mesh>
        <mesh ref={loadRef} position={[0, TOTAL_H * 0.28, 0]}>
          <boxGeometry args={[0.28, 0.18, 0.28]} />
          <meshStandardMaterial color="#374151" roughness={0.7} metalness={0.5} />
        </mesh>
      </group>

      <Drone radius={2.2} speed={0.55} height={TOTAL_H * 0.88} offset={0} />
      <Drone radius={2.8} speed={0.38} height={TOTAL_H * 0.52} offset={Math.PI} />
      <Drone radius={1.9} speed={0.85} height={TOTAL_H * 0.28} offset={Math.PI / 2} />

      {([
        { pos: [-1.4, 0, 1.1] as [number,number,number], color: '#1e40af', phase: 0.0 },
        { pos: [1.7, 0, 0.7] as [number,number,number], color: '#b91c1c', phase: 1.2 },
        { pos: [-0.4, 0, 1.9] as [number,number,number], color: '#15803d', phase: 2.4 },
        { pos: [2.1, 0, -0.4] as [number,number,number], color: '#6d28d9', phase: 0.7 },
        { pos: [-1.9, 0, -0.9] as [number,number,number], color: '#1e40af', phase: 3.1 },
        { pos: [0.7, 0, -1.7] as [number,number,number], color: '#b91c1c', phase: 1.8 },
        { pos: [1.1, 0, 1.7] as [number,number,number], color: '#15803d', phase: 2.9 },
      ]).map((w, i) => (
        <Worker key={i} position={w.pos} color={w.color} phase={w.phase} />
      ))}
    </>
  )
}

function SceneContent({ isMobile }: { isMobile: boolean }) {
  useFrame((state) => {
    const t = state.clock.elapsedTime
    const r = isMobile ? 7 : 8.5
    const angle = Math.sin(t * 0.07) * (Math.PI / 3)
    state.camera.position.x = Math.sin(angle) * r
    state.camera.position.z = Math.cos(angle) * r
    state.camera.position.y = (isMobile ? 3.5 : 4.5) + Math.sin(t * 0.25) * 0.15
    state.camera.lookAt(0, 2.8, 0)
  })
  return <Building isMobile={isMobile} />
}

const METRICS = [
  { title: 'Progreso estructural', value: '75%',       status: 'success' as const, sub: 'A tiempo',       delay: 0.6 },
  { title: 'Materiales utilizados', value: '45 / 60T', status: 'info'    as const, sub: 'Entrega en 3d',  delay: 1.0 },
  { title: 'Trabajadores activos',  value: '84',       status: 'success' as const, sub: 'Todos en sitio', delay: 1.4 },
]

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
      <Canvas
        camera={{ position: [0, 4.5, 8.5], fov: 42, near: 0.1, far: 200 }}
        shadows
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <color attach="background" args={['#ffffff']} />
        <fog attach="fog" args={['#eef2f6', 16, 48]} />
        <ambientLight intensity={0.55} color="#f0f5ff" />
        <directionalLight
          position={[10, 18, 8]} intensity={2.2} color="#fff8ee"
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-near={0.5}
          shadow-camera-far={60}
          shadow-camera-left={-14}
          shadow-camera-right={14}
          shadow-camera-top={22}
          shadow-camera-bottom={-4}
          shadow-bias={-0.001}
          shadow-normalBias={0.02}
        />
        <directionalLight position={[-8, 10, -5]} intensity={0.6} color="#c8deff" />
        <directionalLight position={[2, 3, -12]} intensity={0.35} color="#ffe4c8" />
        <pointLight position={[0, 8, 0]} intensity={0.3} color="#ffffff" distance={20} />
        <SceneContent isMobile={isMobile} />
      </Canvas>

      {isMobile ? (
        <div style={{
          position: 'absolute', bottom: 16, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'row', gap: 6,
          alignItems: 'flex-end', zIndex: 10,
        }}>
          {METRICS.map((m) => <MobileMetricCard key={m.title} {...m} />)}
        </div>
      ) : (
        <>
          <MetricCard {...METRICS[0]} style={{ top: '12%', left: '4%', padding: '14px 18px' }} />
          <MetricCard {...METRICS[1]} style={{ top: '42%', right: '4%', padding: '14px 18px' }} />
          <MetricCard {...METRICS[2]} style={{ bottom: '14%', left: '4%', padding: '14px 18px' }} />
        </>
      )}
    </div>
  )
}