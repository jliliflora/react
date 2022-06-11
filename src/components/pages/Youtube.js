import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import YoutubeCont from "../includes/YoutubeCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";
import YoutubeSearch from "../includes/YoutubeSearch";
import Loading from "../includes/Loading";
import { gsap } from "gsap";

//리액트 훅 : 클래스의 장점을 모아서 만든것이 함수형 컴퍼넌트, 라이프사이클 쓰려고 만든거
function Youtube() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&key=AIzaSyCpLc1NKMrXtTb94DFd69DBagBByHQADlI&type=video`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=bts&key=AIzaSyCpLc1NKMrXtTb94DFd69DBagBByHQADlI&type=video",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));

    const youtubeAnimation = () => {
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
        gsap.to(".youtube__search", {
          duration: 0.5,
          y: 0,
          opacity: 1,
          delay: 1.8,
          ease: "power4.out",
        });
        gsap.to(".youtube__list", {
          duration: 0.5,
          y: 0,
          opacity: 1,
          delay: 1.8,
          ease: "power4.out",
        });
      }, 10);
    };

    const getYoutube = async () => {
      setTimeout(() => {
        console.log("두번째 시작");
        setisLoading(false);
        youtubeAnimation();
      }, 1600);
    };

    setTimeout(() => {
      console.log("첫번째 시작"); //콜백함수! 재귀함수랑 비교해서 면접질문
      document.getElementById("loading").classList.remove("loading__active");
      getYoutube();
    }, 2000);
  }, []);
  console.log(videos);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Contents>
            <Title title={["youtube", "reference"]} color="" />
            <section className="youtube__cont">
              <div className="container">
                <div className="youtube__list">
                  <YoutubeSearch onSearch={search} />
                  <YoutubeCont videos={videos} />
                </div>
              </div>
            </section>
            <Touch />
          </Contents>
          <Footer />
        </>
      )}
    </>
  );
}

export default Youtube;
