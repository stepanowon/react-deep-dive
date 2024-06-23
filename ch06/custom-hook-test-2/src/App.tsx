import SearchContact from "./components/SearchContact";
import ContactList from "./components/ContactList";
import { ReactCsspin } from "react-csspin";
import "react-csspin/dist/style.css";
import { useFetch } from "./hooks/useFetch";

export type ContactType = {
  no: number;
  name: string;
  tel: string;
  address: string;
  photo: string;
};

const App = () => {
  const { responseData, isLoading, error, requestFetchData } = useFetch<ContactType[]>({ timeout: 10000 });
  const searchByName = (name: string) => {
    requestFetchData(`/contacts_long/search/${name}`);
  };

  return (
    <div>
      <SearchContact searchByName={searchByName} />
      {error ? <h4>에러 메시지 : {error.message}</h4> : ""}
      <hr />
      <ContactList contacts={responseData ? responseData : []} />
      {isLoading ? <ReactCsspin opacity={0.8} /> : ""}
    </div>
  );
};

export default App;
