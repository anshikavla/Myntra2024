import React, { useEffect, useState } from 'react';
import './Contest.css';
import contest1Image from './images/contest1.jpg';
import contest2Image from './images/contest2.jpg';
import contest3Image from './images/contest3.jpg';

const contests = [
    {
        id: 1,
        name: "Outfit of the Day",
        description: "Unleash your inner fashionista with our \"Outfit of the Day\" contest! Whether you love casual chic, classic elegance, or bold statements, we want to see your best look. This is your chance to showcase your unique style and inspire others in the community.",
        endTime: new Date(Date.now() + 23 * 3600000), // 1 hour from now
        imageUrl: contest1Image // Use imported image path
    },
    {
        id: 2,
        name: "Refer and Win",
        description: "Spread the word and get rewarded with our \"Refer to Win\" contest! The more friends you refer to join Myntra, the higher your chances of winning fantastic prizes. This is your opportunity to share the love for fashion with your friends and earn 20 Supercoins.",
        endTime: new Date(Date.now() + 7200000), // 2 hours from now
        imageUrl: contest2Image // Use imported image path
    },
    {
        id: 3,
        name: "Fashion Forward Design Contest",
        description: "Calling all aspiring designers! Showcase your creativity and fashion-forward thinking in our \"Fashion Forward Design Contest.\" This is your chance to design an original outfit that captures the essence of modern style. Whether you're into bold, avant-garde designs or elegant, timeless pieces, we want to see your unique vision come to life.",
        endTime: new Date(Date.now() + 10800000), // 3 hours from now
        imageUrl: contest3Image // Use imported image path
    },
];

function ContestPage() {
    const [contestList, setContestList] = useState(contests);

    useEffect(() => {
        const interval = setInterval(() => {
            setContestList(contests.map(contest => ({
                ...contest,
                timeLeft: calculateTimeLeft(contest.endTime)
            })));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const calculateTimeLeft = (endTime) => {
        const difference = +new Date(endTime) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    return (
        <div className="contest-page">
            {contestList.map(contest => (
                <div key={contest.id} className="contest">
                    <h2>{contest.name}</h2>
                    <div className="contest-box">
                        <div className="contest-content">
                            <img src={contest.imageUrl} alt={contest.name} className="contest-image" />
                            <div className="contest-details">
                                <p>{contest.description}</p>
                                <div className="timer">
                                    {contest.timeLeft ? (
                                        <>
                                            {contest.timeLeft.hours}h {contest.timeLeft.minutes}m {contest.timeLeft.seconds}s
                                        </>
                                    ) : (
                                        <span>Contest Ended</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ContestPage;