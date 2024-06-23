import { useState } from "react";
import SearchContact from "./components/SearchContact";
import ContactList from "./components/ContactList";
import axios, { AxiosResponse } from "axios";
import { ReactCsspin } from "react-csspin";
import "react-csspin/dist/style.css";

export type ContactType = {
  no: number;
  name: string;
  tel: string;
  address: string;
  photo: string;
};

const App = () => {
  const [contacts, setContacts] = useState<ContactType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();

  const searchByName = async (name: string) => {
    try {
      setIsLoading(true);
      const response = await axios.get<ContactType[]>(`/contacts_long/search/${name}`);
      setContacts(response.data);
      setIsLoading(false);
      setError(undefined);	  
    } catch (e) {
      setIsLoading(false);
      setError(e as unknown as Error);
    }
  };

  return (
    <div>
      <SearchContact searchByName={searchByName} />
	  {error ? <h4>에러메시지 : {error.message}</h4> : ""}
      <hr />
      <ContactList contacts={contacts} />
      {isLoading ? <ReactCsspin opacity={0.8} /> : ""}
    </div>
  );
};

export default App;
