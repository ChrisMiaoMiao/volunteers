import React, { Component } from 'react'
import {
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react'
import BasicLayout from '../components/Layout'
import Speaker from '../components/Speaker'

export default class Speakers extends Component {
  render() {
    const headerTextObj = {
      title: '2019 TEDxSeattle Speakers',
    }
    return (
      <BasicLayout pageName={'speakers'} isBannerHidden={false} headerTextObj={headerTextObj}>
        <Segment style={{ padding: '2.5em 0em' }} vertical>
          <Grid stackable relaxed verticalAlign='middle'>
            <Grid.Row style={{ marginBottom: '3em', marginTop: '2em' }}>
              <Grid.Column textAlign='center'>
                <Header as='h2' style={{ fontSize: '2.5em' }}>Meet the first eight 2019 TEDxSeattle Speakers</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row relaxed style={{ marginBottom: '2em' }}>
              <Grid.Column mobile={16} computer={4}>
                <Speaker />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <Speaker />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <Speaker />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <Speaker />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={16} computer={4}>
                <Speaker />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <Speaker />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <Speaker />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <Speaker />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: '2em', marginTop: '2em' }}>
              <Grid.Column textAlign='center'>
                <Header as='h2' style={{ fontSize: '2.5em' }}>Stay tuned! More speakers being announced soon!</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </BasicLayout>
    )
  }
}