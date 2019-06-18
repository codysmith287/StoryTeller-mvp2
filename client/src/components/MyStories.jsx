import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import '../styles/MyStories.css';

const MyStories = (props) => {
  const handleStoryTitleClick = (e) => {
    props.onStoryTitleClick(e.target.id)
  }
  return (
    <div>
      <Container>
        <Row>
          <Col md="12">
            <h2 className="title">My Stories</h2>
          </Col>
        </Row>
        {props.myStoryList.map((story, index) => {
          return (
          <Row key={index} className="margin-bottom">
            <Col md="12">
              <i className="fa fa-book read" aria-hidden="true"></i>
              <span
                className="story-title"
                onClick={handleStoryTitleClick}
                id={story.id}
              >
                {`${story.title}`}
              </span>
            </Col>
          </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default MyStories;
