import { useState } from 'react';

const Button = ({ onClick, text }) => ( <button onClick={onClick}> {text} </button> );
const StatisticLine = ({text, value}) => ( <tr><td>{text}</td><td>{value}</td></tr> );

const Statistics = ({good, neutral, bad}) => {
    const TOTAL    = good + neutral + bad;
    const AVERAGE  = (TOTAL == 0) ? 0 : (good - bad) / TOTAL;
    const POSITIVE = (TOTAL == 0) ? 0 : (good / TOTAL) * 100;

    if (TOTAL == 0) {
        return (
            <div>
                <h1> Statistics </h1>
                <p> No feedback given </p>
            </div>
        );
    } 

    else {
        return (
            <div>
                <h1> Statistics </h1>
                <table>
                <tbody>
                    <StatisticLine text={'good'} value={good} />
                    <StatisticLine text={'neutral'} value={neutral} />
                    <StatisticLine text={'bad'} value={bad} />
                    <StatisticLine text={'all'} value={TOTAL} />
                    <StatisticLine text={'average'} value={AVERAGE} />
                    <StatisticLine text={'positive'} value={POSITIVE} />
                </tbody>
                </table>
            </div>
        );
    }
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
                <Button onClick={() => setGood(good +1)} text='good' />
                <Button onClick={() => setNeutral(neutral +1)} text='neutral' />
                <Button onClick={() => setBad(bad +1)} text='bad' />
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
