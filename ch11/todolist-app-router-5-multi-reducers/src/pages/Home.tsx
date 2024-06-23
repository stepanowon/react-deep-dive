import { RootStatesType } from "../redux/AppStore";
import TimeActionCreator from "../redux/TimeActionCreator";
import MyTime from "./MyTime";
import { useDispatch, useSelector } from "react-redux";

type PropsType = {
  currentTime: Date;
  changeTime: ({ currentTime }: { currentTime: Date }) => void;
};

const Home = ({ currentTime, changeTime }: PropsType) => {
  return (
    <div className="card card-body">
      <h2>Home</h2>
      <MyTime currentTime={currentTime} changeTime={changeTime} />
    </div>
  );
};

const HomeContainer = () => {
  const dispatch = useDispatch();
  const currentTime = useSelector((state: RootStatesType) => state.home.currentTime);
  const changeTime = (args: { currentTime: Date }) => dispatch(TimeActionCreator.changeTime(args));
  return <Home currentTime={currentTime} changeTime={changeTime} />;
};

export default HomeContainer;
