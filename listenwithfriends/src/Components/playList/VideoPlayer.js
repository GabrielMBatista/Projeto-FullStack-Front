import React from "react";
import { Frame, PlayerBox } from "../Styled/Styled";

const Videoplayer = ({ videoId }) => {
    return (
    <PlayerBox className="video-player">
      <Frame
        title={videoId}
        className="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
      />
    </PlayerBox>
  );
};

export default Videoplayer;
