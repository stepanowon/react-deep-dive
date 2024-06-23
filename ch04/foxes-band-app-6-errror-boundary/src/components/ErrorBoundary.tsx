import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Header from "./Header";
import { AxiosError } from "axios";

const ErrorBoundary = () => {
  const error = useRouteError() as Error;
  let element: JSX.Element;

  if (isRouteErrorResponse(error)) {
    element = (
      <p>
        {error.status} : {error.statusText}
      </p>
    );
  } else if (error instanceof AxiosError) {
    const axiosError = error as AxiosError;
    switch (axiosError.response && axiosError.response.status) {
      case 400:
        element = <p>백엔드 API : 잘못된 요청입니다.</p>;
        break;
      case 401:
        element = <p>백엔드 API : 접근이 불가능한 서비스입니다. 인가가 필요합니다.</p>;
        break;
      case 404:
        element = <p>백엔드 API : 존재하지 않는 백엔드 API 경로입니다.</p>;
        break;
      case 500:
        element = <p>백엔드 API : 백엔드 API 내부 오류입니다.</p>;
        break;
      default:
        element = <p>백엔드 API : 알 수 없는 오류가 발생했습니다.</p>;
    }
  } else {
    element = <p>알 수 없는 오류가 발생했습니다.</p>;
  }

  return (
    <div className="container">
      <Header />
      <div className="card card-body">
        <h2>에러 발생</h2>
        {element}
      </div>
    </div>
  );
};

export default ErrorBoundary;
