import React from 'react';
import MediaQuery from 'react-responsive';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {

  return (
    <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
    <MediaQuery minDeviceWidth={1224}>
      <div>
        You Scored <strong>{props.quizResult}</strong>
      </div>
      </MediaQuery>  
    </ReactCSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
