import { Canvas } from "@react-three/fiber";
import TextContent from "./TextContent";
import PlusModel from "./PlusModel";

export default function ThreeCanvas({ text3dVisible }) {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 10] }}>
                <color attach="background" args={["#FAFAFA"]} />
                <ambientLight intensity={0.5} />
                <TextContent text3dVisible={text3dVisible} />
                <PlusModel
                    size={[16, 4, 18, 50]}
                    position={[40, 12, -30]}
                    color={"#ff9064"}
                    opacity={0.3}
                    x={0.005}
                    y={0.01}
                />
            </Canvas>
        </>
    );
}
