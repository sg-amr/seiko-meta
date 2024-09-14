import { Canvas, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";
import "./Three.css";
import { FirstPersonControls } from "@react-three/drei";

const RotationBox = () => {
  const mesh = useRef<Mesh>(null!);
  const { camera } = useThree();

  camera.position.set(0, 0, 10);
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
        <FirstPersonControls  movementSpeed={3} lookSpeed={0.2} />
        
      </Canvas>
    </div>
  );
}

export default Three;