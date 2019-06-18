import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/StoryLibrary.css';

const StoryLibrary = (props) => {
  const handleStoryListAddClick = (e) => {
    props.onStoryListAddClick(e.target.id);
  }
  const handleStoryTitleClick = (e) => {
    props.onStoryTitleClick(e.target.id)
  }
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
                  <i
                    className="fa fa-plus plus"
                    aria-hidden="true"
                    onClick={handleStoryListAddClick}
                    id={story.id}
                  ></i>
                  <span
                    className="story-title"
                    id={story.id}
                    onClick={handleStoryTitleClick}
                  >
                    {`${story.title}`}
                  </span>
                  <span>{` by ${story.author}`}</span>
                </Col>
                <Col md="6" className="margin-bottom">
                  <i
                    className="fa fa-plus plus"
                    aria-hidden="true"
                    onClick={handleStoryListAddClick}
                    id={story.id + 1}
                  ></i>
                  <span
                    className="story-title"
                    id={story.id + 1}
                    onClick={handleStoryTitleClick}
                  >
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
