import React from 'react';

function Question(props) {

  return (
    <h1 className="question">{props.content}</h1>
  );

}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
