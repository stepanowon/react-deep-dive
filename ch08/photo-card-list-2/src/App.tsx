import { useCallback, useEffect, useState } from "react";
import ContactList from "./ContactList";
import { produce } from "immer";

export type ContactType = { no: number; name: string; tel: string; address: string; photo: string };

const App = () => {
  const [tel, setTel] = useState<string>("");
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
        photo: i===1 ? `photow/noimage.jpg` : `photow/${photoId}.jpg`,
      });
    }
    setContacts(contactsTemp);
  }, []);

  const updateFirstTel = () => {
    const updatedContacts = produce((draft)=> {
      draft[0].tel = tel;
    })
    setContacts(updatedContacts)
    setTel("");
  }

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  return (
    <div className="container text-center">
      <div className="row justify-content-md-center">
        <div className="col-12">
          <div className="input-group mb-3">
            <input type="text" className="form-control w-75" placeholder="첫번째 전화번호" 
              aria-label="Phone" aria-describedby="addPhone" value={tel} onChange={(e)=>setTel(e.target.value)}/>
            <button className="btn btn-secondary w-25" type="button" id="addPhone" onClick={updateFirstTel}>변경</button>
          </div>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <ContactList contacts={contacts} />
        </div>
      </div>
    </div>
  );
};

export default App;
