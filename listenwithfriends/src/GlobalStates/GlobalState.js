import React, { useState } from "react";
import GlobalStateContext from "../GlobalStates/GlobalStateContext";
import youtubeApi from '../Api/youtube'
const GlobalState = (props) => {
  const [videosMetaInfo, setVideosMetaInfo] = useState([])
  const [selectedVideoId, setSelectedVideoId] = useState('')
  const [title, setTitle] = useState('')

  const onSearch = async keyword => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword
      }
    }).then((res) => {
      setVideosMetaInfo(res.data.items)
      setSelectedVideoId(res.data.items[0].id.videoId)
    })
    .catch((err) => {
      console.log(err.message)
     })
  };


  const states = {title, videosMetaInfo,selectedVideoId };
  const setters = { setVideosMetaInfo, setSelectedVideoId,setTitle};
  const requests = { onSearch };
  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
