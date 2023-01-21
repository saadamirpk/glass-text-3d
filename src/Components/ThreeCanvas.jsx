import { react, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import TextContent from "./TextContent";
import PlusModel from "./PlusModel";
import { useLocation } from "react-router-dom";

export default function ThreeCanvas() {
    let location = useLocation();

    const [text3dVisible, setText3dVisible] = useState(false);
    useEffect(() => {
        if (location.pathname === "/") {
            setText3dVisible(true);
        } else if (text3dVisible) {
            setText3dVisible(false);
        }
    }, [location]);

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
