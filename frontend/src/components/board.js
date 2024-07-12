import React, { useEffect, useState } from 'react';
import { Leaderboard } from './database';
import Profiles from './profiles';

export default function Board() {

    const [period, setPeriod] = useState(0);
    useEffect(() => {
        const today_date = new Date();
        const date=today_date.getDate();
        setPeriod(date);
    }, []);

  return (
    <div className="board">
        <h1 className='leaderboard'>Leaderboard</h1>
        <Profiles Leaderboard={between(Leaderboard,period)}></Profiles>

    </div>
  )
}

function between(data, between){
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - (between));

    let filter = data.filter(val =>{
        let userDate = new Date(val.dt);
        return previous<= userDate && today >= userDate;
    })
    
    //sort with ascending order
    return filter.sort((a,b) =>{
        if(a.score===b.score){
            return b.score - a.score;
        }else{
            return b.score - a.score;
        }
    })
}
