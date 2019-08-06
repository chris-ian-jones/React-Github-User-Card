import React from 'react';
import './App.css';
import styled from 'styled-components'
import MainUserCard from './MainUserCard'
import FollowerCard from './FollowerCard'

const MainUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 60px 0;
`

const FlexRowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: space-evenly;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      mainUserData: [],
      followersData: []
    }
  }

  fetchMainUserData = () => {
    fetch(`https://api.github.com/users/bigknell`)
      .then(response => response.json())
      .then(response => this.setState({ mainUserData: response }))
  }

  fetchFollowersData = () => {
    fetch(`https://api.github.com/users/BigKnell/followers`)
      .then(response => response.json())
      .then(response => this.setState({ followersData: response }))
  }

  componentDidMount() {
    this.fetchMainUserData()
    this.fetchFollowersData()
  }

  render() {
    console.log('upon render! mainUserData:', this.state.mainUserData)
    console.log('upon render! followersData:', this.state.followersData)
    return (
      <div className="App">
        <MainUserContainer>
          <h1>User</h1>
          <MainUserCard mainUserData={this.state.mainUserData}/>
          <h2>Followers</h2>
        </MainUserContainer>
        <FlexRowContainer>
          {this.state.followersData.map(follower => {
            return <FollowerCard follower={follower}/>
          })}
        </FlexRowContainer>
      </div>
    );
  }
}

export default App;
