import { useState } from "react";
import { useEffect } from "react";

import "./css/Log.css"

function Log({ data }: { data: any }) {

    
    const [onDebug, setOnDebug] = useState(false);
    useEffect(() => {
        const logEle = document.getElementById("log");
        if (logEle != null) {
            window.addEventListener("keydown", (e) => {
                if (e.code == "KeyP") {
                    setOnDebug(!onDebug);
                    if (onDebug) {
                        logEle.style.display = "block";
                    } else {
                        logEle.style.display = "none";
                    }
                }
                logEle.innerHTML = `<br />
                mode: ${data.auth.type}<br />
                acccout: ${String(data.user.mail)}<br />
                version: ${data.world.version}<br />
                viewport: ${data.operate.viewport}<br />
                movement: ${data.operate.movement}<br />
                viewportSensi: ${data.operate.viewportSensi}<br />
                movementSensi: ${data.operate.movementSensi}<br />
                shiftDash: ${String(data.operate.shiftDash)}<br />
                positioin: ${data.mode.positioin}<br />
                version: ${data.mode.version}<br />
                mode: ${data.mode.menu}<br />
                accountExit: ${String(data.user.accountExit)}<br />`
            })
        }
    });
    return (
        <div id="log"></div>
    )
}

export default Log;