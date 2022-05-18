import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import ReferCont from "../includes/ReferCont";
import Title from "../layout/Title";

function Reference() {
  return (
    <>
      <Header />
      <Contents>
        <Title title={["reference", "book"]} color="" />
        <ReferCont />
      </Contents>
      <Footer />
    </>
  );
}

export default Reference;
