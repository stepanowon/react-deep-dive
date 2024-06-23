import { useCallback, useEffect, useState } from "react";
import ContactList from "./ContactList";

export type ContactType = { no: number; name: string; tel: string; address: string; photo: string };

const App = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);

  const fetchContacts = useCallback(async () => {
    //로컬에서 임시로 생성
    const contactsTemp: ContactType[] = [];
    let no = new Date().getTime();
    let photoId;
    for (let i = 1; i <= 1000; i++) {
      photoId = Math.ceil(Math.random() * 100);
      contactsTemp.push({
        no: no++,
        name: "Sean Kim " + i,
        tel: "010-1234-567" + (i % 10),
        address: "Seoul",
        photo: i === 1 ? `photow/noimage.jpg` : `photow/${photoId}.jpg`,
      });
    }
    setContacts(contactsTemp);
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className="container text-center">
      <div className="row justify-content-md-center">
        <div className="col-12">
          <h3>react-window 예제</h3>
        </div>
      </div>
      <hr />
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
