import React from "react";
import "../../styles/components/lockedOutVideo.scss";

const LockedOutVideo = () => {
  return (
    <div className={"lockedOut-container"}>
      <iframe
        src="https://www.youtube.com/embed/qFUg-Q4vr3M"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Is It True Cover"
      ></iframe>
    </div>
  );
};

export default LockedOutVideo;
