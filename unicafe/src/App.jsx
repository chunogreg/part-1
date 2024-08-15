import { useState } from "react";

const Button = ({ text }) => {
  return <button>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, bad, neutral, all, average, positive }) => {
  return (
    <>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <tr>
            <td>all</td>
            <td>{all}</td>
          </tr>
          <tr>
            <td>average</td>
            <td>{average}</td>
          </tr>
          <tr>
            <td>positive</td>
            <td>{positive} %</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(5);
  const [neutral, setNeutralCount] = useState(2);
  const [bad, setBad] = useState(1);

  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;

  const positive = (good / all) * 100;

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <div>
          <h2>Give feedback</h2>
          <Button text="good" /> <Button text="neutral" /> <Button text="bad" />
        </div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Give feedback</h2>
        <Button text="good" /> <Button text="neutral" /> <Button text="bad" />
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          all={all}
          average={average}
          positive={positive}
        />
      </div>
    );
  }
};

export default App;
