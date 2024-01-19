import React, { useRef } from 'react';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFrame, useLoader } from '@react-three/fiber';
import { Text, Environment, Sparkles, Float } from '@react-three/drei';
function Shoe() {
    const gltf = useLoader(GLTFLoader, "./shoe.glb");
    const shoeRef = useRef();
    useFrame(() => {
        shoeRef.current.rotation.y += 0.01;
    })
    return (
        <>
            <Float>
                <primitive
                    object={gltf.scene}
                    ref={shoeRef}
                    position={[0, -1, -1]}
                />

            </Float>
            <Text
                position={[0, 1, 0]}
                rotation={[0, -2, 0]}
                color={"red"}
            >
                3D Model Ekleme
                <Sparkles
                    size={4}
                    scale={[-10, 1, 1]}
                    position={[-1, 0, 0]}
                    speed={0.2}
                    count={20}
                    color={"blue"}
                >
                    {/* Sparkles ile ateş böcegi oluşturdum. */}
                </Sparkles>
            </Text>
            <Environment
                preset='sunset'
            />
        </>
    );
}


export default Shoe;
