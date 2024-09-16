import Exe from "./pages/Exe";
import Setting from "./pages/Setting";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Map from "./pages/Map";

import SettingData from "./setting";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

// デバイスを判定する関数
function getDeviceInfo() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf('iPhone') > 0 || userAgent.indexOf('Android') > 0 && userAgent.indexOf('Mobile') > 0) {
    return "smartphone";
  } else if (userAgent.indexOf('iPad') > 0 || userAgent.indexOf('Android') > 0) {
    return "tablet";
  } else {
    return "pc";
  }
}

function App() {
  const [setting, setSetting] = useState(new SettingData());
  useEffect(() => {
    // デバイス情報を取得
    const device = getDeviceInfo();

    // デバイス情報からテンプレートで初期化し、保存
    setSetting(setting.init(device));
  }, []);
  // setSettingを渡すために関数宣言
  function saveData(data: SettingData) {
    setSetting(data);
  }
  const data = setting.get();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exe" element={<Exe saveData={saveData} data={data} />} />
          <Route path="/map" element={<Map />} />
          <Route path="/setting" element={<Setting saveData={saveData} data={data} />} />
          <Route path="/login" element={<Login saveData={saveData} data={data} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;