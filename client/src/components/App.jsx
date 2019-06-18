import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import MainStory from './MainStory.jsx'
import MyStories from './MyStories.jsx';
import StoryLibrary from './StoryLibrary.jsx';
import storyData from '../storyData.js';
import '../styles/App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStory: storyData[0],
      currentPage: -1,
      currentStoryList: [],
      storyLibrary: storyData
    };
    this.handleStoryListAddClick = this.handleStoryListAddClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleStoryTitleClick = this.handleStoryTitleClick.bind(this);
  }

  handleStoryListAddClick(id) {
    const storyList = this.state.currentStoryList;
    storyList.push(storyData[id - 1])
    this.setState({
      currentStoryList: storyList
    })
  }

  handleRightArrowClick() {
    this.setState({
      currentPage: this.state.currentPage += 1
    })
  }

  handleLeftArrowClick() {
    this.setState({
      currentPage: this.state.currentPage -= 1
    })
  }

  handleStoryTitleClick(id) {
    this.setState({
      currentStory: storyData[id - 1],
      currentPage: -1
    })
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
              <MainStory
                currentStory = {this.state.currentStory}
                page = {this.state.currentPage}
                onRightArrowClick = {this.handleRightArrowClick}
                onLeftArrowClick = {this.handleLeftArrowClick}
              />
            </Col>
            <Col md='4' className='myStoryList overflow-scroll'>
              <MyStories
                myStoryList = {this.state.currentStoryList}
                onStoryTitleClick = {this.handleStoryTitleClick}
              />
            </Col>
          </Row>
          <Row>
            <Col md='12' className='storyLibrary overflow-scroll'>
              <StoryLibrary
                storyLibrary={this.state.storyLibrary}
                onStoryListAddClick={this.handleStoryListAddClick}
                onStoryTitleClick = {this.handleStoryTitleClick}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
