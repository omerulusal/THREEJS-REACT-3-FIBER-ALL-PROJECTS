import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from "@react-three/drei";
import Kedi from "./components/Kedi";
import Chair from "./components/Chair";
import Koltuk from "./components/Koltuk";
import Zemin from './components/Zemin';
import Headphone from "./components/Headphone";


const App = () => {
  return (
    <Canvas camera={{ fov: 60, position: [-70, 100, 200] }} shadows >
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />
      <ambientLight />
      <Suspense fallback={null} >
        <Chair scale={100} position={[150, 0, 100]} rotation={[0, 330, 0]} />
        <Kedi  scale={1.5} position={[-50, 44, 30]} rotation={[0, 100, 0]} />
        <Koltuk scale={1} />
        <Headphone scale={0.6} position={[150, 51, 100]} rotation={[0.2, 330, 0]} />
        <Environment files="src/assets/1.hdr" background blur={0.01} />
        <Zemin />
      </Suspense>
    </Canvas>
  )
}

export default App;

// gltfjsx src/assets/Cat.glb ...ile nesneleri jsx formatına dönüştürdüm. 