import React from 'react';
import './App.css';
import styled from 'styled-components'
import MainUserCard from './MainUserCard'


const StyledPlaceholder = styled.p`
  color: red;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      mainUserData: []
    }
  }

  fetchMainUserData = () => {
    fetch(`https://api.github.com/users/bigknell`)
      .then(response => {
        // console.log(response)
        return response.json()
      })
      // .then(response => {console.log(response)})
      .then(response => this.setState({ mainUserData: response }))
  }

  componentDidMount() {
    this.fetchMainUserData()
  }

  render() {
    // console.log('upon render! mainUserData:', this.state.mainUserData)
    return (
      <div className="App">
        <MainUserCard mainUserData={this.state.mainUserData}/>
      </div>
    );
  }
}

export default App;
