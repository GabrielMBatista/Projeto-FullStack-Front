import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from '../Components/navBar/NavBar'
import Home from '../Components/home/Home';
import SongList from '../Components/playList/SongList';
import RegisterPage from '../Components/register/RegisterPage';


function router() {
  return (
    <BrowserRouter>
      <NavBar />
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
  );
}
export default router;