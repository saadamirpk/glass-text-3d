import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FontLoader } from "three/examples/jsm/loaders/FontLoader"
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import helvetiker from "three/examples/fonts/helvetiker_bold.typeface.json"
import gentilis from "three/examples/fonts/gentilis_regular.typeface.json"

export default function GlassText({ref}) {

    const farTextHeight = 2.5;

    extend({ TextGeometry })
    const helvetiker_bold = new FontLoader().parse(helvetiker)
    const gentilis_bold = new FontLoader().parse(gentilis)

    const textOptions = {
        font: helvetiker_bold,
        size: 1.5,
        height: .01,
      }
      const textOptionsForward = {
        font: gentilis_bold,
        size: 1.2,
        height: .5,
      }
    const materialProps = {
        thickness: { value: 5, min: 0, max: 20 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
        clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
        ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
        envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
        color: '#ffffff',
        attenuationTint: '#ffe79e',
        attenuationDistance: { value: 0, min: 0, max: 1 }
      }

    return (
      <>
        <Canvas camera={{ position: [0, 0, 10] }}>
          <color attach="background" args={['#fff']} />
          <ambientLight intensity={0.5} />
          <group ref={ref}>
          <mesh position={[-20,farTextHeight,-10]} rotation={[0, 0, 0]}>
                <textGeometry attach='geometry' args={["Empowering Individuals to Achieve Their", textOptions]}/>
                <meshLambertMaterial attach='material' color={'black'}/>
             </mesh>
             <mesh position={[-22,0,-10]} rotation={[0, 0, 0]}>
                <textGeometry attach='geometry' args={["Greatest                                              Potential", textOptions]}/>
                <meshLambertMaterial attach='material' color={'black'}/>
             </mesh>
             <mesh position={[-26,-farTextHeight,-10]} rotation={[0, 0, 0]}>
                <textGeometry attach='geometry' args={["Through Innovative Learning Programs and Support.", textOptions]}/>
                <meshLambertMaterial attach='material' color={'black'}/>
             </mesh>
             <mesh position={[-6.25,0,0]} rotation={[0, 0, 0]}>
                <textGeometry attach='geometry' args={["CREATE THE WAY", textOptionsForward]}/>
                <meshPhysicalMaterial emissive={'#fff'} emissiveIntensity={0.01} reflectivity={0.5} thickness={5} roughness={0.2} clearcoat={1} clearcoatRoughness={0.05} transmission={0.9} ior={ 1.25}/>
             </mesh>
             </group>
          <OrbitControls />
        </Canvas>
      </>
    )
  }