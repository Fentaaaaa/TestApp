"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshTransmissionMaterial, Environment, Stars } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

function LuxuryRing({ position, rotation, scale }: { position: [number, number, number], rotation?: [number, number, number], scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
  })
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale || 1}>
        <torusGeometry args={[1, 0.1, 16, 100]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.2}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.2}
          temporalDistortion={0.1}
          metalness={0.9}
          roughness={0.1}
          color="#c9a227"
        />
      </mesh>
    </Float>
  )
}

function GoldSphere({ position, scale }: { position: [number, number, number], scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
  })
  
  return (
    <mesh ref={meshRef} position={position} scale={scale || 0.3}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial
        color="#c9a227"
        metalness={0.95}
        roughness={0.05}
        envMapIntensity={1}
      />
    </mesh>
  )
}

function FloatingDiamond({ position, scale }: { position: [number, number, number], scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.5
    meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2
  })
  
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale || 0.5}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.8}
          chromaticAberration={0.5}
          anisotropy={0.5}
          distortion={0.3}
          distortionScale={0.3}
          temporalDistortion={0.2}
          metalness={0.1}
          roughness={0}
          color="#fff8e7"
          transmission={0.9}
        />
      </mesh>
    </Float>
  )
}

function Particles() {
  const count = 100
  const meshRef = useRef<THREE.Points>(null!)
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])
  
  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.02
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.01
  })
  
  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#c9a227" transparent opacity={0.6} />
    </points>
  )
}

function SpeedLines() {
  const groupRef = useRef<THREE.Group>(null!)
  
  const lines = useMemo(() => {
    const result = []
    for (let i = 0; i < 30; i++) {
      result.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          Math.random() * -10 - 5
        ] as [number, number, number],
        length: Math.random() * 2 + 0.5,
        speed: Math.random() * 2 + 1
      })
    }
    return result
  }, [])
  
  useFrame((state) => {
    groupRef.current.children.forEach((child, i) => {
      child.position.z += lines[i].speed * 0.1
      if (child.position.z > 5) {
        child.position.z = -15
      }
    })
  })
  
  return (
    <group ref={groupRef}>
      {lines.map((line, i) => (
        <mesh key={i} position={line.position}>
          <boxGeometry args={[0.02, 0.02, line.length]} />
          <meshBasicMaterial color="#c9a227" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

export function CarScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#1a1510"]} />
        <fog attach="fog" args={["#1a1510", 5, 25]} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#fff8e7" />
        <pointLight position={[-5, 5, 5]} intensity={0.5} color="#c9a227" />
        
        <Environment preset="city" />
        
        {/* Main decorative elements */}
        <LuxuryRing position={[3, 1, -2]} scale={1.2} />
        <LuxuryRing position={[-3, -1, -3]} scale={0.8} />
        <LuxuryRing position={[0, 2, -4]} scale={0.6} />
        
        <GoldSphere position={[4, -1, -1]} scale={0.2} />
        <GoldSphere position={[-4, 2, -2]} scale={0.15} />
        <GoldSphere position={[2, -2, -3]} scale={0.25} />
        <GoldSphere position={[-2, 0, -1]} scale={0.1} />
        
        <FloatingDiamond position={[5, 0, -3]} scale={0.4} />
        <FloatingDiamond position={[-5, -2, -4]} scale={0.3} />
        <FloatingDiamond position={[0, -3, -2]} scale={0.5} />
        
        <Particles />
        <SpeedLines />
        
        <Stars radius={50} depth={50} count={1000} factor={2} fade speed={1} />
      </Canvas>
    </div>
  )
}
