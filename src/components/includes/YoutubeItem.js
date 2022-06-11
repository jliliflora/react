import React from "react";

function YoutubeItem(props) {
  return (
    <li>
      <a
        href={`https://www.youtube.com/watch?v=${props.results.id.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={props.results.snippet.thumbnails.medium.url}
          alt="{props.results.snippet.title}"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "img/default_img.jpg";
          }}
        />
      </a>
      <p>{props.results.snippet.title}</p>
    </li>
  );
}

export default YoutubeItem;
