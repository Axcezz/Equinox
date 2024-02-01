'use client'
import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Html } from '@react-three/drei';
import Modal from 'react-modal';

const Planet = ({ position, name, speed }) => {
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += speed;
    }
  });

  const handleClick = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  return (
    <>
      <mesh ref={meshRef} position={position} onClick={handleClick} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
        <Sphere args={[1, 32, 32]}>
          <meshStandardMaterial color={hovered ? 'orange' : 'blue'} />
        </Sphere>
        <Html position={[0, 2, 0]}>
          <div>{name}</div>
        </Html>
      </mesh>
      <Modal isOpen={open} onRequestClose={handleCloseModal}>
        <h2>{name}</h2>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </>
  );
};

const SolarSystem = () => {
  return (
    <Canvas>
      <ambientLight />
      <Planet position={[0, 0, 0]} speed={0.01} name="Mercury" />
      <Planet position={[2, 0, 0]} speed={0.008} name="Venus" />
      <Planet position={[4, 0, 0]} speed={0.006} name="Earth" />
      <Planet position={[6, 0, 0]} speed={0.004} name="Mars" />
      <Planet position={[8, 0, 0]} speed={0.002} name="Jupiter" />
      {/* Add more planets as needed */}
    </Canvas>
  );
};

export default SolarSystem;