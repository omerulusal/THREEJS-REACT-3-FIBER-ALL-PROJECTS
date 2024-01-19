import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import App from './App';
import Sphere from './components/Animated';
import Shoe from './components/Shoe';
import './styles.css';


createRoot(document.getElementById('root')).render(
    <>
        <Canvas className='canvas1'>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <Sphere />
        </Canvas>
        <Canvas className='shoe'>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight intensity={0.8} position={[30, 300, 400]} />
            <Shoe  />
        </Canvas>
        <Canvas className='canvas3'>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 15, 10]} angle={0.3} />
            <App />
        </Canvas>
    </>
);
