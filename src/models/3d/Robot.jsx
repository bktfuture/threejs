import React, { useEffect, useRef } from 'react';
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useFrame, useThree } from '@react-three/fiber';

import { a } from '@react-spring/three';
import robotScene from '../../assets/robot.glb';
import { useGLTF } from '@react-three/drei';

const Robot = (props) => {
	const robotRef = useRef();
	const { nodes, materials } = useGLTF(robotScene);
	return (
		<a.group ref={robotRef} {...props}>
			<mesh
				// castShadow
				// receiveShadow
				geometry={nodes.Cube.geometry}
				material={materials.Material}
				position={[0, 1.382, 0]}
				rotation={[Math.PI, -0.547, Math.PI]}
				scale={[1.264, 0.902, 0.902]}
			>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.cat_insde.geometry}
					material={materials.Material}
					position={[-0.424, 1.369, 0.201]}
					rotation={[0.005, -0.125, 0.307]}
					scale={[0.186, 0.217, 0.172]}
				/>
				<group position={[-1.137, -0.201, -0.088]} rotation={[0, 0, -Math.PI / 2]} scale={[0.898, 0.715, 0.898]}>
					<mesh castShadow receiveShadow geometry={nodes.Circle_1.geometry} material={materials.Material} />
					<mesh castShadow receiveShadow geometry={nodes.Circle_2.geometry} material={materials['Material.001']} />
					<mesh castShadow receiveShadow geometry={nodes.Circle_3.geometry} material={materials['Material.002']} />
				</group>
				<mesh
					castShadow
					receiveShadow
					geometry={nodes.Cone.geometry}
					material={materials.Material}
					position={[-0.424, 1.369, 0.201]}
					rotation={[0.005, -0.125, 0.307]}
					scale={[0.226, 0.225, 0.213]}
				/>
				<mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={materials.Material} />
				<mesh castShadow receiveShadow geometry={nodes.Cube001_1.geometry} material={materials['Material.003']} />
				<mesh castShadow receiveShadow geometry={nodes.Cube001_2.geometry} material={materials['Material.004']} />
			</mesh>
		</a.group>
	);
};

export default Robot;
