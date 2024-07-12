'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Model = ({ path, scale }) => {
	const { scene } = useGLTF(path);
	return <primitive object={scene} scale={scale} />;
};

const RotatingModel = ({ path, scale }) => {
	const ref = useRef();
	useFrame(() => (ref.current.rotation.y += 0.01));
	return (
		<group ref={ref}>
			<Model path={path} scale={scale}/>
		</group>
	);
};


const ThreeScene = () => {
	const [activeModel, setActiveModel] = useState('boba');

	function bobaBtn(){
		setActiveModel('boba')
	}
	function hotCoffeeBtn(){
	setActiveModel('hotCoffee')
	}
	function icedCoffeeBtn(){
		setActiveModel('icedCoffee')
	}
	function specialtyBtn(){
		setActiveModel('specialty')
	}
	function saladSandwichBtn(){
		setActiveModel('saladSandwich')
	}
	function alcoholBtn(){
		setActiveModel('alcohol')
	}
	const hotCoffeeMenu = [
		{'name': 'Latte', 'price': '$4.75'},
		{'name': 'Cappucino', 'price': '$4.50'},
		{'name': 'Cortado', 'price': '$4.25'},
		{'name': 'Mocha', 'price': '$5.75'},
		{'name': 'Small Drip Coffee', 'price': '$3.00'},
		{'name': 'Medium Drip Coffee', 'price': '$3.50'},
		{'name': 'Large Drip Coffee', 'price': '$4'},
		{'name': 'Red Eye', 'price': '$4.50'},
		{'name': 'Americano', 'price': '$3.75'},
		{'name': 'Cafe Au Lait', 'price': '$4.75'}
	];
	const coldCoffeeMenu =[
		{'name': 'Iced Latte', 'price': '$5.25'},
		{'name': 'Iced Cortado', 'price': '$4.75'},
		{'name': 'Iced Mocha', 'price': '$6.25'},
		{'name': 'Small Iced Coffee', 'price': '$3.50'},
		{'name': 'Large Iced Coffee', 'price': '$4.25'},
		{'name': 'Iced Red Eye', 'price': '$4.75'},
		{'name': 'Iced Americano', 'price': '$4.25'},
	];
	const specialtyMenu =[
		{'name': 'Matcha Latte', 'price': '$5.25'},
		{'name': 'Iced Matcha Latte', 'price': '$5.75'},
		{'name': 'Lavendar Latte', 'price': '$5.75'},
		{'name': 'Iced Lavendar Latte', 'price': '$6.25'},
		{'name': 'Rose Latte', 'price': '$5.75'},
		{'name': 'Iced Rose Latte', 'price': '$6.25'},
		{'name': 'Hot Chocolate', 'price': '$4.50'},
		{'name': 'S\'mores Hot Chocolate', 'price': '$5.50'},
		{'name': 'Brown Sugar Latte', 'price': '$5.75'},
		{'name': 'Iced Brown Sugar Latte', 'price': '$6.25'},
		{'name': 'Bumblebee Latte', 'price': '$5.75'},
		{'name': 'Iced Bumblebee Latte', 'price': '$6.25'},
		{'name': 'Nutella Latte', 'price': '$5.75'},
		{'name': 'Iced Nutella Latte', 'price': '$6.25'},
		{'name': 'Chai Latte', 'price': '$5.00'},
		{'name': 'Iced Chai Latte', 'price': '$5.50'},
		{'name': 'Dirty Chai Latte', 'price': '$6.25'},
		{'name': 'Dirty Iced Chai Latte', 'price': '$6.75'},

	];
	const bobaItems = [
		{
			category: 'Milk Teas',
		 	items:
			[{'name': 'The OG- Medium', 'price': '$4.25'},
			{'name': 'The OG - Large', 'price': '$5.25'},
			{'name': 'The OG- Hot', 'price': '$5.25'}],
			note: "This is our classic milk tea"
		},
		{
			category: "Brown Sugar Bobas",
			items: [
				{'name': 'Brown Sugar Boba -Medium', 'price': '$4.75'},
				{'name': 'Brown Sugar Boba -Large', 'price': '$5.75'},
				{'name': 'Brown Sugar Boba -Hot', 'price': '$5.75'},
			],
			note: "This is caffeine free"
		},
		{
			category: 'Taro Boba Coconut',
			items: [
				{'name': 'Taro Boba Coconut -Medium', 'price': '$4.25'},
				{'name': 'Taro Boba Coconut -Large', 'price': '$5.25'},
				{'name': 'Taro Boba Coconut -Hot', 'price': '$5.25'},
			],
			note: "This is caffeine and dairy free"
		},
		{
			category: 'Fruit Teas',
			items: [
				{'name': 'Green Fruit Tea - Medium', 'price': '$4.25'},
				{'name': 'Green Fruit Tea - Large', 'price': '$5.25'},
				{'name': 'Black Fruit Tea - Medium', 'price': '$4.25'},
				{'name': 'Black Fruit Tea - Large', 'price': '$5.25'}
			],
			note: "Comes in a variety of flavors: mango, strawberry, passionfruit, peach, green apple, lychee, kiwi",
		},
		{
			category: 'Jasmine Milk Teas',
			items: [
				{'name': 'Jasmine Milk Tea- Medium', 'price': '$4.25'},
				{'name': 'Jasmine Milk Tea- Large', 'price': '$5.25'},
				{'name': 'Jasmine Milk Tea- Hot', 'price': '$5.25'},
			],
			note: "This is dairy free"

		},
		{
			category: 'Wintermelon Milk Teas',
			items: [
				{'name': 'Wintermelon Milk Tea- Medium', 'price': '$4.25'},
				{'name': 'Wintermelon Milk Tea- Large', 'price': '$5.25'},
				{'name': 'Wintermelon Milk Tea- Hot', 'price': '$5.25'},
			],
			note: "This is dairy free"
		}
	];

	const saladSandwichItems = [
			{'name': 'Beyond Bussin Sandwich', 'price': '$15.00', 'description': 'SHEEESSHHH Our new VEGAN sandwich highlighting the beyond burger and our house-made vegan chipotle aioli alongside lettuce, onion, and avocado'},
			{'name': 'Mixed Green Salad- Smoked Salmon', 'price': '$11.50', 'description': 'with Tomato, VEGAN'},
			{'name': 'Mixed Green Salad- Avocado', 'price': '$8.00', 'description': 'with Tomato, VEGAN'},
			{'name': 'Mixed Green Salad- Boiled Egg', 'price': '$7.50', 'description': 'with Tomato, VEGAN'},
			{'name': 'Cobb Salad', 'price': '$10.00', 'description': 'Romaine lettuce, bacon, egg, chicken, tomato, and avocado tossed with ranch'},
			{'name': 'Pizza Panini', 'price': '$11.00', 'description': 'Pepperoni, fresh mozzarella, marinara, and olive oil on italian herb focaccia and pressed to perfection! Comes with chips'},
			{'name': 'Smoked Salmon Tartine', 'price': '$11.00', 'description': 'Lemon zest infused cream cheese on toasted heritage wheat. Piled high with smoked salmon and topped with pickled red onion. Comes with a side salad'},
			{'name': 'Avocado Toast', 'price': '$10.00', 'description': 'Avocado mashed with salt, pepper, lemon juice, and olive oil on toasted heritage wheat. Comes with a side salad'},
			{'name': 'Avocado Toast- Fried Egg', 'price': '$11.00', 'description': 'Avocado mashed with salt, pepper, lemon juice, and olive oil on toasted heritage wheat. Comes with a side salad'},
			{'name': 'Italian Panini', 'price': '$11.00', 'description': 'Prosciutto, pesto, and mozzarella in between herb focaccia and pressed til golden brown and crispy. CONTAINS PINE NUTS. Comes with chips'},
			{'name': 'Tuna Melt', 'price': '$11.00', 'description': 'House-made tuna salad with American cheese on Italian herb focaccia pressed to perfection (spicy on request). Comes with chips'},
			{'name': 'Zesto Chicken Sandwich', 'price': '$13.00', 'description': 'Basil pesto, grilled chicken, fresh mozzarella and lemon zest on Italian herb focaccia. CONTAINS PINE NUTS. Comes with chips'},
			{'name': 'Turkey Club', 'price': '$11.00', 'description': 'Roast turkey, lettuce, tomato, crispy bacon and American cheese on sourdough. Comes with Chips.'},
			{'name': 'Grilled Cheese', 'price': '$6.50', 'description': 'Comes with chips'},
			{'name': 'Grilled Cheese- Bacon, Tomato, and Turkey', 'price': '$7.50', 'description': 'Comes with chips'},
	];

	const alcohol = [
		'Babe Rose', 'Archer Roose White/Red', 'Kona Lager', 'Blue Point', 'Juneshine', 'Lunar Hard Seltzers', 'Allagash White', 'Doc Cider', 'Stella Artois', 'Shocktop', 'Finback','Three\s Brewery'
	]
	
	const menuItems = {
	hotCoffee: hotCoffeeMenu,
	icedCoffee: coldCoffeeMenu,
	specialty: specialtyMenu,
	boba: bobaItems,
	saladSandwich: saladSandwichItems,
	alcohol: alcohol,
	};
	
	const renderMenu = () => {
		const items = menuItems[activeModel];

		if (!items) return null;

		if (Array.isArray(items)) {
			return (
				<div className="menu-items">
					{items.map((item, index) => (
						<div key={index} className="menu-item">
							<h3>{item.name || item}</h3>
							{item.price && <h4>{item.price}</h4>}
							{item.description && <p>{item.description}</p>}
						</div>
					))}
				</div>
			);
		} else {
			return (
				<div className="menu-items">
					{items.map((category, index) => (
						<div key={index} className="boba-category">
							<h3>{category.category}</h3>
							{category.note && <p>{category.note}</p>}
							<div className="boba-items">
								{category.items.map((item, itemIndex) => (
									<div key={itemIndex} className="boba-item">
										<div>{item.name}</div>
										<div>{item.price}</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			);
		}
	};

	return (
	<>
		<div className="menu-container">
			<div className="options-container">
				<button onClick={hotCoffeeBtn}>Coffee</button>
				<button onClick={icedCoffeeBtn}>Iced Coffee</button>
				<button onClick={bobaBtn}>Boba</button>
				<button onClick={specialtyBtn}>Specialty Drinks</button>
				<button onClick={saladSandwichBtn}>Salads and Sandwiches</button>
				<button onClick={alcoholBtn}>Alcohol</button>
			</div>
			<div className="three-container">
				<Canvas camera={{ position: [0, 3, 6], fov: 75 }}>
					<color attach='background' args={['#A9E8B2']} />
					<ambientLight intensity={0.8} />
					<directionalLight position={[0, 10, 0]} intensity={0.5} castShadow />
					<OrbitControls />
					{activeModel == 'boba' && <RotatingModel path='/cup-with-lid-updated.glb' />}
					{activeModel == 'icedCoffee' && <RotatingModel path='/cup-with-lid-updated.glb' />}
					{activeModel == 'hotCoffee' && <RotatingModel path='/hot-coffee-updated.glb' />}
					{activeModel == 'specialty' && <RotatingModel path='/cafe_latte_with_art.glb' scale={[4,4,4]}/>}
					{activeModel == 'saladSandwich' && <RotatingModel path='/bowl_with_salad.glb'scale={[0.2,0.2,0.2]}/>}
					{activeModel == 'alcohol' && <RotatingModel path='/jack_daniels_-_whiskey_alcohol_-_by_smakologg.glb'scale={[0.8,0.8,0.8]}/>}
				</Canvas>
			</div>
			
			<div className="menu">
			  <h2>{activeModel.toUpperCase()}</h2>
			{renderMenu()}
		 </div>
			</>
	);
};

export default ThreeScene;
