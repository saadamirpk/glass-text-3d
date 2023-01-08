import { Canvas } from "@react-three/fiber";
import TextContent from "./TextContent";

export default function ThreeCanvas() {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 10] }}>
                <color attach="background" args={["#FAFAFA"]} />
                <ambientLight intensity={0.5} />
                <TextContent />
            </Canvas>
        </>
    );
}
