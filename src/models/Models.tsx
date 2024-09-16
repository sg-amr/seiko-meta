import { useGLTF } from "@react-three/drei";
import player from "../player";

import SettingData from "../setting";
import School from "./school/School";
import Outdide from "./Outside/Outside";

function Models({data}: {data: SettingData}) {
    const { scene } = useGLTF("testData.glb");
    player();
    return (
        <mesh>
            {/* デバッグ用仮モデル */}
            <primitive object={scene} />

            <School data={data} />
            <Outdide data={data} />
        </mesh>
    )
}

export default Models;