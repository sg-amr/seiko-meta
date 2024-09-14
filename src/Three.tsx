import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, Vector3 } from "three";
import "./Three.css";



const RotationBox = () => {
  const mesh = useRef<Mesh>(null!);
  
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y = mesh.current.rotation.y += 0.01;
    mesh.current.rotation.z = mesh.current.rotation.z += 0.01;
  });
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
      </Canvas>
    </div>
  );
}

export default Three;