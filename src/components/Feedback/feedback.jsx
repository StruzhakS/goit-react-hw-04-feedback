import { Component } from 'react';
import s from './Feedback.module.css';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from 'components/OnLeaveFeedback/FeedbackOptions';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = value => {
    return this.setState(prevstate => ({
      [value]: prevstate[value] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <div>
          <h2 className={s.title}>PLease leave feedback ;) </h2>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
          <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
      </>
    );
  }
}

export default Feedback;
