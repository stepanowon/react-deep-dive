import React from "react";
import { ContactType } from "./App";
import ContactItem from "./ContactItem";

type PropsType = {
  contacts: ContactType[];
};

const ContactList = React.memo(({ contacts }: PropsType) => {
  const ContactItemList = contacts.map((item) => (
    <ContactItem key={item.no} item={item}/>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="m-5">컴포넌트 분할 + memo</h3>
        </div>
      </div>
      <div className="row justify-content-evenly text-center">{ContactItemList}</div>
    </div>
  );
});

export default ContactList;
