import React from 'react';
import './App.css';
import styled from 'styled-components'

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

  render() {
    return (
      <div className="App">
        <StyledPlaceholder>placeholder text</StyledPlaceholder>
      </div>
    );
  }
}

export default App;
