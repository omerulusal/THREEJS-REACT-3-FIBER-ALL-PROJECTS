import React from 'react';
import { useGLTF } from '@react-three/drei';
// Buradaki kodları gltfjsx src/assets/chair.gltf komutu ile gltfjsx benim için oluşturdu

function Chair(props) {
  const { nodes, materials } = useGLTF('src/assets/chair.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.koltuk.geometry}
        material={materials.chair} 
        rotation={[0, -0.5, 0]} />
    </group>
  )
}

export default Chair;