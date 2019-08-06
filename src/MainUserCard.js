import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

const MainUserCard = props => {
  console.log(props.mainUserData.login)

  return (
    <Card>
    <Image src={`${props.mainUserData.avatar_url}`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.mainUserData.login}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.mainUserData.name}</span>
      </Card.Meta>
      <Card.Description>
        <p>Company: {props.mainUserData.company}</p>
        <p>Blog: {props.mainUserData.blog}</p>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {props.mainUserData.followers} Followers
      </a>
    </Card.Content>
  </Card>
  )
}

export default MainUserCard