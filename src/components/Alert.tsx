import "./css/Alert.css"

function Alert({ alert, title, content }: { alert: boolean, title: string | null, content: string | null }) {
    if (alert) {
        const alertEle = document.getElementById("alert");
        if (alertEle != null) {
            alertEle.classList.add("container-active");
        }
    } else {
        const alertEle = document.getElementById("alert");
        if (alertEle != null) {
            alertEle.classList.remove("container-active");
        }
    }
    return (
        <div className="container" id="alert">
            <div className="alert">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Alert;