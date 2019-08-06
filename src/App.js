import React from 'react';
import './App.css';
import styled from 'styled-components'
import MainUserCard from './MainUserCard'
import FollowerCard from './FollowerCard'

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
        <MainUserCard mainUserData={this.state.mainUserData}/>
        {this.state.followersData.map(follower => {
          return <FollowerCard follower={follower}/>
        })}
      </div>
    );
  }
}

export default App;
