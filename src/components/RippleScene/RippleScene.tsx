import { Vector3 } from "three";
import { Canvas } from "@react-three/fiber";

import { HoverableObject } from "components";
import { ThreeUtils } from "lib";

import * as Styled from "./RippleScene.styled";

function calculateObjectPosition(objectIndex: number, gridSize: number): Vector3 {
    /* TODO: 
  - calculate row count
  - calculate column count
  - get current index's col and row index
  - divide canvas width to total col count and store it in colSize
  - divide canvas height to total row count and store it in rowSize
  - multiply current index's col count with colSize and store it in objectPosX
  - multiply current index's row count with rowSize and store it in objectPosY
  - return new Vector3(objectPosX, objectPosY, 0);
  */
    return new Vector3(0, 0, 0);
}

const RippleScene: React.FC = () => {
    const objects = ThreeUtils.generateObjectPool(20);
    return (
        <Styled.Container>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                {objects.map(({ id, component: Component, type }, index) => (
                    <HoverableObject key={id} type={type} position={calculateObjectPosition(index, objects.length)}>
                        <Component />
                    </HoverableObject>
                ))}
            </Canvas>
        </Styled.Container>
    );
};

export default RippleScene;
