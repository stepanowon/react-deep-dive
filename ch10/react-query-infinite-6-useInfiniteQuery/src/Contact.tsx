import { ContactType } from "./apis/ContactsAPI";

type PropsType = {
  contactItem: ContactType;
};

const Contact = (props: PropsType) => {
  const c = props.contactItem;
  return (
    <li>
      {c.name}, {c.tel}, {c.address}
    </li>
  );
};

export default Contact;
