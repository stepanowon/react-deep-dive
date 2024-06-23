import { ContactType } from "../App";

type PropsType = {
  contacts: ContactType[];
};
const ContactList = ({ contacts }: PropsType) => {
  return (
    <div>
      <ul>
        {contacts.map((item) => {
          return (
            <li key={item.no}>
              {item.name} : {item.tel} : {item.address}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
