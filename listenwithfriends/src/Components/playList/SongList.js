import React, { useContext } from "react";
import GlobalStateContext from "../../GlobalStates/GlobalStateContext";
import { SongListBox } from "../Styled/Styled";


const VideoList = () => {
  const { states, requests, setters } = useContext(GlobalStateContext);

  function getCss(imageurl) {
    const _styles = {
      backgroundImage: `url(${imageurl})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
      height: "180px",
      position: "relative"
    };
    return _styles;
  }
  function constructVideoTitles() {
    return states.videosMetaInfo.map(({ snippet, id }, index) => {
      return (
        <div
          className="video"
          key={index}
        >
          <div style={getCss(snippet.thumbnails.high.url)} key={index} />
          <p className="title">{snippet.title}</p>
          <button
            onClick={() => setters.setSelectedVideoId(id.videoId)}
          >Adicionar</button>
        </div>
      );
    });
  }
  return (
    <SongListBox className="video-list">
      <div style={{ padding: "20px 0" }}>
        <h3
          style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold" }}
        >
          Videos List
        </h3>
        {constructVideoTitles()}
      </div>
    </SongListBox>
  );
};

export default VideoList;