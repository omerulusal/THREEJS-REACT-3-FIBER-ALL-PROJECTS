import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
// Buradaki kodları gltfjsx src/assets/koltuk.glb komutu ile gltfjsx benim için oluşturdu

function Koltuk(props) {
  const { nodes, materials } = useGLTF('src/assets/koltuk.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['Sofa_Material_#3_0'].geometry} material={materials.Material_3} />
        <mesh geometry={nodes.Sofa_1_0.geometry} material={materials.material} />
      </group>
    </group>
  )
}

export default Koltuk;