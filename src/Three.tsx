// 描画するコンポーネント

import { Canvas } from "@react-three/fiber";
import "./css/Three.css";
import { PointerLockControls, Sky, useGLTF } from "@react-three/drei";
import player from "./player";


function Models() {
  const {scene} = useGLTF("testData.glb");
  player();
  return (
    <mesh>
      <primitive object={scene} />
    </mesh>
  )
}

function Three() {
  return (
    <div className="canvasBox">
      <Canvas className="canvas">
        <ambientLight intensity={1} />
        <PointerLockControls />
        <Models />
        <Sky sunPosition={[100, 20, 100]} />
      </Canvas>
    </div>
  );
}

export default Three;