import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, ContactItemType, ContactStateType, searchContactsAsync } from "./redux/ContactAction";

type PropsType = {
  contacts: ContactItemType[];
  isLoading: boolean;
  status: string;
  searchContacts: (name: string) => void;
};

const App = ({ contacts, isLoading, status, searchContacts }: PropsType) => {
  const [name, setName] = useState("");
  const search = () => {
    searchContacts(name);
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={search}>조회</button>
      <br />
      {isLoading ? (
        <h3>{status}</h3>
      ) : (
        <ul>
          {contacts.map((item) => {
            return (
              <li key={item.no}>
                {item.name} : {item.tel} : {item.address}{" "}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

const AppContainer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const propsObject = {
    isLoading: useSelector((state: ContactStateType) => state.isLoading),
    status: useSelector((state: ContactStateType) => state.status),
    contacts: useSelector((state: ContactStateType) => state.contacts),
    searchContacts: (name: string) => dispatch(searchContactsAsync({ name })),
  };
  return <App {...propsObject} />;
};

export default AppContainer;
