import { useState } from 'react';

const Statistics = ({good, neutral, bad}) => {
    const TOTAL    = good + neutral + bad;
    const AVERAGE  = (TOTAL == 0) ? 0 : (good - bad) / TOTAL;
    const POSITIVE = (TOTAL == 0) ? 0 : (good / TOTAL) * 100;

    return (
        <div>
            <h1> statistics </h1>

            <p> good {good} </p>
            <p> neutral {neutral} </p>
            <p> bad {bad} </p>
            <p> all {TOTAL} </p>
            <p> average {AVERAGE} </p>
            <p> positive {POSITIVE}% </p>
        </div>
    );
};
 
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    return (
        <div>
            <div>
                <h1>give feedback</h1>
                <button onClick={() => setGood(good + 1)}> good </button>
                <button onClick={() => setNeutral(neutral + 1)}> neutral </button>
                <button onClick={() => setBad(bad + 1)}> bad </button>
            </div>

            <Statistics
                good={good}
                bad={bad}
                neutral={neutral}
            />
        </div>
    );
};

export default App;
