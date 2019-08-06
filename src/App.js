import React from 'react';
import './App.css';
import styled from 'styled-components'
import MainUserCard from './components/MainUserCard'
import FollowerCard from './components/FollowerCard'
import SearchForm from './components/SearchForm'
import { userInfo } from 'os';

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
  margin-bottom: 60px;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      mainUserData: [],
      followersData: [],
      searchUserName: 'bigknell'
    }
  }

  fetchMainUserData = () => {
    fetch(`https://api.github.com/users/${this.state.searchUserName}`)
      .then(response => response.json())
      .then(response => this.setState({ mainUserData: response }))
  }

  fetchFollowersData = () => {
    fetch(`https://api.github.com/users/${this.state.searchUserName}/followers`)
      .then(response => response.json())
      .then(response => this.setState({ followersData: response }))
  }

  updateSearchUser = username => {
    this.setState({ searchUserName: username })
    this.fetchMainUserData()
    this.fetchFollowersData()
  }

  componentDidMount() {
    this.fetchMainUserData()
    this.fetchFollowersData()
  }

  render() {
    return (
      <div className="App">
        <MainUserContainer>
          <SearchForm updateSearchUser={this.updateSearchUser}/>
          <MainUserCard mainUserData={this.state.mainUserData}/>
          <h2>Followers:</h2>
        </MainUserContainer>
        <FlexRowContainer>
          {this.state.followersData.map(follower => {
            return <FollowerCard follower={follower} />
          })}
        </FlexRowContainer>
      </div>
    );
  }
}
// trwhatcott
export default App;
