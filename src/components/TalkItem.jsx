import React, { Component } from 'react'
import {
  Image,
  Card
} from 'semantic-ui-react'
import {
  Link
} from "react-router-dom"

export default class TalkItem extends Component {
  render () {
    return (
      <Link to="/talk/1">
      <div style={{paddingLeft: '2em', paddingRight: '2em'}}>
        <Card style={{width: '100%', position: 'relative'}}>
            <Image src='https://tedxseattle.com/wp-content/uploads/2019/05/ted-xseattle-thumb-uai-1032x581.jpg' wrapped ui={false} />
            <p className="talk__desc">
              Connecting to climate change through music
            </p>
        </Card>
      </div>
      </Link>
    )
  }
}