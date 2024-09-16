// 設定画面のコンポーネント
import SettingData from "../setting";

import { Link } from "react-router-dom";

function Setting({saveData, data}: {saveData: (e: SettingData) => void, data: SettingData}) {

    return (
        <>
            <h1>Setting</h1>
            <h2>視点操作</h2>
            <div onClick={() => {
                const newData = data.get();
                newData.operate.viewport = "touch";
                saveData(newData);
            }}>
                タッチ操作
            </div>
            <div onClick={() => {
                const newData = data.get();
                newData.operate.viewport = "mouse";
                saveData(newData);
            }}>
                マウス操作
            </div>
            <Link to="/">Back</Link>
        </>
    )
}

export default Setting;