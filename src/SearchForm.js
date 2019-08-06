import React from 'react'
import { Input } from 'semantic-ui-react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  margin-bottom: 40px;
`
class SearchForm extends React.Component {
  constructor(props) {
    super()
    this.state = {
      input: ''
    }
  }

  changeInputHandler = event => {
    this.setState({
      input: event.target.value
    })
  }

  onClickHandler = event => {
    this.props.updateSearchUser(this.state.input)
  } 

  render(){
    return (
      <SearchContainer>
        <Input onChange={this.changeInputHandler} onClick={this.onClickHandler} icon='search' placeholder='Input GitHub Username...' size='massive' />
      </SearchContainer>
    )
  }
}

export default SearchForm