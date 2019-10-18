import React, { Component } from 'react'
import {
  Segment,
  Grid,
  Container,
  Header
} from 'semantic-ui-react'
import BasicLayout from '../components/Layout'
import TalkListItem from '../components/TalkListItem'
export default class Talks extends Component {
  
  render() {
    return (
      <BasicLayout isBannerHidden={true}>
        <Segment style={{ padding: '4em' }} vertical>
          <Container>
          <Grid stackable relaxed verticalAlign='middle'>
            <Grid.Row>
              <Header as='h2' style={{ marginBottom: '1em' }}>Talks: </Header>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: '2em' }}>
              <Grid.Column mobile={16} computer={4}>
                <TalkListItem />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <TalkListItem />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <TalkListItem />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <TalkListItem />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: '2em' }}>
              <Grid.Column mobile={16} computer={4}>
                <TalkListItem />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <TalkListItem />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <TalkListItem />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <TalkListItem />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </Container> 
        </Segment>
      </BasicLayout>
    )
  }
}