import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import PortCont from "../includes/PortCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import Loading from "../includes/Loading";
import axios from "axios";
import { gsap } from "gsap";

// function Portfolio() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["portfoilo", "book"]} color="" />
//         <PortCont />
//       </Contents>
//       <Footer />
//     </>
//   );
// }



//클래스형 컴퍼넌트, 함수선언 
//state는 변수 선언할때 쓰임
class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [] //데이터를 가지고와서 여기에 저장시킴!
  }

  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", {duration: 0.8, top: 0 });
      gsap.to("#footer", {duration: 0.8, bottom: 0, delay: 0.2 });
      gsap.to(".cont__title strong", {duration: 0.8, y:0, opacity:1, delay: 1, ease: "power4.out"});
      gsap.to(".cont__title em", {duration: 0.8, y:0, opacity:1, delay: 1.4, ease: "power4.out"});
      gsap.to(".port__inner", {duration: 0.5, y:0, opacity:1, delay: 1.8, ease: "power4.out"});
    }, 10);
  }

  getPorts = async () => {
    const {
      data: {
        data: { ports }, //내가 가지고 오고싶은 데이터만 가지고 올때, 경로지정하는 방법
      }
    } = await axios.get("https://webstoryboy.github.io/dothome1/portfolio.json");

    // console.log(ports);
    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false, ports: ports }) //전역변수, 지역변수 같은 개념은 아닌데 아무튼 변수 가지고 와서 데이터 지정시켜주는거임, this가 클래스 불러오는거임
      this.mainAnimation();
    }, 1600);

    
  } 
  //동기 비동기 방식 면접질문 : awiat, async 얘네는 비동기 방식이고, await에서 좀 기다린다음 async로 가서 실행되는 순서..인 듯?


  //생명주기 함수? 이것도 면접질문
  componentDidMount() {
    setTimeout (() => {
      console.log("첫번째 시작");//콜백함수! 재귀함수랑 비교해서 면접질문
      document.getElementById("loading").classList.remove("loading__active");
      this.getPorts();
    }, 2000)
  }


  //여기가 출력부분
  render() {
    const {isLoading, ports} = this.state;
    console.log(ports);

    return (
      <>
       {isLoading ? (
         <Loading />
       ) : (
         <>
         <Header />
         <Contents>
            <Title title={["portfoilo", "book"]} color="" />
            <PortCont ports={ports} />
            <Touch />
          </Contents>
          <Footer />
         </>
       )}
     </>
    )
  }
}

export default Portfolio;
