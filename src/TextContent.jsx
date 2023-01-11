import React, { useRef, useEffect, useState } from "react";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { useFrame } from "@react-three/fiber";
import helvetiker from "three/examples/fonts/helvetiker_bold.typeface.json";
import gentilis from "three/examples/fonts/gentilis_regular.typeface.json";
import gsap from "gsap";

export default function TextContent({ text3dVisible }) {
    const ref = useRef();
    const materialRef = useRef();
    const materialRef2 = useRef();

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

    const [material, setMaterial] = useState();

    useEffect(() => {
        if (ref && materialRef && materialRef2) {
            setMaterial(materialRef.current);

            if (text3dVisible) {
                gsap.fromTo(
                    [materialRef.current, materialRef2.current],
                    { opacity: 0 },
                    {
                        delay: 1,
                        opacity: 1,
                        duration: 2.5,
                        ease: "back.out(2)",
                    }
                );
                gsap.fromTo(
                    ref.current.position,
                    {
                        y: -5,
                    },
                    {
                        y: 0,
                        duration: 2.5,
                        ease: "back.out(2)",
                        delay: 1,
                    }
                );
            }
            {
                gsap.to([materialRef.current, materialRef2.current], {
                    opacity: 0,
                });
                gsap.to(ref.current.position, {
                    y: -5,
                    duration: 1,
                    ease: "power1.out",
                });
            }
        }
    }, [ref, materialRef, materialRef2, text3dVisible]);

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
            <meshLambertMaterial
                ref={materialRef}
                color={"black"}
                opacity={0}
                transparent={true}
            />
            {material && (
                <>
                    <mesh
                        material={material}
                        position={[-20, farTextHeight, -10]}
                        rotation={[0, 0, 0]}
                    >
                        <textGeometry
                            attach="geometry"
                            args={[
                                "Empowering Individuals to Achieve Their",
                                textOptions,
                            ]}
                        />
                    </mesh>
                    <mesh
                        position={[-22, 0, -10]}
                        rotation={[0, 0, 0]}
                        material={material}
                    >
                        <textGeometry
                            attach="geometry"
                            args={[
                                "Greatest                                              Potential",
                                textOptions,
                            ]}
                        />
                    </mesh>
                    <mesh
                        position={[-26, -farTextHeight, -10]}
                        rotation={[0, 0, 0]}
                        material={material}
                    >
                        <textGeometry
                            attach="geometry"
                            args={[
                                "Through Innovative Learning Programs and Support.",
                                textOptions,
                            ]}
                        />
                    </mesh>
                </>
            )}
            <mesh position={[-6.25, 0, 0]} rotation={[0, 0, 0]}>
                <textGeometry
                    attach="geometry"
                    args={["CREATE THE WAY", textOptionsForward]}
                />
                {text3dVisible ? (
                    <meshPhysicalMaterial
                        ref={materialRef2}
                        emissive={"#ff9064"}
                        emissiveIntensity={1}
                        reflectivity={0.5}
                        thickness={5}
                        roughness={0.5}
                        clearcoat={1}
                        clearcoatRoughness={0.05}
                        transmission={0.9}
                        ior={1.25}
                        opacity={0}
                        transparent={true}
                    />
                ) : (
                    <meshLambertMaterial
                        ref={materialRef2}
                        color={"black"}
                        opacity={0}
                        transparent={true}
                    />
                )}
            </mesh>
        </group>
    );
}
