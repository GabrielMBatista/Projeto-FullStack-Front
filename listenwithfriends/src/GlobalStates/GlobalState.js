import React, { useState } from "react";
import GlobalStateContext from "../GlobalStates/GlobalStateContext";

const GlobalState = (props) => {
  const [info, setInfo] = useState([])
  const [value, setValue] = useState('fullName')
  const [holderValue, setHolderValue] = useState('Nome e Sobrenome')
  const [showName, setShowName] = useState()

  const saveInfo = (newItem) => {
    info.push(newItem);
    console.log(`info`, info)
  };







  const states = { holderValue, showName, info, value };
  const setters = { setShowName, setInfo, setValue, setHolderValue };
  const requests = {saveInfo };
  const data = { states, setters, requests };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
