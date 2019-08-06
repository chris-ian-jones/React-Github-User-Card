import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'

const FollowerCard = props => {
  console.log(props)
  return (
    <p>{props.follower.login}</p>
  )
}

export default FollowerCard
