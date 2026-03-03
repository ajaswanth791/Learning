import { useRouteError } from "react-router-dom";


const ErrorComponent = () => {
    const data = useRouteError();
    console.log("data is ", data);
    

    return (
        <div>
            <h1>Error Page</h1>
            <h1>{data.status} {data.statusText}</h1>
        </div>
    )
}
export default ErrorComponent;