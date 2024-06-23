import React, { useState } from "react";

export type SongType = { id: number; title: string; musician: string; youtube_link: string };
export type MemberType = { name: string; photo: string };

// Provider로 전달한 데이터(value)의 타입 정의
export type BandContextValueType = {
  songs: SongType[],
  members : MemberType[]
};

// 앞에서 정의한 타입 또는 null 타입을 이용해 Context 객체 생성
const BandContext = React.createContext<BandContextValueType | null>(null);

// BandProvider 컴포넌트의 자식 컴포넌트 타입을 정의
// <BandProvider>  자식 컴포넌트  </BandProvider>
type PropsType = {
  children: JSX.Element | JSX.Element[];
};

// 상태와 상태 변경 함수를 가지는 컴포넌트.
// 상태와 상태 변경함수를 데이터 타입 형식으로 구성한 후 value 속성으로 전달함.
// <BandContext.Provider value={value}>{children}</BandContext.Provider>
export const BandProvider = (props: PropsType) => {
  const [songs] = useState<SongType[]>([
    { id: 1, title: "Fallin' for you", musician: "Colbie callet", youtube_link: "PABUl_EX_hw" },
    { id: 2, title: "Can't hurry love", musician: "The supremes", youtube_link: "EJDPhjQft04" },
    { id: 3, title: "Landslide", musician: "Dixie chicks", youtube_link: "V2N7gYom9-A" },
    { id: 4, title: "Can't let go", musician: "Linda ronstadt", youtube_link: "P-EpGKXmoe4" },
    { id: 5, title: "Doctor my eyes", musician: "Jackson Browne", youtube_link: "7JlFKS_1oZk" },
    { id: 6, title: "We gotta get you a woman", musician: "Todd Rundgren", youtube_link: "EyUjbBViAGE" },
    { id: 7, title: "Hip to my heart", musician: "Band Perry", youtube_link: "vpLCFnD9LFo" },
    { id: 8, title: "Rolling in the deep", musician: "Adele", youtube_link: "EvK8pDK6IQU" },
  ]);

  const [members] = useState<MemberType[]>([
    { name: "Maggie Adams", photo: "photos/Mag.png" },
    { name: "Sammie Purcell", photo: "photos/Sam.png" },
    { name: "Tim Purcell", photo: "photos/Tim.png" },
    { name: "Scott King", photo: "photos/King.png" },
    { name: "Johnny Pike", photo: "photos/JPike.jpg" },
    { name: "Toby Ruckert", photo: "photos/Toby.jpg" },
  ]);

  const value: BandContextValueType = {
    songs, members
  };
  return <BandContext.Provider value={value}>{props.children}</BandContext.Provider>;
};

export default BandContext;
