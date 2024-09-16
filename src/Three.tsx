// 描画するコンポーネント

import { Canvas } from "@react-three/fiber";
import "./css/Three.css";
import { OrbitControls, PointerLockControls, Sky } from "@react-three/drei";
import Models from "./models/Models";

import SettingData from "./setting";

function Three({ data }: { data: SettingData }) {
  return (
    <div className="canvasBox">
      <Canvas className="canvas">
        <ambientLight intensity={1} />
        {data.mode.positioin == "first-person" ? <PointerLockControls /> : <OrbitControls />}
        <Models data={data} />
        <Sky sunPosition={[100, 20, 100]} />
      </Canvas>
    </div>
  );
}

export default Three;