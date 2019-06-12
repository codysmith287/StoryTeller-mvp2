import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import StoryLibrary from './StoryLibrary.jsx';
import MyStories from './MyStories';
import storyData from '../storyData.js';
import '../styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainStory: '',
      myStoryList: [],
      storyLibrary: storyData
    };
    this.handleStoryListAddClick = this.handleStoryListAddClick.bind(this);
  }

  handleStoryListAddClick(e) {
    console.log(e.target.key)
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <Container fluid className='navbar'>
          <Row>
            <Col md='12' className='storyTeller'>
              StoryTeller
            </Col>
          </Row>
        </Container>
        <Container className='mainContainer'>
          <Row>
            <Col md='8' className='mainStoryDisplay'>
              <h2 className='title'>Main Story</h2>
            </Col>
            <Col md='4' className='myStoryList'>
              <h2 className='title'>My Stories</h2>
              <MyStories />
            </Col>
          </Row>
          <Row>
            <Col md='12' className='storyLibrary'>
              <StoryLibrary storyLibrary={this.state.storyLibrary} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
