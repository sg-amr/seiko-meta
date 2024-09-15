// 設定画面のコンポーネント
import SettingData from "../setting";

import { Link } from "react-router-dom";

function Setting({saveData, data}: {saveData: (e: SettingData) => void, data: SettingData}) {
    function save() {
        saveData(new SettingData());
    }
    saveData(data);
    return (
        <>
            <h1>Setting</h1>      
            
            <Link to="/" onClick={save}>設定を保存して終了</Link>
        </>
    )
}

export default Setting;