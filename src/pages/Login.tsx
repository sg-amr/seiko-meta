import SettingData from "../setting";

function Login({ saveData, data }: { saveData: (e: SettingData) => void, data: SettingData }) {
    const newData = data.get();
    saveData(newData);
    return (
        <>
            <h1>{JSON.stringify(newData)}</h1>
            <p>fhf</p>
        </>
    )
}

export default Login;