import React from "react";

//함수형 컴퍼넌트 vs 클래스형 컴퍼넌트
//==> 함수형 컴퍼넌트(클래스형 장점) ==> 리액트 훅

function MainInfo({ text }) {
  return <div>{text}</div>;
}

const mainText = [
  { text: "We Provide" },
  { text: "Visual coding" },
  { text: "Solutions" },
  { text: "for you webs" },
];

function MainCont() {
  return (
    <section className="main__cont">
      <div className="main__inner">
        {mainText.map((txt) => (
          <MainInfo text={txt.text} key={txt.text} />
        ))}
      </div>
    </section>
    //다 Content.js의 children으로 넘어감!
  );
}

export default MainCont;
