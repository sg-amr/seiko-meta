import { useState } from "react";
import SettingData from "../setting";

import { Link } from "react-router-dom";
import "./css/Menu.css"

function Menu({ data, saveData }: { data: SettingData, saveData: (e: SettingData) => void }) {

    const [isOpen, setIsOpen] = useState(false);

    window.addEventListener("keydown", (e) => {
        if (e.code == "KeyM") {
            clicked();
            document.exitPointerLock();
        }
    })
    function clicked() {
        const menuEle = document.getElementById("container");
        const btnEle = document.getElementById("btn");
        if (menuEle != null && btnEle != null) {
            setIsOpen(!isOpen);
            if (isOpen) {
                const newData = data.get();
                newData.mode.menu = "open";
                saveData(newData);
                menuEle.classList.remove("menu-container-nonactive");
                menuEle.classList.add("menu-container-active");
            } else {
                const newData = data.get();
                newData.mode.menu = "close";
                saveData(newData);
                menuEle.classList.remove("menu-container-active");
                menuEle.classList.add("menu-container-nonactive");
            }
        }
    }
    return (
        <>
            <div className="menu-container" id="container">
                
                <div className="navigation">
                    <Link to="/">Home</Link><br />
                    <Link to="/setting">Setting</Link>
                </div>
            </div>
            <div onClick={clicked} className="btn-container">
                <div className="btn" id="btn">Menu</div>
            </div>
        </>
    )
}

export default Menu;