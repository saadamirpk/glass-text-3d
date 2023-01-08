import React, { useRef } from "react";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { useFrame } from "@react-three/fiber";
import helvetiker from "three/examples/fonts/helvetiker_bold.typeface.json";
import gentilis from "three/examples/fonts/gentilis_regular.typeface.json";

export default function TextContent() {
    const ref = useRef();
    useFrame((state) => {
        ref.current.rotation.y = THREE.MathUtils.lerp(
            ref.current.rotation.y,
            (-state.mouse.x * Math.PI) / 20,
            0.05
        );
        ref.current.rotation.x = THREE.MathUtils.lerp(
            ref.current.rotation.x,
            (state.mouse.y * Math.PI) / 20,
            0.05
        );
    });

    const farTextHeight = 2.5;
    extend({ TextGeometry });
    const helvetiker_bold = new FontLoader().parse(helvetiker);
    const gentilis_bold = new FontLoader().parse(gentilis);

    const textOptions = {
        font: helvetiker_bold,
        size: 1.5,
        height: 0.01,
    };
    const textOptionsForward = {
        font: gentilis_bold,
        size: 1.2,
        height: 0.5,
    };

    return (
        <group ref={ref}>
            <mesh position={[-20, farTextHeight, -10]} rotation={[0, 0, 0]}>
                <textGeometry
                    attach="geometry"
                    args={[
                        "Empowering Individuals to Achieve Their",
                        textOptions,
                    ]}
                />
                <meshLambertMaterial attach="material" color={"black"} />
            </mesh>
            <mesh position={[-22, 0, -10]} rotation={[0, 0, 0]}>
                <textGeometry
                    attach="geometry"
                    args={[
                        "Greatest                                              Potential",
                        textOptions,
                    ]}
                />
                <meshLambertMaterial attach="material" color={"black"} />
            </mesh>
            <mesh position={[-26, -farTextHeight, -10]} rotation={[0, 0, 0]}>
                <textGeometry
                    attach="geometry"
                    args={[
                        "Through Innovative Learning Programs and Support.",
                        textOptions,
                    ]}
                />
                <meshLambertMaterial attach="material" color={"black"} />
            </mesh>
            <mesh position={[-6.25, 0, 0]} rotation={[0, 0, 0]}>
                <textGeometry
                    attach="geometry"
                    args={["CREATE THE WAY", textOptionsForward]}
                />
                <meshPhysicalMaterial
                    emissive={"#ff9064"}
                    emissiveIntensity={1}
                    reflectivity={0.5}
                    thickness={5}
                    roughness={0.5}
                    clearcoat={1}
                    clearcoatRoughness={0.05}
                    transmission={0.9}
                    ior={1.25}
                />
            </mesh>
        </group>
    );
}
