// 設定画面のコンポーネント
import SettingData from "../setting";

import { Link } from "react-router-dom";

function Setting({saveData, data}: {saveData: (e: SettingData) => void, data: SettingData}) {
    const newData = data.get();
    newData.operate.shiftDash = false;
    saveData(newData);
    return (
        <>
            <h1>Setting</h1>
            <Link to="/">Back</Link>
        </>
    )
}

export default Setting;