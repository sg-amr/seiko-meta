// 描画するコンポーネント

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import "./Three.css";
import { FirstPersonControls } from "@react-three/drei";
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

function Three() {
  return (
    <div className="canvasBox">
      <Canvas className="canvas">
        <directionalLight position={[0, 0, 5]} />
        <RotationBox />
        <FirstPersonControls movementSpeed={0} lookSpeed={0.2} />
        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Three;