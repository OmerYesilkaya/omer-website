import { PresentationControls, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Dot, Robo3D } from "components";

function App() {
    return (
        <div className="h-screen w-screen flex items-center justify-center relative">
            <div className="rounded-lg border-8 border-emerald-500 w-1/2 h-1/3 p-10 flex flex-col gap-y-4 ">
                <h2 className="font-title text-7xl font-bold">OMER YESILKAYA</h2>
                <span className="text-2xl ml-2">Hello, I am a</span>
                <div className="flex gap-x-2 items-center text-2xl ml-10">
                    <Dot className="bg-emerald-500" />
                    front-end developer
                </div>
                <div className="flex gap-x-2 items-center text-2xl ml-10">
                    <Dot className="bg-emerald-500" />
                    <p className="text-[#007acc]">typescript</p> enjoyer
                </div>
                <div className="flex gap-x-2 items-center text-2xl ml-10">
                    <Dot className="bg-emerald-500" />
                    <p className="text-[#00d8ff]">react</p>enthusiast
                </div>

                <div className="absolute left-1/2 top-1/2 -translate-x-1/5 -translate-y-1/2 w-1/4 h-2/3">
                    <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                        <ambientLight intensity={0.5} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-mapSize={[512, 512]} castShadow />
                        <PresentationControls
                            global
                            config={{ mass: 2, tension: 500 }}
                            snap={true}
                            rotation={[0, 0.3, 0]}
                            polar={[-Math.PI / 3, Math.PI / 3]}
                            azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                        >
                            <Robo3D />
                        </PresentationControls>
                        <Environment preset="city" />
                    </Canvas>
                </div>
            </div>
        </div>
    );
}

export default App;
