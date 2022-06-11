import React from "react";
import YoutubeItem from "./YoutubeItem";

function YoutubeCont(props) {
  //console.log(props);
  return (
    <ul>
      {props.videos.map((list, index) => (
        <YoutubeItem key={index} results={list} />
      ))}
    </ul>
  );
}

export default YoutubeCont;
