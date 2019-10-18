import React, { Component } from 'react'
import {
  Image
} from 'semantic-ui-react'
import TalkItemPlaceholder from '../assets/images/mqdefault.jpg'
import {
  Link
} from "react-router-dom"

export default class TalkListItem extends Component {
  render () {
    return (
      <div style={{paddingLeft: '2em', paddingRight: '2em'}} className="item__wrap">
        <div className="item__image">
        <Link to="/talk/1">
          <Image
            src={TalkItemPlaceholder}
            size='medium'
            target='_blank'
          />
        </Link>
        </div>
        <div className="item-intro" style={{marginTop: '1em'}}>
          <div className="item-speaker-name" style={{color: '#9B9B9B'}}>
            Sara Sanford
          </div>
          <div className="item-speak-time">
            17:20
          </div>
        </div>
        <h3 style={{color: 'red'}}>
        Improving gender parity through corporate accountability
        </h3>
        <div className="item-description">
          <p>
          Sara Sanford has long heard women colleagues and friends telling stories of unequal treatment at work. She realized systemic problems […]
          </p>
        </div>
      </div>
    )
  }
}