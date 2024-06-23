import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { produce } from "immer";

const quiz = {
  students: ["홍길동", "성춘향", "박문수", "변학도"],
  quizlist: [
    {
      question: "한국 프로야구 팀이 아닌것은?",
      options: [
        { no: 1, option: "삼성라이온스" },
        { no: 2, option: "기아타이거스" },
        { no: 3, option: "두산베어스" },
        { no: 4, option: "LA다져스" },
      ],
      answer: 4,
    },
    {
      question: "2018년 크리스마스는 무슨 요일인가?",
      options: [
        { no: 1, option: "월" },
        { no: 2, option: "화" },
        { no: 3, option: "수" },
        { no: 4, option: "목" },
      ],
      answer: 2,
    },
  ],
};

const quiz2 = produce(quiz, (draft) => {
  draft.quizlist[0].options[0].option = "LG트윈스";
});

//false,false,false,false,false,true
//true인 것은 변경된 속성으로부터 루트로 거슬러올라가는 경로상에 있지 않은 것
console.log(quiz === quiz2);
console.log(quiz.quizlist === quiz2.quizlist);
console.log(quiz.quizlist[0] === quiz2.quizlist[0]);
console.log(quiz.quizlist[0].options[0] === quiz2.quizlist[0].options[0]);
console.log(quiz.quizlist[0].options[0].option === quiz2.quizlist[0].options[0].option);
console.log(quiz.students === quiz2.students);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
