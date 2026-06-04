"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"
import { Shield, Clock, MapPin, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive insurance coverage included with every rental for your complete peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Concierge",
    description: "Round-the-clock personal assistance to ensure your journey is seamless from start to finish.",
  },
  {
    icon: MapPin,
    title: "Flexible Pickup",
    description: "Door-to-door delivery anywhere in Italy, including airports, hotels, and private residences.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated team of automotive enthusiasts ready to help you choose the perfect vehicle.",
  },
]

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
  })
  
  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#c9a227"
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  )
}

function FloatingRings() {
  const group1Ref = useRef<THREE.Group>(null!)
  const group2Ref = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    group1Ref.current.rotation.x = state.clock.elapsedTime * 0.2
    group1Ref.current.rotation.y = state.clock.elapsedTime * 0.3
    group2Ref.current.rotation.x = -state.clock.elapsedTime * 0.15
    group2Ref.current.rotation.z = state.clock.elapsedTime * 0.25
  })
  
  return (
    <>
      <group ref={group1Ref}>
        <mesh>
          <torusGeometry args={[3, 0.02, 16, 100]} />
          <meshStandardMaterial color="#c9a227" metalness={0.95} roughness={0.05} />
        </mesh>
      </group>
      <group ref={group2Ref}>
        <mesh>
          <torusGeometry args={[3.5, 0.015, 16, 100]} />
          <meshStandardMaterial color="#fff8e7" metalness={0.9} roughness={0.1} transparent opacity={0.5} />
        </mesh>
      </group>
    </>
  )
}

function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <color attach="background" args={["#f5f0e6"]} />
      
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#fff8e7" />
      <pointLight position={[-5, 5, 5]} intensity={0.5} color="#c9a227" />
      
      <Environment preset="studio" />
      
      <AnimatedSphere />
      <FloatingRings />
    </Canvas>
  )
}

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
              Why Choose Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6 text-balance">
              An Experience Beyond Driving
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              At Lusso Auto Italia, we don&apos;t just rent cars—we craft unforgettable experiences. 
              From the moment you inquire to the final return, every detail is handled with 
              the utmost care and attention to excellence.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Scene */}
          <div className="relative h-[500px] lg:h-[600px]">
            <Scene3D />
          </div>
        </div>
      </div>
    </section>
  )
}
