import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/StoryLibrary.css';

const StoryLibrary = props => {
  console.log(props);
  return (
    <div>
      <Container>
        <Row>
          <Col md="12">
            <h2 className="title">Story Library</h2>
          </Col>
        </Row>
      </Container>
      <Container>
        {props.storyLibrary.map((story, index) => {
          if (index % 2 === 0) {
            return (
              <Row key={index}>
                <Col md="6" className="margin-bottom">
                  <i className="fa fa-plus plus" aria-hidden="true"></i>
                  <span className="story-title">
                    {`${story.title}`}
                  </span>
                  <span>{` by ${story.author}`}</span>
                </Col>
                <Col md="6" className="margin-bottom">
                  <i className="fa fa-plus plus" aria-hidden="true"></i>
                  <span className="story-title">
                    {`${props.storyLibrary[index + 1].title}`}
                  </span>
                  <span>
                    {` by ${props.storyLibrary[index + 1].author}`}
                  </span>
                </Col>
              </Row>
            )
          }
        })}
      </Container>
    </div>
  );
};

export default StoryLibrary;
