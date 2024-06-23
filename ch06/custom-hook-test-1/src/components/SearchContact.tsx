import { useState } from "react";

type PropsType = {
  searchByName: (name: string) => void;
};

const SearchContact = ({ searchByName }: PropsType) => {
  const [name, setName] = useState<string>("");

  const searchClickHandler = () => {
    if (name.length >= 1) {
      searchByName(name);
      setName("");
    } else {
      alert("이름은 두글자 이상을 입력해야 합니다.");
    }
  };

  return (
    <div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={searchClickHandler}>조회</button>
    </div>
  );
};

export default SearchContact;
