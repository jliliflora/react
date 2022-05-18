import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import MainCont from "../includes/MainCont";
import Touch from "../layout/Touch";

function Main() {
  return (
    <>
      <Header />
      <Contents>
        <MainCont />
        <Touch />
      </Contents>
      <Footer />
    </>
  );
  //두줄이상시 괄호 써줘야함
}

export default Main;
