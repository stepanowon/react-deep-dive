import { Navigate, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const from = location.state && location.state.from ? location.state.from : "";

  return from && from !== "" ? (
    <Navigate to={from} />
  ) : (
    <div className="card card-body">
      <h2>Home</h2>
    </div>
  );
};

export default Home;
