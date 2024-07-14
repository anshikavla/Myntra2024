// board.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaderboard } from './database';
import Profiles from './profiles';

export default function Board() {
    const [period, setPeriod] = useState(0);
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/results');
    };

    useEffect(() => {
        const today_date = new Date();
        const date = today_date.getDate();
        setPeriod(date);
    }, []);

    return (
        <div className="board">
            <h1 className='leaderboard'>Leaderboard</h1>
            <Profiles Leaderboard={between(Leaderboard, period)}></Profiles>
            <button onClick={handleClick}>Click to view Results</button>
        </div>
    );
}

function between(data, between) {
    const today = new Date();
    const previous = new Date(today);
    previous.setDate(previous.getDate() - between);

    let filter = data.filter(val => {
        let userDate = new Date(val.dt);
        return previous <= userDate && today >= userDate;
    });

    return filter.sort((a, b) => b.score - a.score);
}