import Notification from 'components/Notification/Notification';
import s from '../Feedback/Feedback.module.css';
import Stats from 'components/Stats/Stats';
const Statistics = ({ good, neutral, bad }) => {
  const positiveFedback = Math.round((good / (good + neutral + bad)) * 100);
  return (
    <div className={s.statistic}>
      <h3>Statistics</h3>
      {good + neutral + bad === 0 ? (
        <Notification message="There is no feedback :(" />
      ) : (
        <Stats
          good={good}
          neutral={neutral}
          bad={bad}
          positiveFedback={positiveFedback}
        />
      )}
    </div>
  );
};

export default Statistics;
