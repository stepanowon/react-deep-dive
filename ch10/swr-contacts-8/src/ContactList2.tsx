import { type ContactItemType } from "./apis/ContactAPI";

type Props = {
  contacts: ContactItemType[] | undefined;
};

const ContactList2 = ({ contacts }: Props) => {
  return (
    <div>
      <ul>
        {contacts &&
          contacts?.map((item) => {
            return (
              <li key={item.no}>
                {item.name} : {item.tel}, {item.address}{" "}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList2;
