import React, { Component } from 'react'
import {
  Button,
  Grid,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react'
import BasicLayout from '../components/Layout'
import Speaker from '../components/Speaker'
import Slider from 'react-slick'
import TalkItem from '../components/TalkItem'

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none"}}
      onClick={onClick}
    />
  );
}


export default class Home extends Component {
  render() {
    const settings = {
      infinite: true,
      auto: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleArrow />,
      prevArrow: <SampleArrow />
    }
    const headerTextObj = {
      title: '2019 TEDxHangzhou Theme',
      subTitle: 'Do whatever you want when you want to.',
      btnText: 'Get Your Tickets'
    }
    return (
      <BasicLayout isBannerHidden={false} pageName={'home'} headerTextObj={headerTextObj}>
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
        <Segment style={{ padding: '5em 0em', backgroundColor: '#e62b1e' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Image src='https://tedxseattle.com/wp-content/uploads/2019/06/shift-logo-black.png' size='large' centered />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Header as='h2' color='white'>We are excited to announce the theme for TEDxSeattle 2019: SHIFT—a moment of change from one position to another, whether it be in relationships, beliefs, cultures, perspectives or the world. Stay tuned for speaker announcements and make sure to get tickets!</Header>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '5em 0em', backgroundColor: '#000', color: '#fff' }} vertical>
          <Grid stackable relaxed verticalAlign='middle' style={{paddingLeft: '4em', paddingRight: '4em'}}>
            <Grid.Row>
              <Grid.Column textAlign='left'>
                <Header as='h2' style={{ fontSize: '3em', color: '#fff' }}>TEDxSeattle Salons</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{ marginBottom: '2em' }}>
              <Grid.Column floated='left' width={8}>
                <Image bordered rounded size='large' src='https://tedxseattle.com/wp-content/uploads/2019/09/https___cdn.evbuc_.com_images_73442013_4583201394_1_original.jpeg' />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em', color: '#fff' }}>
                  How to Take Action as an Effective Ally
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Have you witnessed someone being discriminated against or treated with disrespect, and wish you knew how to be a stronger advocate, an ally? Join Anastacia-Renee in a conversation around effective ally-ship for a better understanding of how to navigate this path.
                </p>
                <Button size='large' color="red">Get Tickets</Button>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em', color: '#fff' }}>
                  How to Take Action as an Effective Ally
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Have you witnessed someone being discriminated against or treated with disrespect, and wish you knew how to be a stronger advocate, an ally? Join Anastacia-Renee in a conversation around effective ally-ship for a better understanding of how to navigate this path.
            </p>
                <Button size='large' color="red">Get Tickets</Button>
              </Grid.Column>
              <Grid.Column floated='right' width={8}>
                <Image bordered rounded size='large' src='https://tedxseattle.com/wp-content/uploads/2019/09/image1.jpeg' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '2.5em 0em', backgroundColor: '#e62b1e' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column mobile={16} computer={6}>
                <Header as='h3' style={{ fontSize: '2rem', color: '#fff' }}>
                  When
            </Header>
                <Header as='h3' style={{ fontSize: '2em', color: '#fff' }}>
                  Saturday
            </Header>
                <Header as='h3' style={{ fontSize: '2em', color: '#fff' }}>
                  Nov. 23, 2019
            </Header>
              </Grid.Column>
              <Grid.Column mobile={16} computer={6}>
                <Header as='h3' style={{ fontSize: '2em', color: '#fff' }}>
                  Where
            </Header>
                <Header as='h3' style={{ fontSize: '2em', color: '#fff' }}>
                  McCaw Hall
            </Header>
                <Header as='h3' style={{ fontSize: '2em', color: '#fff' }}>
                  321 Mercer St, Seattle, WA
            </Header>
              </Grid.Column>
              <Grid.Column mobile={16} computer={4}>
                <Button size='large' color="black">Get Tickets</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '5em 0em', backgroundColor: '#000', color: '#fff' }} vertical>
          <Grid stackable relaxed verticalAlign='middle' style={{paddingLeft: '4em', paddingRight: '4em'}}>
            <Grid.Row>
              <Grid.Column textAlign='left'>
                <Header as='h2' style={{ fontSize: '3em', color: '#fff' }}>Previous Talks</Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column floated='left' width={8}>
                <Image bordered rounded size='large' src='https://tedxseattle.com/wp-content/uploads/2019/09/https___cdn.evbuc_.com_images_73442013_4583201394_1_original.jpeg' />
              </Grid.Column>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em', color: '#fff' }}>
                  How to Take Action as an Effective Ally
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Have you witnessed someone being discriminated against or treated with disrespect, and wish you knew how to be a stronger advocate, an ally? Join Anastacia-Renee in a conversation around effective ally-ship for a better understanding of how to navigate this path.
            </p>
                <Button size='large' color="red">Watch The TED Talk</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ paddingTop: '2em', paddingLeft: '5em', paddingRight: '5em', paddingBottom: '2em', backgroundColor: '#000' }} vertical className="slider__wrap">
            <Slider {...settings}>
              <TalkItem />
              <TalkItem />
              <TalkItem />
              <TalkItem />
              <TalkItem />
              <TalkItem />
            </Slider>
        </Segment>
      </BasicLayout>
    )
  }
}