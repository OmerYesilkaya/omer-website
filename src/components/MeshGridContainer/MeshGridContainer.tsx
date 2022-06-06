import * as THREE from "three";

import { HoverableObject } from "components";
import { useEffect, useState } from "react";
import { ThreeUtils } from "lib";
import { useThree } from "@react-three/fiber";

type Props = {
    mouseRef: React.RefObject<THREE.Vector3>;
};

const colCount = 12;
const rowCount = 6;

const paddingHorizontal = 250;
const paddingVertical = 250;

const MeshGridContainer: React.FC<Props> = ({ mouseRef }) => {
    const [coordinates, setCoordinates] = useState<THREE.Vector3[]>([]);
    const camera = useThree((state) => state.camera);
    const size = useThree((state) => state.size);

    useEffect(() => {
        const cellWidth = size.width / (colCount - 1);
        const cellHeight = size.height / (rowCount - 1);

        const coords = [];
        for (let i = 0; i < colCount; i++) {
            for (let j = 0; j < rowCount; j++) {
                const posX = i * cellWidth + paddingHorizontal;
                const posY = j * cellHeight + paddingVertical;
                const normalizedPos = ThreeUtils.getNormalizedPositionWithoutRect(
                    posX,
                    posY,
                    size.width + paddingHorizontal * 2,
                    size.height + paddingVertical * 2
                );
                const worldPos = ThreeUtils.projectScreenToWorld(normalizedPos, camera);

                coords.push(worldPos);
            }
        }
        setCoordinates(coords);
    }, [size, camera]);

    return (
        <group>
            {coordinates.map((coordinate, index) => {
                return <HoverableObject key={index} position={coordinate} mouseRef={mouseRef} />;
            })}
        </group>
    );
};

export default MeshGridContainer;
