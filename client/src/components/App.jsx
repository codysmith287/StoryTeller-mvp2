import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/App.css';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Container fluid className="navbar">
          <Row>
            <Col md="12" className="storyTeller">
              StoryTeller
            </Col>
          </Row>
        </Container>
        <Container className="mainContainer">
          <Row>
            <Col md="8" className="mainStoryDisplay">
              <h2 className="title">Main Story</h2>
            </Col>
            <Col md="4" className="myStoryList">
              <h2 className="title">My Story List</h2>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="storyLibrary">
            <h2 className="title">Story Library</h2>
            </Col>
          </Row>
        </Container>

      </div>
    )
  }
};