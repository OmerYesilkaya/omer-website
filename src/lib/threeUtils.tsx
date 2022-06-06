import * as THREE from "three";

function getNormalizedPosition(x: number, y: number, bounds: DOMRect): { x: number; y: number } {
    return {
        x: ((x - bounds!.left) / bounds!.width) * 2 - 1,
        y: -(((y - bounds!.top) / bounds!.height) * 2 - 1),
    };
}

function getNormalizedPositionWithoutRect(x: number, y: number, w: number, h: number): { x: number; y: number } {
    return {
        x: (x / w) * 2 - 1,
        y: -((y / h) * 2 - 1),
    };
}

const plane = new THREE.Plane(new THREE.Vector3(0, 0, -1), -25);
function projectScreenToWorld(pos: { x: number; y: number }, camera: THREE.Camera): THREE.Vector3 {
    camera.updateMatrixWorld();
    const v = new THREE.Vector3();
    const r = new THREE.Vector3();
    v.set(pos.x, pos.y, -1);
    v.unproject(camera);
    r.copy(v);
    r.sub(camera.position);
    r.normalize();

    const ray = new THREE.Ray(camera.position, r);
    ray.intersectPlane(plane, r);
    return r;
}

export { projectScreenToWorld, getNormalizedPosition, getNormalizedPositionWithoutRect };
