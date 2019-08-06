import React from 'react'
import { Input } from 'semantic-ui-react'
import styled from 'styled-components'

const SearchContainer = styled.div`
  margin-bottom: 40px;
`
class SearchForm extends React.Component {
  constructor() {
    super()
  }

  formSubmitHandler = (event) => console.log(event.target.value)

  render(){
    return (
      <SearchContainer>
        <Input onClick={this.formSubmitHandler} icon='search' placeholder='Input GitHub Username...' size='massive' />
      </SearchContainer>
    )
  }
}

export default SearchForm