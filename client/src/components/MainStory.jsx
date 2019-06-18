import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import '../styles/MainStory.css';

const MainStory = (props) => {
  const {title, author, full_story} = props.currentStory;
  if (props.page < 0) {
    return (
      <div className="center">
        <h1 className='main-title'>{`${title}`}</h1>
        <h2 className='author'>{`By ${author}`}</h2>
        <i
          className="fa fa-chevron-right arrow-right"
          aria-hidden="true"
          onClick={props.onRightArrowClick}
        ></i>
      </div>
    )
  }
  if (props.page >= 0 && props.page < full_story.length) {
    return (
      <div className="center">
        <p>
          {full_story[props.page]}
        </p>
        <i
          className="fa fa-chevron-left arrow-left"
          aria-hidden="true"
          onClick={props.onLeftArrowClick}
        ></i>
        <i
          className="fa fa-chevron-right arrow-right"
          aria-hidden="true"
          onClick={props.onRightArrowClick}
        ></i>
      </div>
    )
  }
  if (props.page >= full_story.length) {
    return (
      <div className="center">
        <h1 className='end-title'>The End</h1>
        <i
          className="fa fa-chevron-left arrow-left"
          aria-hidden="true"
          onClick={props.onLeftArrowClick}
        ></i>
      </div>
    )
  }
}

export default MainStory;