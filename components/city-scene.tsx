"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Edges, Grid, Html, Line, MapControls } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import * as THREE from "three";
import { LOT, type Placed, type PlacedDistrict } from "@/lib/city";
import { city } from "@/lib/city-data";

export type Phase = "boot" | "intro" | "ready";
export type CameraCmd =
  | { kind: "focus"; x: number; z: number; span: number }
  | { kind: "reset" }
  | { kind: "zoom"; factor: number };

interface Props {
  phase: Phase;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
  onIntroDone: () => void;
  command: { cmd: CameraCmd; n: number } | null;
}

type Intro = MutableRefObject<{ t: number }>;
type Controls = THREE.EventDispatcher<{ start: object }> & {
  target: THREE.Vector3;
  update: () => void;
};

const RACK = ["#8b5cf6", "#22d3ee", "#34d399"];
// Look slightly behind the centre so the city clears the top HUD rows.
const HOME = new THREE.Vector3(city.center[0] - 5, 0, city.center[1] - 5);
const ISO_DIR = new THREE.Vector3(1, 1.15, 1).normalize();
const TOP_DIR = new THREE.Vector3(0.02, 1, 0.02).normalize();
const DISTANCE = 120;
const INTRO_SECONDS = 2.6;

const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);
const clamp01 = (t: number) => Math.min(Math.max(t, 0), 1);

export default function CityScene(props: Props) {
  const intro = useRef({ t: 0 });
  return (
    <Canvas
      orthographic
      dpr={[1, 2]}
      camera={{ position: HOME.clone().addScaledVector(TOP_DIR, DISTANCE), zoom: 8, near: 0.1, far: 1000 }}
      // Html labels sit over the canvas; only a click on the canvas itself is a miss.
      onPointerMissed={(e) => e.target instanceof HTMLCanvasElement && props.onSelect(null)}
    >
      <color attach="background" args={["#05080f"]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[20, 40, 10]} intensity={1.2} />
      <Grid
        position={[0, -0.01, 0]}
        infiniteGrid
        cellSize={1}
        cellThickness={0.5}
        cellColor="#0d1d2e"
        sectionSize={5}
        sectionThickness={1}
        sectionColor="#14304a"
        fadeDistance={400}
        fadeStrength={1}
      />
      {city.districts.map((d) => (
        <DistrictPlatform key={d.district.id} placed={d} />
      ))}
      {city.districts.flatMap((d) =>
        d.lots.map((lot) => (
          <BuildingMesh
            key={lot.building.id}
            lot={lot}
            color={d.district.color}
            intro={intro}
            phase={props.phase}
            selected={props.selectedId === lot.building.id}
            onSelect={props.onSelect}
          />
        )),
      )}
      <MapControls makeDefault enableRotate={false} enabled={props.phase === "ready"} minZoom={3} maxZoom={60} />
      <Rig {...props} intro={intro} />
    </Canvas>
  );
}

function Rig({ phase, command, onIntroDone, intro }: Props & { intro: Intro }) {
  const camera = useThree((s) => s.camera) as THREE.OrthographicCamera;
  const controls = useThree((s) => s.controls) as unknown as Controls | null;
  const size = useThree((s) => s.size);
  // Zoom that fits a world span of `span` units into the viewport.
  const fit = (span: number) => Math.min(size.width, size.height * 1.4) / span;
  const goal = useRef<{ target: THREE.Vector3; zoom: number } | null>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!controls) return;
    const cancel = () => (goal.current = null);
    controls.addEventListener("start", cancel);
    return () => controls.removeEventListener("start", cancel);
  }, [controls]);

  useEffect(() => {
    if (!command || !controls) return;
    const c = command.cmd;
    if (c.kind === "reset") goal.current = { target: HOME.clone(), zoom: fit(84) };
    if (c.kind === "focus") goal.current = { target: new THREE.Vector3(c.x, 0, c.z), zoom: fit(c.span) };
    if (c.kind === "zoom")
      goal.current = { target: controls.target.clone(), zoom: THREE.MathUtils.clamp(camera.zoom * c.factor, 3, 60) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [command]);

  useFrame((_, dt) => {
    if (phase === "boot") return;
    if (!done.current) {
      const i = intro.current;
      i.t = phase === "ready" ? 1 : Math.min(1, i.t + dt / INTRO_SECONDS);
      const e = ease(i.t);
      const dir = TOP_DIR.clone().lerp(ISO_DIR, e).normalize();
      camera.position.copy(HOME).addScaledVector(dir, DISTANCE);
      camera.zoom = THREE.MathUtils.lerp(fit(84) * 0.5, fit(84), e);
      camera.lookAt(HOME);
      camera.updateProjectionMatrix();
      controls?.target.copy(HOME);
      if (i.t >= 1) {
        done.current = true;
        onIntroDone();
      }
      return;
    }
    const g = goal.current;
    if (!g || !controls) return;
    const k = 1 - Math.exp(-dt * 5);
    const delta = g.target.clone().sub(controls.target).multiplyScalar(k);
    controls.target.add(delta);
    camera.position.add(delta);
    camera.zoom += (g.zoom - camera.zoom) * k;
    camera.updateProjectionMatrix();
    controls.update();
    if (delta.lengthSq() < 1e-6 && Math.abs(g.zoom - camera.zoom) < 0.01) goal.current = null;
  });
  return null;
}

function DistrictPlatform({ placed }: { placed: PlacedDistrict }) {
  const [minX, minZ, maxX, maxZ] = placed.bounds;
  const { color, name } = placed.district;
  const h = 4.5;
  return (
    <group>
      <mesh rotation-x={-Math.PI / 2} position={[(minX + maxX) / 2, 0.01, (minZ + maxZ) / 2]}>
        <planeGeometry args={[maxX - minX, maxZ - minZ]} />
        <meshBasicMaterial color={color} transparent opacity={0.035} />
      </mesh>
      <Line
        points={[
          [minX, 0.02, minZ],
          [maxX, 0.02, minZ],
          [maxX, 0.02, maxZ],
          [minX, 0.02, maxZ],
          [minX, 0.02, minZ],
        ]}
        color={color}
        lineWidth={1.5}
        transparent
        opacity={0.55}
      />
      {/* Raised back edge: the neon "wall" from the mockup. */}
      <Line
        points={[
          [minX, h, maxZ],
          [minX, h, minZ],
          [maxX, h, minZ],
        ]}
        color={color}
        lineWidth={3}
      />
      <Html position={[minX, 0, maxZ]} zIndexRange={[5, 0]} style={{ pointerEvents: "none" }}>
        <span className="label whitespace-nowrap" style={{ color }}>
          {name}
        </span>
      </Html>
    </group>
  );
}

function BuildingMesh({
  lot,
  color,
  intro,
  phase,
  selected,
  onSelect,
}: {
  lot: Placed;
  color: string;
  intro: Intro;
  phase: Phase;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  const { building, pos, index } = lot;
  const group = useRef<THREE.Group>(null);
  const packets = useRef<THREE.InstancedMesh>(null);
  const [hover, setHover] = useState(false);
  const racks = Math.max(building.tools.length, 1);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useEffect(() => {
    document.body.style.cursor = hover ? "pointer" : "";
  }, [hover]);

  useFrame(({ clock }) => {
    const t = intro.current.t;
    const rise = ease(clamp01(t * 1.8 - index * 0.05));
    group.current?.scale.set(1, Math.max(rise, 0.001), 1);
    const p = packets.current;
    if (!p) return;
    // Data packets streaming along the lot's front edge.
    for (let i = 0; i < 10; i++) {
      const u = (clock.elapsedTime * 0.25 + i / 10 + index * 0.13) % 1;
      dummy.position.set(-LOT.w / 2 + u * LOT.w, 0.35, LOT.d / 2 - 0.5);
      dummy.scale.setScalar(rise);
      dummy.updateMatrix();
      p.setMatrixAt(i, dummy.matrix);
    }
    p.instanceMatrix.needsUpdate = true;
  });

  const lit = hover || selected;
  const select = () => phase === "ready" && onSelect(building.id);

  return (
    <group position={[pos[0], 0, pos[1]]}>
      <group
        ref={group}
        onClick={(e) => {
          e.stopPropagation();
          select();
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setHover(true);
        }}
        onPointerOut={() => setHover(false)}
      >
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[LOT.w, 0.3, LOT.d]} />
          <meshStandardMaterial color="#0b1726" />
          <Edges color={color} transparent opacity={lit ? 1 : 0.6} />
        </mesh>
        {Array.from({ length: racks }, (_, i) => {
          const row = Math.floor(i / 6);
          const col = i % 6;
          const h = 1.8 + ((i * 7 + index) % 3) * 0.4;
          const c = RACK[(i + index) % RACK.length];
          return (
            <mesh key={i} position={[-LOT.w / 2 + 1 + col * 0.9, 0.3 + h / 2, -1.2 + row * 1.1]}>
              <boxGeometry args={[0.65, h, 0.6]} />
              <meshStandardMaterial color={c} emissive={c} emissiveIntensity={lit ? 0.9 : 0.45} />
              <Edges color="#05080f" />
            </mesh>
          );
        })}
        <mesh position={[LOT.w / 2 - 1, 0.75, 0.2]}>
          <cylinderGeometry args={[0.38, 0.38, 0.9, 20]} />
          <meshStandardMaterial color="#fb923c" emissive="#fb923c" emissiveIntensity={0.5} />
          <Edges color="#05080f" />
        </mesh>
        <instancedMesh ref={packets} args={[undefined, undefined, 10]}>
          <boxGeometry args={[0.18, 0.08, 0.18]} />
          <meshBasicMaterial color={color} />
        </instancedMesh>
      </group>
      {selected && (
        <mesh position={[0, 6, 0]}>
          <cylinderGeometry args={[0.5, 0.5, 12, 16, 1, true]} />
          <meshBasicMaterial color={color} transparent opacity={0.18} blending={THREE.AdditiveBlending} depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
      )}
      <Html position={[0, 0.3, LOT.d / 2 + 0.2]} center zIndexRange={[10, 0]}>
          <button
            type="button"
            onClick={select}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
            className="panel px-3 py-1 text-center font-mono whitespace-nowrap transition-[border-color,opacity] duration-500"
            style={{
              borderColor: lit ? color : undefined,
              opacity: phase === "ready" ? 1 : 0,
            }}
          >
            <span className="block text-[13px] font-semibold" style={{ color }}>
              {building.title}
            </span>
            <span className="block text-[10px] text-dim">
              {building.tools.length} tools
            </span>
          </button>
        </Html>
    </group>
  );
}
