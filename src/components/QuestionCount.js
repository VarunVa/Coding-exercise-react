import React from 'react';
import MediaQuery from 'react-responsive';

function QuestionCount(props) {

  return (
    <MediaQuery minDeviceWidth={1224}>
    <div className="questionCount">
    
    

      Step <span align="center">{props.counter}</span> of <span>{props.total}</span>
    </div>
    </MediaQuery>
  );

}

QuestionCount.propTypes = {
  counter: React.PropTypes.number.isRequired,
  total: React.PropTypes.number.isRequired
};

export default QuestionCount;
