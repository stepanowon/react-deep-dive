import { ContactType } from "./App";

type PropsType = {
  item: ContactType;
  style: object;
  index: number;
};

const ContactItem = ({ item, style, index }: PropsType) => {
  return (
    <div style={style} className="row">
      <div className="col-3">{index}</div>
      <div className="col-3">{item.name}</div>
      <div className="col-3">{item.tel}</div>
      <div className="col-3">{item.address}</div>
    </div>
  );
};

export default ContactItem;
