"use client";

import React, { useRef, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, MeshDistortMaterial, Sphere } from "@react-three/drei";
import * as THREE from "three";

function DataCore() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const ringRef1 = useRef<THREE.Group>(null);
  const ringRef2 = useRef<THREE.Group>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = time * 0.3;
      wireRef.current.rotation.z = time * 0.1;
    }
    if (ringRef1.current) ringRef1.current.rotation.z = time * 0.5;
    if (ringRef2.current) ringRef2.current.rotation.z = -time * 0.3;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      {/* Core Energy */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#475569"
          emissive="#334155"
          emissiveIntensity={0.2}
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Neural Wireframe */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[1.2, 2]} />
        <meshStandardMaterial
          color="#94a3b8"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Orbiting Data Rings */}
      <group ref={ringRef1} rotation={[Math.PI / 3, 0, 0]}>
        <mesh>
          <torusGeometry args={[1.6, 0.005, 16, 100]} />
          <meshBasicMaterial color="#64748b" transparent opacity={0.2} />
        </mesh>
      </group>

      <group ref={ringRef2} rotation={[-Math.PI / 4, Math.PI / 4, 0]}>
        <mesh>
          <torusGeometry args={[1.8, 0.005, 16, 100]} />
          <meshBasicMaterial color="#64748b" transparent opacity={0.1} />
        </mesh>
      </group>

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Float key={i} speed={3} rotationIntensity={2} floatIntensity={2}>
          <Sphere args={[0.02, 16, 16]} position={[
            Math.sin(i) * 2,
            Math.cos(i) * 2,
            Math.sin(i * 0.5) * 2
          ]}>
            <meshBasicMaterial color="#cbd5e1" transparent opacity={0.3} />
          </Sphere>
        </Float>
      ))}
    </Float>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-full mb-8 border border-border/50 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground animate-pulse"></span>
            <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">About Me</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8 leading-[1.1] text-muted-foreground ">
            Bridging the gap between <span className="text-foreground">Data</span> and <span className="text-foreground">Action</span>.
          </h2>

          <div className="space-y-6 text-xl text-muted-foreground leading-relaxed">
            <p>
              I am a Computer Science student specializing in Data Science, driven by a passion for building systems that don&apos;t just process data, but understand it.
            </p>
            <p>
              With hands-on experience in <span className="text-foreground font-bold">Machine Learning</span>, <span className="text-foreground font-bold">Backend Development</span>, and <span className="text-foreground font-bold">NLP</span>, I thrive on the challenge of taking complex models and turning them into scalable, production-ready SaaS solutions.
            </p>
            <p>
              My toolkit includes <span className="text-foreground font-bold">FastAPI</span>, <span className="text-foreground font-bold">PostgreSQL</span>, and <span className="text-foreground font-bold">TensorFlow</span>, but my real specialty is orchestration—connecting the dots between raw intelligence and seamless user experiences.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border/10 pt-10">
            <div>
              <h4 className="text-4xl font-bold text-foreground mb-1">15+</h4>
              <p className="text-sm uppercase tracking-widest font-bold text-muted-foreground">Projects Built</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[400px] md:h-[600px] relative"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full scale-75 animate-pulse"></div>

          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
            <DataCore />
          </Canvas>
        </motion.div>

      </div>
    </section>
  );
}
