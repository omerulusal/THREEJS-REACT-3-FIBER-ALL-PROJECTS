import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei';
// ilk olarak npm install -g gltfjsx komutu kullandım
// Buradaki kodları gltfjsx src/assets/Cat.glb komutu ile gltfjsx benim için oluşturdu
const Kedi = (props) => {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('src/assets/cat.glb')
    const { actions } = useAnimations(animations, group)
    const calistir = () => {
        actions['Take 001'].play(); // Animasyonun adını threejs editorden öğrendim
    };
    // Mouse ile Kedinin üzerine geldiğimde animasyon tetiklenecektir
    return (
        <group ref={group} {...props} dispose={null} onPointerMove={calistir} >
            {/* Buradan itibaren anlamaya çalışmana gerek yok nedenini en üstte yazdım */}
            <group name="Sketchfab_Scene">
                <group
                    name="Sketchfab_model"
                    rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="root">
                        <group
                            name="GLTF_SceneRootNode"
                            rotation={[Math.PI / 2, 0, 0]}>
                            <group
                                name="RootNode_(gltf_orientation_matrix)_0"
                                rotation={[-Math.PI / 2, 0, 0]}>
                                <group
                                    name="RootNode_(model_correction_matrix)_1">
                                    <group
                                        name="catfbx_2" rotation={[Math.PI / 2, 0, 0]}>
                                        <group name="_3">
                                            <group name="RootNode_4">
                                                <group name="_5">
                                                    <group name="GLTF_created_0">
                                                        <primitive object={nodes.GLTF_created_0_rootJoint} />
                                                        <group name="_8" />
                                                        <group name="_9" />
                                                        <group name="_10" />
                                                        <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Material_81} skeleton={nodes.Object_12.skeleton} />
                                                        <skinnedMesh name="Object_14" geometry={nodes.Object_14.geometry} material={materials.Material_105} skeleton={nodes.Object_14.skeleton} />
                                                        <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Material_93} skeleton={nodes.Object_16.skeleton} />
                                                    </group>
                                                </group>
                                            </group>
                                        </group>
                                    </group>
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

export default Kedi