import React, { Component } from 'react'
import {
  Header,
  Container,
  Grid,
  Segment
} from 'semantic-ui-react'
import BasicLayout from '../components/Layout.jsx'

export default class About extends Component {
  render() {
    return (
      <BasicLayout isBannerHidden={true}>
      <Segment style={{ padding: '2.5em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row style={{ marginBottom: '3em', marginTop: '2em' }}>
            <Grid.Column>
              <Container fluid>
                <Header as='h2' style={{ marginBottom: '2em' }}>Get Involved</Header>
                <div style={{ marginBottom: '2em' }} className="about__item">
                  <Header as='h3' style={{ marginBottom: '1.5em' }}>Adventures</Header>
                  <p style={{ marginBottom: '1em', lineHeight: '2' }}>Another way to partner with TEDxSeattle is to host an adventure. You can learn more here! You can also reach us at adventures@tedxseattle.com.</p>
                </div>
                <div style={{ marginBottom: '2em' }} className="about__item">
                  <Header as='h3' style={{ marginBottom: '1.5em' }}>Volunteer</Header>
                  <p style={{ marginBottom: '1em', lineHeight: '2' }}>We have a number of volunteer opportunities available throughout the year. If you are interested in volunteering, check out our available volunteer opportunities and we’ll try to match you to the right role! You can also reach us at recruiting@tedxseattle.com.</p>
                </div>
                <div className="about__item">
                  <Header as='h3' style={{ marginBottom: '1.5em' }}>Speakers</Header>
                  <p style={{ marginBottom: '1em', lineHeight: '2' }}>Interested in speaking at our event? To learn more about what we consider in a speaker, watch Chris Anderson, the curator of TED (aka “the head of TED”) on TED’s secret to great public speaking. Information on how to apply as a speaker for this year’s November event can be found on our Speaker Submission page.</p>
                </div>

              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      </BasicLayout>
    )
  }
}