// 描画するコンポーネント

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import "./css/Three.css";
import { FirstPersonControls, PointerLockControls, Sky, useGLTF } from "@react-three/drei";
import player from "./player";


function RotationBox() {
  const mesh = useRef<Mesh>(null!);
  player();
  return (
    <mesh ref={mesh}>
      <boxGeometry />
      <meshStandardMaterial color="#60ceff" />
    </mesh>
  );
};

function TestModel() {
  const {scene} = useGLTF("testData.glb");
  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  )
}

function Ground() {
  return(
    <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
  )
}

function Three() {
  return (
    <div className="canvasBox">
      <Canvas className="canvas">
        <ambientLight intensity={1} />
        {/* <RotationBox />
        <Ground /> */}
        {/* <PointerLockControls /> */}
        <FirstPersonControls movementSpeed={100} lookSpeed={0.05}/>
        <TestModel />
        <Sky sunPosition={[100, 20, 100]} />
      </Canvas>
    </div>
  );
}

export default Three;