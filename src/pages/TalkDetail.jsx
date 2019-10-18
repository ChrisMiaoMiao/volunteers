import React, { Component } from 'react'
import {
  Image,
  Segment,
  Grid,
  Embed,
  Header,
  Container
} from 'semantic-ui-react'
import BasicLayout from '../components/Layout'
import Speaker from '../components/Speaker'
import TalkListItem from '../components/TalkListItem'

export default class TalkDetail extends Component {
  render () {
    return (
      <BasicLayout isBannerHidden={true}>
        <Segment style={{backgroundColor: '#000', padding: '2em', margin: '0'}}>
          <Container>
          <Embed
                icon='right circle arrow'
                placeholder='https://i.ytimg.com/vi/N62TPjYdx4E/maxresdefault.jpg'
                url='https://www.youtube.com/embed/N62TPjYdx4E?feature=oembed&width=640&height=390'/>
          </Container>
        </Segment>
        <Segment style={{ padding: '4em 2em', backgroundColor: '#fff' }} vertical>
          <Container>
          <Grid>
            <Grid.Row style={{borderBottom: '2px solid #ccc', paddingBottom: '2em'}}>
              <Grid.Column mobile={16} computer={12} style={{marginBottom: '2em'}}>
                <Container textAlign='left'>
                  <Header as='h2' style={{fontSize: '2rem', fontWeight: '900'}}>Improving gender parity through corporate accountability</Header>
                  <p style={{lineHeight: 1.5, fontSize: '1.2rem'}}>Sara Sanford has long heard women colleagues and friends telling stories of unequal treatment at work. She realized systemic problems cannot be changed through individuals’ actions. Applying the approach of “you get the behavior you measure,” she founded Gender Equity Now and developed a set of tools that are unparalleled in the United States. This framework identifies the gaps, applies small changes and certifies business to close the gender parity. She looks forward to the day when companies which are not gender equity-focused will be at a competitive disadvantage to those which are. Sara Sanford founded Gender Equity Now (GEN) to bring gender balance to the U.S. workplace. She is the architect behind the GEN Certification, the first gold standard for gender parity in U.S. businesses. Guided by the maxim, “You get the behavior you measure,” Sara believes we now have the data-driven tools for all businesses to be equity-centered if they choose to be. Before starting GEN, Sara worked in the financial services industry, where she identified opportunities to address gender disparities as a force multiplier for growth. As a Masters graduate of the University of Washington Evans School of Public Policy, Sara focused on private-public partnerships and impact evaluation in the international development sector. She has since used her experience and skills to collaborate with Local and International Foundations in the areas of education, cultural competence, sustainability, and global health.</p>
                </Container>
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <Speaker />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Container textAlign='left'>
                <Header as='h2'>Related Talks</Header>
              </Container>
            </Grid.Row>
            <Grid.Row >
              <Grid.Column mobile={16} computer={4} style={{marginBottom: '1em'}}>
               <TalkListItem />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4} style={{marginBottom: '1em'}}>
                <TalkListItem />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4} style={{marginBottom: '1em'}}>
                <TalkListItem />
              </Grid.Column>
              <Grid.Column mobile={16} computer={4} style={{marginBottom: '1em'}}>
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