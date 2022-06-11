import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MovieCont from "../includes/MovieCont";
import Title from "../layout/Title";
import MovieSearch from "../includes/MovieSearch";
import Loading from "../includes/Loading";
import { gsap } from "gsap";

function Movie() {
  const [videos, setVideos] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const search = (query) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=a995ddaefd02120cffba2ce5d93b8eac&query=${query}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.results))
      .catch((error) => console.log("error", error));
  };

  //useEffect가 머지?
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=a995ddaefd02120cffba2ce5d93b8eac&query=spiderman",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.results))
      .catch((error) => console.log("error", error));

    const movieAnimation = () => {
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
        gsap.to(".movie__inner", {
          duration: 0.5,
          y: 0,
          opacity: 1,
          delay: 1.8,
          ease: "power4.out",
        });
      }, 10);
    };

    const getMovie = async () => {
      setTimeout(() => {
        console.log("두번째 시작");
        setisLoading(false);
        movieAnimation();
      }, 1600);
    };

    setTimeout(() => {
      console.log("첫번째 시작"); //콜백함수! 재귀함수랑 비교해서 면접질문
      document.getElementById("loading").classList.remove("loading__active");
      getMovie();
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
            <Title title={["Movie", "search"]} color="" />
            <section className="movie__cont">
              <div className="container">
                <div className="movie__inner">
                  <MovieSearch onSearch={search} />
                  <MovieCont videos={videos} />
                  {/* 여기 비디오부분이 props 데이터로 넣어주는 부분 */}
                </div>
              </div>
            </section>
          </Contents>
          <Footer />
        </>
      )}
    </>
  );
}

export default Movie;
