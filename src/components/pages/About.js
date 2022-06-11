import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import AboutCont from "../includes/AboutCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import Loading from "../includes/Loading";
import { gsap } from "gsap";

// function About() {
//   return (
//     <>
//       <Header color="light"/>
//       <Contents>
//         <Title title={["about", "me"]} color=" light"/>
//         <AboutCont />
//         <Touch />
//       </Contents>
//       <Footer color="light"/>
//     </>
//   );
// }

class About extends React.Component {
  state = {
    isLoading: true,
  };

  aboutAnimation = () => {
    setTimeout(() => {
      gsap.to("#header", { duration: 0.8, top: 0 });
      gsap.to("#footer", { duration: 0.8, bottom: 0, delay: 0.2 });
      gsap.to(".cont__title strong", {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: 1,
        ease: "power4.out",
      });
      gsap.to(".cont__title em", {
        duration: 0.8,
        y: 0,
        opacity: 1,
        delay: 1.4,
        ease: "power4.out",
      });
      gsap.to(".about__inner", {
        duration: 0.5,
        y: 0,
        opacity: 1,
        delay: 1.8,
        ease: "power4.out",
      });
    }, 10);
  };

  getAbout = async () => {
    setTimeout(() => {
      console.log("두번째 시작");
      this.setState({ isLoading: false });
      this.aboutAnimation();
    }, 1600);
  };

  componentDidMount() {
    setTimeout(() => {
      console.log("첫번째 시작"); //콜백함수! 재귀함수랑 비교해서 면접질문
      document.getElementById("loading").classList.remove("loading__active");
      this.getAbout();
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
            <Header color="" />
            <Contents>
              <Title title={["about", "me"]} color="" />
              <AboutCont />
              <Touch />
            </Contents>
            <Footer color="" />
          </>
        )}
      </>
    );
  }
}

export default About;
