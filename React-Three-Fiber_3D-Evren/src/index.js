import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics, useBox, usePlane } from '@react-three/cannon';// fizik sistemi :)
import "./styles.css";


function Box() {
	const [ref] = useBox(() => ({ mass: 1 })); //mass ile kütle belirttim
	return (
		<mesh ref={ref} position={[0, 0.5, 0]}>{/* X Y ve Z ekseninde değerler verdim. */}
			<boxBufferGeometry attach="geometry" />
			{/* kutu geometrisi ve üzerindeki doku malzemesini oluşturdum */}
			<meshLambertMaterial attach="material" color="lightGreen" />
			{/* oluşturduğum geo ve mat ı messh'in child'ı olarak belirttim */}
		</mesh>
	);
}

function Zemin() {
	const [refZ ,asd] = usePlane(() => ({
		rotation: [-Math.PI / 2, 0, 0] //zeminin değerini yazdım ki nesne oraya düşsün.
	}));
	return (
		<mesh onClick={() => {
			asd.velocity.set(0,2,0);
			// her tıklanma olayında zemine düşen nesne 2 birim zıplar.
		}}
			ref={refZ} rotation={[-Math.PI / 2, 0, 0]}>
			{/*  rotation={[-Math.PI / 2, 0, 0]} yazmasaydım zemin dikey görünürdü. */}
			<planeBufferGeometry attach={"geometry"} args={[20, 20]} />
			<meshLambertMaterial attach={"material"} color={"royalblue"} />
		</mesh>
	);
}

createRoot(document.getElementById('root')).render(
	// dosyayı root id li elemente ekledim
	<Canvas>
		<OrbitControls />
		{/* OrbitControls sayesinde mouse ile 3D evrende hareket ederim  */}
		<Stars />
		<ambientLight intensity={0.5} />{/* ambiyans ışığı ekledim */}
		<spotLight
			position={[10, 15, 10]}
			angle={0.3}
		/>
		<Physics>
			<Box />
			<Zemin />
		</Physics>
	</Canvas>
	// 3D Evren canvas etiketi içerisinde çalışacaktır. 
);