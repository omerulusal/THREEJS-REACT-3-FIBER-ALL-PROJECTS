import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import texture from "./img/res2.jpg";

function Box() {
    const colorMap = useLoader(TextureLoader, texture);
    const kutu1 = useRef();
    useFrame(() => {
        kutu1.current.rotation.y += 0.01;
    })
    return (
        <mesh position={[0, 0.5, 0]} ref={kutu1}>
            <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
            <meshBasicMaterial map={colorMap} />
        </mesh>
    );
}
export default Box;