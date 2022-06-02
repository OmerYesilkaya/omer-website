import { ThreeDimensionalObjectType } from "lib/threeUtils";
import { Vector3 } from "three";

type Props = {
    position: Vector3;
    type: ThreeDimensionalObjectType;
    children: React.ReactNode;
};

const HoverableObject: React.FC<Props> = ({ position, type, children }) => {
    return (
        <group position={position} scale={[0.5, 0.5, 0.5]}>
            {children}
        </group>
    );
};

export default HoverableObject;
