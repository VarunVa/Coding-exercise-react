import React from 'react';
import MediaQuery from 'react-responsive';

function AnswerOption(props) {

  return (
    <MediaQuery minDeviceWidth={1200} >
    <div id="donate">
    <li>
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <label className="blue" htmlFor={props.answerType}>
        <center>{props.answerContent}</center>
      </label>
    </li>
    </div>
    </MediaQuery>
  );
}

AnswerOption.propTypes = {
  answerType: React.PropTypes.string.isRequired,
  answerContent: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired,
  onAnswerSelected: React.PropTypes.func.isRequired
};

export default AnswerOption;
