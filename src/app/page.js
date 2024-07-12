import React from 'react';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), {
	ssr: false,
});

const Home = () => {
	return (
		<div style={{ width: '100vw', height: '100vh' }}>
			<h1 style={{ textAlign: 'center', padding: '20px 0' }}>Menu</h1>
      <ThreeScene />
		</div>
	);
};

export default Home;
