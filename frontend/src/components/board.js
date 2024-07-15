// board.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Leaderboard } from './database';
import Profiles from './profiles';
import './style.css'; // Ensure you import the CSS file

export default function Board() {
    const [period, setPeriod] = useState(0);
    const navigate = useNavigate();

    const handleResultsClick = () => {
        navigate('/results');
    };

    const handleQuizClick = () => {
        navigate('/quiz');
    };

    const handleContestClick = () => {
        navigate('/contest');
    };

    useEffect(() => {
        const today_date = new Date();
        const date = today_date.getDate();
        setPeriod(date);
    }, []);

    return (
        <div className="board">
            <h1 className='leaderboard'>Leaderboard</h1>
            <Profiles Leaderboard={between(Leaderboard, period)} />
            <div className="button-container">
                <button className="button" onClick={handleResultsClick}>Click to view Results</button>
                <div className="sub-buttons">
                    <button className="button" onClick={handleQuizClick}>Quiz</button>
                    <button className="button" onClick={handleContestClick}>Contest</button>
                </div>
            </div>
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
