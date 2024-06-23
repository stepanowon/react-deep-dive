import React from "react";
import { ContactType } from "./App";

type PropsType = {
  contacts: ContactType[];
};

const ContactList = React.memo(({ contacts }: PropsType) => {
  const ContactItemList = contacts.map((item) => (
    <div key={item.no} className="col-12 col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 d-flex justify-content-center" >
      <div className="card mb-2" style={{ width:"200px" }}> 
        <img src={item.photo} className="card-img-top" alt={item.name} width="200" height="200" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.tel}</p>
          <p className="card-text">{item.address}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="m-5">하나의 컴포넌트 + memo</h3>
        </div>
      </div>

      <div className="row justify-content-evenly text-center">{ContactItemList}</div>
    </div>
  );
});

export default ContactList;
