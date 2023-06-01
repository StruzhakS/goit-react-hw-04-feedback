import s from '../Feedback/Feedback.module.css';
const Notification = props => {
  return <p className={s.notification}>{props.message}</p>;
};

export default Notification;
