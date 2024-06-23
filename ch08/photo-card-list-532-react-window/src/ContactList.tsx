import { ContactType } from "./App";
import { FixedSizeList } from "react-window";
import ContactItem from "./ContactItem";

type PropsType = {
  contacts: ContactType[];
};

const ContactList = ({ contacts }: PropsType) => {
  return (
    <FixedSizeList className="row justify-content-evenly text-center" width={800} height={300} itemSize={40} itemCount={contacts.length}>
      {({ index, style }) => <ContactItem style={style} index={index} item={contacts[index]} />}
    </FixedSizeList>
  );
};

export default ContactList;
