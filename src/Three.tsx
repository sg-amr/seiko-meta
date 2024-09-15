// 描画するコンポーネント

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import "./css/Three.css";
import { PointerLockControls, Sky } from "@react-three/drei";
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
        <ambientLight intensity={0.5} />
        <RotationBox />
        <Ground />
        <PointerLockControls />
        <Sky sunPosition={[100, 20, 100]} />
      </Canvas>
    </div>
  );
}

export default Three;