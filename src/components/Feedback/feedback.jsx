import { useState } from 'react';
import s from './Feedback.module.css';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/OnLeaveFeedback/FeedbackOptions';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const onLeaveFeedback = value => {
    if (value === 'good') {
      return setGood(good + 1);
    }
    if (value === 'neutral') {
      return setNeutral(neutral + 1);
    }
    if (value === 'bad') {
      return setBad(bad + 1);
    }
  };

  return (
    <>
      <div>
        <h2 className={s.title}>PLease leave feedback ;) </h2>
        <FeedbackOptions onLeaveFeedback={onLeaveFeedback} />
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
}

export default Feedback;
