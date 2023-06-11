'use client';

import { Center, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Room } from './Room';
import { Suspense } from 'react';

const Office = () => {
  return (
    <Canvas camera={{ position: [-2, 5, 11] }} style={{ cursor: 'pointer' }}>
      <color attach='background' args={['#f5f5f5']} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minAzimuthAngle={-Math.PI / 2.7}
        maxAzimuthAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 10}
        maxPolarAngle={Math.PI - Math.PI / 2}
      />
      <ambientLight intensity={1} />
      {/* Add low quality model */}
      {/* https://docs.pmnd.rs/react-three-fiber/advanced/scaling-performance */}
      <Suspense>
        <Center>
          <Room />
        </Center>
      </Suspense>
    </Canvas>
  );
};

export default Office;
