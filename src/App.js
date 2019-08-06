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
      data: []
    }
  }

  fetchMainUserData = () => {
    fetch(`https://api.github.com/users/bigknell`)
      .then(response => {
        console.log(response)
        return response.json()
      })
      // .then(response => this.setState({ data: response }))
      .then(response => {console.log(response)})

  }

  componentDidMount() {
    this.fetchMainUserData()
  }

  render() {
    return (
      <div className="App">
        <StyledPlaceholder>placeholder text</StyledPlaceholder>
        <MainUserCard />
      </div>
    );
  }
}

export default App;
