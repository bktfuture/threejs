import React, { useEffect, useRef } from 'react';
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
import { useFrame, useThree } from '@react-three/fiber';

import { a } from '@react-spring/three';
import { isRouteErrorResponse } from 'react-router-dom';
import robotScene from '../assets/3d/robot.glb';
import { useGLTF } from '@react-three/drei';

const Robot = ({ isRotating, setIsRotating, ...props }) => {
	const isRobotRef = useRef();
	const { gl, viewport } = useThree();

	//mouse position
	const lastX = useRef(0);
	const rotationSpeed = useRef(0);

	const dampingFactor = 0.95;

	const handlePointerDown = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIsRotating(true);

		const clientX = e.touches ? e.touches[0].clientX : e.clientX;
		// check whether the touch is on the phone or the click
		lastX.current = clientX;
	};
	const handlePointerUp = (e) => {
		e.stopPropagation();
		e.preventDefault();
		setIsRotating(false);
	};

	const handlePointerMove = (e) => {
		e.stopPropagation();
		e.preventDefault();

		if (isRotating) {
			const clientX = e.touches ? e.touches[0].clientX : e.clientX;

			const delta = (clientX - lastX.current) / viewport.width; //difference
			isRobotRef.current.rotation.y += delta * 0.03 * Math.PI;

			lastX.current = clientX;

			rotationSpeed.current = delta * 0.03 * Math.PI;
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === 'ArrowLeft') {
			if (!isRotating) setIsRotating(true);
			isRobotRef.current.rotation.y += 0.03 * Math.PI;
		} else if (e.key === 'ArrowRight') {
			if (!isRotating) setIsRotating(true);
			isRobotRef.current.rotation.y -= 0.03 * Math.PI;
		}
	};

	const handleKeyUp = (e) => {
		if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
			setIsRotating(false);
		}
	};

	useFrame(() => {
		if (!isRotating) {
			rotationSpeed.current *= dampingFactor;
			if (Math.abs(rotationSpeed.current) < 0.001) {
				rotationSpeed.current = 0;
			}
			isRobotRef.current.rotation.y += rotationSpeed.current;
		} else {
			const rotation = isRobotRef.current.rotation.y;

			/**
			 * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
			 * The goal is to ensure that the rotation value remains within a specific range to
			 * prevent potential issues with very large or negative rotation values.
			 *  Here's a step-by-step explanation of what this code does:
			 *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
			 *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
			 *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
			 *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
			 *     This is done to ensure that the value remains positive and within the range of
			 *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
			 *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
			 *     modulo operation to the value obtained in step 2. This step guarantees that the value
			 *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
			 *     circle in radians.
			 */
			const normalizedRotation = ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

			// Set the current stage based on the robot's orientation
			switch (true) {
				case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
					setCurrentStage(4);
					break;
				case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
					setCurrentStage(3);
					break;
				case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
					setCurrentStage(2);
					break;
				case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
					setCurrentStage(1);
					break;
				default:
					setCurrentStage(null);
			}
		}
	});

	useEffect(() => {
		const canvas = gl.domElement;
		canvas.addEventListener('pointerdown', handlePointerDown);
		canvas.addEventListener('pointerup', handlePointerUp);
		canvas.addEventListener('pointermove', handlePointerMove);
		document.addEventListener('keydown', handleKeyDown);
		document.addEventListener('keyup', handleKeyUp);

		return () => {
			canvas.removeEventListener('pointerdown', handlePointerDown);
			canvas.removeEventListener('pointerup', handlePointerUp);
			canvas.removeEventListener('pointermove', handlePointerMove);
			document.removeEventListener('keyup', handleKeyUp);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [gl, handlePointerDown, handlePointerUp, handlePointerMove]);

	const { nodes, materials } = useGLTF(robotScene);
	return (
		<a.group ref={isRobotRef} {...props}>
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
					geometry={nodes.cat_insde.geometry}
					material={materials.Material}
					position={[-0.424, 1.369, 0.201]}
					rotation={[0.005, -0.125, 0.307]}
					scale={[0.186, 0.217, 0.172]}
				/>
				<group position={[-1.137, -0.201, -0.088]} rotation={[0, 0, -Math.PI / 2]} scale={[0.898, 0.715, 0.898]}>
					<mesh geometry={nodes.Circle_1.geometry} material={materials.Material} />
					<mesh geometry={nodes.Circle_2.geometry} material={materials['Material.001']} />
					<mesh geometry={nodes.Circle_3.geometry} material={materials['Material.002']} />
				</group>
				<mesh
					geometry={nodes.Cone.geometry}
					material={materials.Material}
					position={[-0.424, 1.369, 0.201]}
					rotation={[0.005, -0.125, 0.307]}
					scale={[0.226, 0.225, 0.213]}
				/>
				<mesh geometry={nodes.Cube002.geometry} material={materials.Material} />
				<mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.003']} />
				<mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.004']} />
			</mesh>
		</a.group>
	);
};

export default Robot;
