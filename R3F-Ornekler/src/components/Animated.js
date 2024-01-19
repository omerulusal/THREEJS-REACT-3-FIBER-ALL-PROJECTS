import React from 'react';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

function Animated() {
    return (
        <>
            <Sphere visible args={[1, 100, 200]} >
                <MeshDistortMaterial
                    color={"yellow"} attach={"material"}
                    distort={0.5} speed={2} roughness={0}
                // distort ile kürede dağılma animasyonu yaptım hızı:2 ve pürüzssüz
                />
            </Sphere>
        </>
    );
}

export default Animated