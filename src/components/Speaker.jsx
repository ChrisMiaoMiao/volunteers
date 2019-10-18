import React, { Component } from 'react'
import {
  Button,
  Header,
  Image,
} from 'semantic-ui-react'
import {
  Link
} from "react-router-dom"

export default class Speaker extends Component {
  render () {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Header as='a' href="www.baidu.com" style={{ fontSize: '2em', color: '#e62b1e', marginBottom: '1em'}}>
          Ellen Forney
        </Header>
        <p style={{marginBottom: '2em'}}>
          <Image
            src='https://tedxseattle.com/wp-content/uploads/2019/08/ellen.jpg'
            as='a'
            size='medium'
            target='_blank'
          />
        </p>
        <p>
          <Button negative>
            <Link style={{color: '#fff'}} to="/speakers/1">
              Learn More
            </Link>
          </Button>
        </p>
      </div>
    )
  }
}