import SettingData from "../../setting";
import Exterior from "./exterior/Exterior";

function School({data}: {data: SettingData}) {
    return (
        <>
            <Exterior data={data}/>
        </>
    )
}

export default School;