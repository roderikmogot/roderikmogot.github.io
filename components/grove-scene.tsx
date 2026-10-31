"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

// Palette from globals.css; WebGL can't read CSS variables.
const c = {
  moss: "#35422d",
  mossLight: "#4e5d40",
  grass: "#b9b28b",
  clay: "#694737",
  terracotta: "#ad7d62",
  stone: "#ddd5c3",
  paper: "#f5eddf",
};

/** One tree per Role, oldest at the back-left; the current Role is a sapling up front. */
export default function GroveScene({ roles, still }: { roles: number; still: boolean }) {
  const grown = roles - 1;
  return (
    <Canvas
      aria-hidden
      dpr={[1, 2]}
      frameloop={still ? "demand" : "always"}
      camera={{ position: [0, 3.2, 7.5], fov: 38 }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1.1} color={c.paper} />
      <directionalLight position={[4, 6, 3]} intensity={1.6} color="#fff1dc" />
      <Rig still={still} />

      <mesh rotation-x={-Math.PI / 2} position-y={-0.01}>
        <circleGeometry args={[3.6, 7]} />
        <meshStandardMaterial color={c.clay} flatShading />
      </mesh>

      {/* Background woods. */}
      {[-2.6, -1.9, 1.9, 2.7, -0.6, 0.9].map((x, i) => (
        <Tree key={`bg${i}`} position={[x, 0, -2.2 + (i % 2) * 0.5]} height={1.3 + (i % 3) * 0.35} color={c.grass} still={still} seed={i + 9} />
      ))}

      {/* Career grove: taller with each Role. */}
      {Array.from({ length: grown }, (_, i) => (
        <Tree
          key={`role${i}`}
          position={[-1.6 + i * 1.6, 0, -0.6 + (i % 2) * 0.4]}
          height={1.6 + i * 0.6}
          color={i % 2 ? c.mossLight : c.moss}
          still={still}
          seed={i}
        />
      ))}
      <Tree position={[0.4, 0, 1.6]} height={0.8} color={c.grass} still={still} seed={7} />

      <Mushroom position={[-0.9, 0, 1.4]} />
      <Mushroom position={[1.6, 0, 1.1]} scale={0.7} />
      <mesh position={[-2.2, 0.15, 1]} rotation-y={0.6}>
        <dodecahedronGeometry args={[0.32, 0]} />
        <meshStandardMaterial color={c.stone} flatShading />
      </mesh>

      {!still && Array.from({ length: 10 }, (_, i) => <Firefly key={i} seed={i} />)}
    </Canvas>
  );
}

function Tree({
  position,
  height,
  color,
  still,
  seed,
}: {
  position: [number, number, number];
  height: number;
  color: string;
  still: boolean;
  seed: number;
}) {
  const crown = useRef<Group>(null);
  useFrame(({ clock }) => {
    if (still || !crown.current) return;
    crown.current.rotation.z = Math.sin(clock.elapsedTime * 0.8 + seed) * 0.04;
  });
  const trunk = height * 0.35;
  return (
    <group position={position}>
      <mesh position-y={trunk / 2}>
        <cylinderGeometry args={[0.07, 0.11, trunk, 5]} />
        <meshStandardMaterial color={c.clay} flatShading />
      </mesh>
      <group ref={crown} position-y={trunk}>
        {[0, 1, 2].map((k) => (
          <mesh key={k} position-y={height * (0.18 + k * 0.2)}>
            <coneGeometry args={[height * (0.38 - k * 0.09), height * 0.42, 6]} />
            <meshStandardMaterial color={color} flatShading />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Mushroom({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position-y={0.12}>
        <cylinderGeometry args={[0.05, 0.06, 0.24, 5]} />
        <meshStandardMaterial color={c.paper} flatShading />
      </mesh>
      <mesh position-y={0.26}>
        <sphereGeometry args={[0.17, 6, 4, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color={c.terracotta} flatShading />
      </mesh>
    </group>
  );
}

function Firefly({ seed }: { seed: number }) {
  const ref = useRef<Mesh>(null);
  const x = Math.sin(seed * 12.9) * 2.6;
  const z = Math.cos(seed * 7.3) * 1.8;
  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * 0.5 + seed;
    ref.current.position.set(x + Math.sin(t) * 0.3, 0.8 + Math.sin(t * 1.3) * 0.5 + (seed % 3) * 0.4, z + Math.cos(t) * 0.3);
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.035, 6, 6]} />
      <meshBasicMaterial color="#f3e7b0" />
    </mesh>
  );
}

/** Camera leans a little toward the pointer. */
function Rig({ still }: { still: boolean }) {
  useFrame(({ camera, pointer }) => {
    if (still) return;
    camera.position.x += (pointer.x * 1.2 - camera.position.x) * 0.04;
    camera.position.y += (3.2 + pointer.y * 0.6 - camera.position.y) * 0.04;
    camera.lookAt(0, 1, 0);
  });
  return null;
}
