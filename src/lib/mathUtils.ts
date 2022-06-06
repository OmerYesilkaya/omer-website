import * as THREE from "three";

function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomFloatFromInterval(min: number, max: number): number {
    return Math.random() * (max - min + 1) + min;
}

function radians(degrees: number) {
    return (degrees * Math.PI) / 180;
}

function map(value: number, start1: number, stop1: number, start2: number, stop2: number) {
    return ((value - start1) / (stop1 - start1)) * (stop2 - start2) + start2;
}

function fluctuate(value: number, diff: number) {
    const min = value - diff;
    const max = value + diff;

    return randomFloatFromInterval(min, max);
}

function dist(a: THREE.Vec2, b: THREE.Vec2) {
    const x = b.x - a.x;
    const y = b.y - a.y;
    return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}

export { dist, fluctuate, map, randomFloatFromInterval, randomIntFromInterval, radians };
