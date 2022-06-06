import { Torus } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "lib";
import { useRef } from "react";
import * as THREE from "three";

const material: any = {
    thickness: 5,
    roughness: 0,
    clearcoat: 1,
    clearcoatRoughness: 0,
    transmission: 1,
    ior: 1.25,
    envMapIntensity: 25,
    color: "#ffffff",
    attenuationTint: "#ffe79e",
    attenuationDistance: 0,
};

type Props = {
    position: THREE.Vector3;
    mouseRef: React.RefObject<THREE.Vector3>;
};

const HoverableObject: React.FC<Props> = ({ position, mouseRef }) => {
    const groupRef = useRef<THREE.Group>(null);
    const innerGroupRef = useRef<THREE.Group>(null);

    const randomSign = Math.random() < 0.5 ? -1 : 1;
    const randomScalarX = randomSign * MathUtils.randomFloatFromInterval(0.2, 0.4);
    const randomScalarY = randomSign * MathUtils.randomFloatFromInterval(1.2, 1.4);
    const randomScalarZ = randomSign * MathUtils.randomFloatFromInterval(0.8, 1);

    const randomScalarSinWaveX = randomSign * MathUtils.randomFloatFromInterval(0.3, 0.5);
    const randomScalarSinWaveY = randomSign * MathUtils.randomFloatFromInterval(0.3, 0.5);

    useFrame(({ clock }) => {
        if (!mouseRef.current || !groupRef.current || !innerGroupRef.current) return;

        const d = Math.max(MathUtils.dist(position, mouseRef.current), 2);
        const v = 20 / Math.pow(d, 1.8);

        const rotationValue = Math.min(v, 3);
        const scaleValue = Math.min(0.25 + v, 1.3);
        const zDisplacementValue = Math.min(position.z + v * 2, 5);

        groupRef.current.scale.x = THREE.MathUtils.lerp(groupRef.current.scale.x, scaleValue, 0.1);
        groupRef.current.scale.y = THREE.MathUtils.lerp(groupRef.current.scale.y, scaleValue, 0.1);
        groupRef.current.scale.z = THREE.MathUtils.lerp(groupRef.current.scale.z, scaleValue, 0.1);

        groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, zDisplacementValue, 0.1);

        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, rotationValue * randomScalarX, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, rotationValue * randomScalarY, 0.05);
        groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, rotationValue * randomScalarZ, 0.05);

        innerGroupRef.current.position.y = THREE.MathUtils.lerp(
            innerGroupRef.current.position.y,
            (randomScalarSinWaveY * Math.sin(clock.elapsedTime)) / 4,
            0.01
        );
        innerGroupRef.current.position.x = THREE.MathUtils.lerp(
            innerGroupRef.current.position.x,
            (randomScalarSinWaveX * Math.sin(clock.elapsedTime)) / 4,
            0.01
        );
    });

    return (
        <group position={position} ref={groupRef}>
            <group ref={innerGroupRef}>
                <Torus args={[0.8, 0.2, 64, 32]}>
                    <meshPhysicalMaterial {...material} />
                </Torus>
            </group>
        </group>
    );
};

export default HoverableObject;
