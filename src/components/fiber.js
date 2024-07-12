import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ path }) => {
    const { scene } = useGLTF(path);
    return <primitive object={scene} />;
};

const ThreeScene = () => {
    return (
        <Canvas camera={{ position: [0, 10, 0], fov: 75 }}>
        <color attach="background" args={['#333333']} />
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Suspense fallback={null}>
            <Model path="/hot-coffee.glb" />
            <RotatingModel path="/cup-with-lid.glb" />
        </Suspense>
        </Canvas>
    );
};

export default ThreeScene;