'use client';

import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ path }) => {
	const { scene } = useGLTF(path);
	return <primitive object={scene} />;
};

const RotatingModel = ({ path }) => {
	const ref = useRef();
	useFrame(() => (ref.current.rotation.y += 0.01));
	return (
		<group ref={ref}>
			<Model path={path} />
		</group>
	);
};

const ThreeScene = () => {
	return (
		<Canvas camera={{ position: [0, 10, 0], fov: 75 }}>
			<color attach='background' args={['#333333']} />
			<ambientLight intensity={0.5} />
			<OrbitControls />
			<Model path='/hot-coffee.glb' />
			<RotatingModel path='/cup-with-lid.glb' />
		</Canvas>
	);
};

export default ThreeScene;
