import Three from "../Three"
import SettingData from "../setting";

import Log from "../components/Log";

import Menu from "../components/Menu";
import Alert from "../components/Alert";

function Exe({ saveData, data }: { saveData: (e: SettingData) => void, data: SettingData }) { 
    return (
        <>
            <Three data={data} />
            <Log data={data} />
            <Alert alert={data.mode.menu == "open"} content={"taitru"} title={"content"} />
            <Menu saveData={saveData} data={data} />
        </>
    )
}

export default Exe;