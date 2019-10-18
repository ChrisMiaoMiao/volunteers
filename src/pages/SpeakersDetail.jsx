import React, { Component } from 'react'
import {
  Image,
  Segment,
  Grid,
  Header,
  Container
} from 'semantic-ui-react'
import BasicLayout from '../components/Layout'
import TalkListItem from '../components/TalkListItem'

export default class SpeakersDetail extends Component {
  render () {
    return (
      <BasicLayout isBannerHidden={true}>
        <Segment style={{ padding: '4em'}} vertical>
            <Grid stackable relaxed>
              <Grid.Row>
                <Header as='h2'>Sara Sanford</Header>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={4}>
                  <div>
                    <Image src="https://tedxseattle.com/wp-content/uploads/2018/10/18-speaker-Sara-Sanford-1-e1538715984314-580x580.jpg"/>
                  </div>
                </Grid.Column>
                <Grid.Column width={9}>
                  <Container text>
                    <p>Sara Sanford founded Gender Equity Now (GEN) to bring gender balance to the U.S. workplace.</p>
                    <p>She is the architect behind the GEN Certification, the first gold standard for gender parity in U.S. businesses. Guided by the maxim, “You get the behavior you measure,” Sara believes we now have the data-driven tools for all businesses to be equity-centered if they choose to be.  Before starting GEN, Sara worked in the financial services industry, where she identified opportunities to address gender disparities as a force multiplier for growth. She spearheaded John Hancock’s first broker-dealer initiative focused on women and wealth, and authored articles on gender inequities in finance and socially responsible investing.</p>
                    <p>As a Masters graduate of the University of Washington Evans School of Public Policy, Sara focused on private-public partnerships and impact evaluation in the international development sector. She has since used her experience and skills to collaborate with Local and International Foundations in the areas of education, cultural competence, sustainability, and global health.</p>
                  </Container>
                </Grid.Column>
                <Grid.Column width={3}>
                  <TalkListItem />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
      </BasicLayout>
    )
  }
}