import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export default function PlusModel({ size, position, color, opacity, x, y }) {
    const ref = useRef();
    useFrame(() => {
        ref.current.rotation.y += y;
        ref.current.rotation.x += x;
    });

    return (
        <group ref={ref} position={position}>
            <mesh>
                <torusGeometry args={size} />
                <meshBasicMaterial
                    color={color}
                    transparent={true}
                    opacity={opacity}
                />
            </mesh>
        </group>
    );
}
