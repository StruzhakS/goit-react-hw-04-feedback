import s from '../Feedback/Feedback.module.css';
const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={s.buttonBox}>
      <button className={s.button} onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button className={s.neutral} onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </button>
      <button className={s.bad} onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
