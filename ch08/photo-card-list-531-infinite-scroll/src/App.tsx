import ContactList from "./ContactList";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll";

export type ContactType = { no: number; name: string; tel: string; address: string; photo: string };

//샘플 데이터 1000건 생성
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

const App = () => {
  //1000건의 데이터를 인자로 전달한 후 렌더링을 위한 스크롤 상태 데이터를 리턴받음
  //스크롤 데이터를 화면에 출력
  const infiniteContacts = useInfiniteScroll<ContactType>(contactsTemp, 24);

  return (
    <div className="container text-center">
      <div className="row justify-content-md-center">
        <div className="col-12">
          <h3>Infinite Scrolling</h3>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-12">
          <ContactList contacts={infiniteContacts} />
        </div>
      </div>
    </div>
  );
};

export default App;
