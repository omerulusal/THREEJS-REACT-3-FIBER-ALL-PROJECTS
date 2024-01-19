import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
// Buradaki kodları gltfjsx src/assets/headphone.glb komutu ile gltfjsx benim için oluşturdu

function Headphone(props) {
  const { nodes, materials } = useGLTF('src/assets/headphone.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes['003_headfones_low_DefaultMaterial_0'].geometry}
        material={materials.DefaultMaterial}
        position={[-0.55, 7.5, 20.09]} 
        rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh
        geometry={nodes['001_headfones_low_DefaultMaterial_0'].geometry}
        material={materials.DefaultMaterial} material-color={"#D8B08C"}
        rotation={[-Math.PI / 2, 0, 0]} scale={100} />
      <mesh
        geometry={nodes['002_headfones_low_DefaultMaterial_0'].geometry}
        material={materials.DefaultMaterial}
        position={[-0.55, 7.5, 20.09]} 
        rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  )
}
export default Headphone;