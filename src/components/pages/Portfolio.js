import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import PortCont from "../includes/PortCont";
import Title from "../layout/Title";

function Portfolio() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["portfoilo", "book"]} color="" />
        <PortCont />
      </Contents>
      <Footer />
    </>
  );
}

export default Portfolio;
