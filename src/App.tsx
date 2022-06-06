import { useRef } from "react";

import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import { RippleScene } from "components";
import { Environment, PerspectiveCamera } from "@react-three/drei";

function App() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <FullPage>
            <Center>
                <Box>
                    <Center ref={containerRef}>
                        <Canvas style={{ zIndex: 2 }}>
                            <PerspectiveCamera makeDefault near={0.1} far={100} zoom={1} fov={20} position={[0, 0, 50]} />
                            <RippleScene containerBoxRef={containerRef} />
                            <Environment preset="studio" />
                        </Canvas>
                        <Header>OMER YESILKAYA</Header>
                    </Center>
                </Box>
            </Center>
        </FullPage>
    );
}

export default App;

const FullPage = styled.div`
    background-color: #d4e3e3;
    width: 100vw;
    height: 100vh;
`;

const Box = styled.div`
    border-radius: 8px;
    /* border: 8px solid #ce1433; */
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
`;

const Header = styled.div`
    z-index: 1;
    font-family: "Monoton", cursive;
    font-size: 300px;
    position: absolute;
    text-align: center;
    text-shadow: 2px 2px #159fd1;
    user-select: none;
    color: #326498;
`;

const Center = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
`;
