import { type ContactListType } from "./apis/ContactAPI";

type Props = {
  data: ContactListType | undefined;
};

const ContactList1 = ({ data }: Props) => {
  return (
    <div>
      <ul>
        {data &&
          data?.contacts &&
          data?.contacts?.map((item) => {
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

export default ContactList1;
