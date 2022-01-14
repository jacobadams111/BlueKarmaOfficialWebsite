import React from "react";

import "../../styles/components/video.scss";

const VideoContainer = () => {
  return (
    <div className={"video-container"}>
      <iframe
        src="https://www.youtube.com/embed/LakeVG6BWZU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Is It True Cover"
      ></iframe>
      {/* <iframe
        src="https://www.youtube.com/embed/oYzqufunkgQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Fuzz - What's In My Head - Live Cover"
      ></iframe> */}
      <iframe
        src="https://www.youtube.com/embed/xhs94U3OpsQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Tame Impala - Alter Ego Multi-Instramental Cover (ft. Angie Bula)"
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/wGKiiumEmn0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Goodie Bag Cover"
      ></iframe>
      {/* <iframe
        src="https://www.youtube.com/embed/KfE5E1TlR8k"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="3"
      ></iframe> */}
      <iframe
        src="https://www.youtube.com/embed/KfE5E1TlR8k"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="King Gizzard and The Lizard Wizard - The River"
      ></iframe>
    </div>
  );
};

export default VideoContainer;
