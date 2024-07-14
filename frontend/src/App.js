// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Board from './components/board';
import { Leaderboard } from './components/database';
import Profiles from './components/profiles';
import './components/style.css';

function App() {
  return (
    <Router>
      <div className="App" id="main">
        <Routes>
          <Route path="/" element={<Board />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </div>
    </Router>
  );
}

// Blank Results component
function Results() {
  const today_date = new Date();
  const date = today_date.getDate();
  if(date===14){
      return(
        <div>
          <h1 id='main'>Results!</h1>
          <br></br>
          <h1 id='main'>The Winner and Runner Up are...</h1>
          <Profiles Leaderboard={winner(Leaderboard,date)}></Profiles>
        </div>
      );
  }
  else{
      return (
        <div>
          <h2>Come Back Later!</h2>
        </div>
      );
  }
}

function winner(data,date){
  const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - date);

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        return previous <= userDate && today >= userDate;
    });

    let sortedarray=filter.sort((a, b) => b.score - a.score);
    let resultarray=[sortedarray[0],sortedarray[1]];
    
    return(
      resultarray
    );
}

export default App;