"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Text, Environment } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function RotatingWheel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    groupRef.current.rotation.z = -state.clock.elapsedTime * 0.5
  })
  
  return (
    <group ref={groupRef} position={position}>
      {/* Outer rim */}
      <mesh>
        <torusGeometry args={[1, 0.08, 16, 64]} />
        <meshStandardMaterial color="#c9a227" metalness={0.95} roughness={0.1} />
      </mesh>
      {/* Spokes */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI * 2) / 5]}>
          <boxGeometry args={[0.05, 1.8, 0.05]} />
          <meshStandardMaterial color="#c9a227" metalness={0.9} roughness={0.15} />
        </mesh>
      ))}
      {/* Center hub */}
      <mesh>
        <cylinderGeometry args={[0.25, 0.25, 0.15, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#1a1510" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  )
}

function SpeedGauge({ position }: { position: [number, number, number] }) {
  const needleRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const oscillation = Math.sin(state.clock.elapsedTime * 0.8) * 0.5 + 0.5
    needleRef.current.rotation.z = -Math.PI * 0.25 + oscillation * Math.PI * 0.75
  })
  
  return (
    <group position={position}>
      {/* Gauge arc */}
      <mesh>
        <torusGeometry args={[0.8, 0.04, 8, 32, Math.PI]} />
        <meshStandardMaterial color="#c9a227" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Needle */}
      <mesh ref={needleRef} position={[0, 0, 0.05]}>
        <coneGeometry args={[0.03, 0.7, 8]} />
        <meshStandardMaterial color="#ff4444" metalness={0.7} roughness={0.2} />
      </mesh>
      {/* Center dot */}
      <mesh position={[0, 0, 0.1]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#1a1510" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  )
}

function FloatingText() {
  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <Text
        font="/fonts/Inter_Bold.json"
        fontSize={0.4}
        position={[0, 0, 0]}
        color="#c9a227"
        anchorX="center"
        anchorY="middle"
      >
        LUSSO
      </Text>
    </Float>
  )
}

export function LuxuryDivider() {
  return (
    <div className="relative h-64 w-full overflow-hidden bg-gradient-to-b from-background via-primary/20 to-background">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#fff8e7" />
        <pointLight position={[-3, 2, 3]} intensity={0.5} color="#c9a227" />
        
        <Environment preset="studio" />
        
        <RotatingWheel position={[-3, 0, 0]} />
        <FloatingText />
        <SpeedGauge position={[3, 0, 0]} />
      </Canvas>
      
      {/* Decorative lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent -translate-y-1/2 pointer-events-none" />
    </div>
  )
}
