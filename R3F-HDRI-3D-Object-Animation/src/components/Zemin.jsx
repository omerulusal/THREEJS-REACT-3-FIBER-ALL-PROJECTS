import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Zemin = () => {
    const doku = useLoader(TextureLoader,"src/assets/carpet.jpg")
    return (
        <>
            <mesh rotation={[-Math.PI/2,0,0]} position={[0,0,0]} >
                <planeBufferGeometry attach="geometry" args={[700, 700]} />
                <meshLambertMaterial attach="material" map={doku} />
            </mesh>
        </>
    )
}

export default Zemin