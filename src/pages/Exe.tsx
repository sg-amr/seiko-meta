import Three from "../Three"
import SettingData from "../setting";

import Log from "../components/Log";

import { useState } from "react";

import "../css/Exe.css";

function Exe({ saveData, data }: { saveData: (e: SettingData) => void, data: SettingData }) {
    return (
        <>
            <Three data={data} />
            <Log data={data} />
        </>
    )
}

export default Exe;