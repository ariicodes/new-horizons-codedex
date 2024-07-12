import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

//get canvas tag for webgl
const canvas = document.querySelector(".webgl");

const scene = new THREE.Scene();
const camera= new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
);
scene.add(camera);
camera.position.set(0, 10, 0);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
});

//need to make it contained in the window!
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(new THREE.Color(0x333333)); // hex for white

//create an instance of orbit control class (to add mobility to camera- mouse):
const orbit= new OrbitControls(camera, renderer.domElement);
orbit.update();


//for loading the images:
const loader = new GLTFLoader();

let hotCoffee;
loader.load(
    './hot-coffee',
    function(gltf){
        hotCofee = gltf.scene;
        scene.add(hotCoffee);
    },
    undefined,
    function(error){
        console.error(error);
    }
);
let boba;
loader.load(
    './cup-with-lid.glb',
    function(gltf){
        boba = gltf.scene;
        scene.add(boba);
    },
    undefined,
    function(error){
        console.error(error);
    }
);

function animate(){
  requestAnimationFrame(animate);
  boba.rotation.y +=1;
  orbit.update();
  renderer.render(scene.camera);
}

animate();
