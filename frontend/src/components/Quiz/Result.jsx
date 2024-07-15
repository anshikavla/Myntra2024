// src/components/Quiz/Result.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const { score, total } = location.state;

  return (
    <div className="container">
      <h1>Quiz Result</h1>
      <hr />
      <h2>You scored {score} out of {total} questions</h2>
      <h3>You earned 5 Supercoins</h3>
    </div>
  );
};

export default Result;

