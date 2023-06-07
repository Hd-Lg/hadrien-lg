'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Room } from './Room';

const Office = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 10, 10] }}>
        <color attach='background' args={['#ececec']} />
        <OrbitControls />
        <ambientLight intensity={1} />
        <Room />
      </Canvas>
    </>
  );
};

export default Office;
