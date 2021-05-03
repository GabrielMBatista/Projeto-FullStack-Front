import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from '../Components/navBar/NavBar'
import Home from '../Components/home/Home';
import SongList from '../Components/playList/SongList';
import RegisterPage from '../Components/register/RegisterPage';
import { Body } from '../Components/Styled/Styled';
import ControlBar from '../Components/controlBar/ControlBar';


function router() {
  return (
    <Body>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/playlist">
            <SongList />
          </Route>
          <Route exact path='/register'>
            <RegisterPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <ControlBar />
    </Body>
  );
}
export default router;