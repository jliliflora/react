import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Loading from "../includes/Loading";
import { gsap } from "gsap";

// function Main() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <MainCont />
//         <Touch />
//       </Contents>
//       <Footer />
//     </>
//   );
//   //두줄이상시 괄호 써줘야함
// }

class Main extends React.Component {
  state = {
    isLoading: true,
  };

  mainAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", { duration: 0.8, top: 0 });
      gsap.to("#footer", { duration: 0.8, bottom: 0, delay: 0.2 });
      gsap.to(".main__inner > div", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "bounce.out",
        stagger: 0.25,
      });
    }, 10);
  };

  getMain = async () => {
    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false });
      this.mainAnimation();
    }, 1600);
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작"); //콜백함수! 재귀함수랑 비교해서 면접질문
      document.getElementById("loading").classList.remove("loading__active");
      this.getMain();
    }, 2000);
  }

  //여기가 출력부분
  render() {
    const { isLoading } = this.state;

    return (
      <>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Contents>
              <MainCont />
            </Contents>
            <Footer />
          </>
        )}
      </>
    );
  }
}

export default Main;
