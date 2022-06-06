import { useEffect, useRef } from "react";

import { useThree } from "@react-three/fiber";
import * as THREE from "three";

import { MeshGridContainer } from "components";
import { ThreeUtils } from "lib";
import { Vector3 } from "three";

type Props = {
    containerBoxRef: React.RefObject<HTMLDivElement>;
};

const RippleScene: React.FC<Props> = ({ containerBoxRef }) => {
    const camera = useThree((state) => state.camera);
    const mouseRef = useRef<THREE.Vector3>(new Vector3(999, 999, 999));
    const pointLightRef = useRef<THREE.PointLight>(null);

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            const rect = containerBoxRef.current?.getBoundingClientRect();
            if (!rect || !mouseRef.current) return;
            const normalizedPos = ThreeUtils.getNormalizedPosition(event.clientX, event.clientY, rect);
            const direction = ThreeUtils.projectScreenToWorld(normalizedPos, camera);
            mouseRef.current = direction;
        }
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [camera, containerBoxRef]);

    useEffect(() => {
        if (!pointLightRef.current) return;
        pointLightRef.current.lookAt(camera.position);
    }, [camera.position]);

    return (
        <>
            <ambientLight intensity={0.1} color={"#41e3ff"} />
            <pointLight ref={pointLightRef} position={[0, 25, 0]} color="#c9eff7" intensity={0.5} />
            <rectAreaLight intensity={0.2} />
            <MeshGridContainer mouseRef={mouseRef} />
        </>
    );
};

export default RippleScene;
