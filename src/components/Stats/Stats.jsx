import s from '../Feedback/Feedback.module.css';
const Stats = ({ good, neutral, bad, positiveFedback }) => {
  return (
    <>
      <div className={s.statistic}>
        <div className={s.span}>
          <span>Good: </span> <span>{good}</span>
        </div>
        <div className={s.span}>
          <span>Neutral: </span> <span>{neutral}</span>
        </div>
        <div className={s.span}>
          <span>Bad: </span> <span>{bad}</span>
        </div>
        <div className={s.total}>
          <span>Total: </span> <span>{good + neutral + bad}</span>
        </div>
        <div className={s.positiveFeed}>
          <span>Positive feedback: </span>
          <span>{positiveFedback || 0}%</span>
        </div>
      </div>
    </>
  );
};
export default Stats;
