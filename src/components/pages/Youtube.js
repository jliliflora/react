import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import YoutubeCont from "../includes/YoutubeCont";
import Title from "../layout/Title";

function Youtube() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["youtube", "search"]} color=""/>
        <YoutubeCont />
      </Contents>
      <Footer />
    </>
  );
}

export default Youtube;
