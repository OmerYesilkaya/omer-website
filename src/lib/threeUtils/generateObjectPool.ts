import { Box, Cone, Cylinder, Torus } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import { MathUtils } from "lib";

export enum ThreeDimensionalObjectType {
    Box,
    Cylinder,
    Cone,
    Torus,
}

type ObjectPool = {
    id: number;
    component: React.ForwardRefExoticComponent<Pick<Omit<MeshProps, "args">, any>>;
    type: ThreeDimensionalObjectType;
}[];

const componentMap = {
    [ThreeDimensionalObjectType.Box]: Box,
    [ThreeDimensionalObjectType.Cylinder]: Cylinder,
    [ThreeDimensionalObjectType.Cone]: Cone,
    [ThreeDimensionalObjectType.Torus]: Torus,
};

function generateObjectPool(poolSize: number): ObjectPool {
    const result: ObjectPool = [];
    for (let i = 0; i < poolSize; i++) {
        const type = MathUtils.randomIntFromInterval(0, 3) as ThreeDimensionalObjectType;
        result.push({
            id: i + 1,
            component: componentMap[type],
            type: type,
        });
    }
    return result;
}

export default generateObjectPool;
