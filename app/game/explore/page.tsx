'use client'
import React, { Suspense, useState, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import Dialog from "./dialog";
import * as THREE from "three";
import planetData from "./planetData";
import sunTexture from "./textures/sun.jpg";
import "./style.css";

interface planetData {
  id: number;
  color: string;
  xRadius: number;
  zRadius: number;
  size: number;
  speed: number;
  offset: number;
  rotationSpeed: number;
  textureMap: string;
  name: string;
  gravity: number;
  orbitalPeriod: number;
  surfaceArea: number;
}

interface DialogData {
  name: string;
  gravity: number;
  orbitalPeriod: number;
  surfaceArea: number;
}


interface PlanetProps {
  planet: planetData;
  setDialogData: React.Dispatch<React.SetStateAction<DialogData | null>>;
}

function Explore() {
  const [dialogData, setDialogData] = useState<DialogData | null>(null);
  const hideDialog = () => {
    setDialogData(null);
  };

  const planetDataArray = planetData();

  return (
    <>
      <Dialog hideDialog={hideDialog} dialogData={dialogData} />
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}>
        <Suspense fallback={null}>
          <Sun />
          {planetDataArray.map((planet: planetData) => (
            <Planet
              planet={planet}
              key={planet.id}
              setDialogData={setDialogData}
            />
          ))}
          <Lights />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </>
  );
}

function Sun() {
 
  const texture = useLoader(THREE.TextureLoader, sunTexture.src);
  return (
    <mesh>
      
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

function Planet({ planet, setDialogData }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(THREE.TextureLoader, planet.textureMap.src);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * planet.speed + planet.offset;
    const x = planet.xRadius * Math.sin(t);
    const z = planet.zRadius * Math.cos(t);
    if (planetRef.current) {
      planetRef.current.position.x = x;
      planetRef.current.position.z = z;
      planetRef.current.rotation.y += planet.rotationSpeed;
    }
  });

  return (
    <>
    
      <mesh
        ref={planetRef}
        onClick={() => {
          setDialogData({
            name: planet.name,
            gravity: planet.gravity,
            orbitalPeriod: planet.orbitalPeriod,
            surfaceArea: planet.surfaceArea,
          });
        }}
      >
        
        <sphereGeometry args={[planet.size, 32, 32]} />
        <meshStandardMaterial map={texture} />
        <Html distanceFactor={15}>
          <div className="annotation">{planet.name}</div>
        </Html>
      </mesh>
      <Ecliptic xRadius={planet.xRadius} zRadius={planet.zRadius} />
    </>
  );
}








function Lights() {
  return (
    <>
    
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    
    <lineSegments geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#393e46" linewidth={10} />
    </lineSegments>
  );
}

export default Explore;
