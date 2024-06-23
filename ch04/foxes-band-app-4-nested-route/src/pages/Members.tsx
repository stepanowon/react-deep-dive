import { useContext } from "react";
import BandContext from "../BandProvider";

const Members = () => {
  const value = useContext(BandContext);

  const imgstyle = { width: 90, height: 80 };
  const list = value && value.members.map((member) => {
    return (
      <div className="col-6 col-md-4 col-lg-3" key={member.name}>
        <img src={member.photo} className="img-thumbnail" alt={member.name} style={imgstyle} />
        <br />
        <h6>{member.name}</h6>
        <br />
        <br />
      </div>
    );
  });
  
  return (
    <div>
      <h2 className="m-4">Members</h2>
      <div className="container">
        <div className="row">{list}</div>
      </div>
    </div>
  );
};

export default Members;
