import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Contents from "../layout/Contents";
import AboutCont from "../includes/AboutCont";
import Title from "../layout/Title";
import Touch from "../layout/Touch";

function About() {
  return (
    <>
      <Header color="light"/>
      <Contents>
        <Title title={["about", "me"]} color=" light"/>
        <AboutCont />
        <Touch />
      </Contents>
      <Footer color="light"/>
    </>
  );
}

export default About;
