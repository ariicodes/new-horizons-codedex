import React from 'react';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), {
	ssr: false,
});

const Home = () => {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<ThreeScene />
		</div>
	);
};

export default Home;
