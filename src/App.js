import React from 'react';
import './App.css';
import styled from 'styled-components'

const StyledPlaceholder = styled.p`
  color: red;
`

function App() {
  return (
    <div className="App">
      <StyledPlaceholder>placeholder text</StyledPlaceholder>
    </div>
  );
}

export default App;
