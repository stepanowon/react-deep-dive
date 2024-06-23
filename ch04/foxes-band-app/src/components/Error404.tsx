import { useLocation } from "react-router-dom";

const Error404 = () => {
    const location = useLocation();
    return (
        <div className="card card-body">
            <h2>존재하지 않는 경로입니다.</h2>
            요청 경로 : { location.pathname }
        </div>
    );
};

export default Error404;
