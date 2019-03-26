import React from 'react';
import NavBar from "../../../../group-project/Group_project_repo/client/src/NavBar"
import CoinInfo from "../../../../group-project/Group_project_repo/client/src/CoinInfo"
import UserProfile from "../../../../group-project/Group_project_repo/client/src/UserProfile"
import "./App.css"

const App = () => {
  return (
    <div className="AppDiv">
        <NavBar/>
        <UserProfile/>
        <CoinInfo/>
    </div>
  );
};

export default App;