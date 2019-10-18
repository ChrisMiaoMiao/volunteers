import React, { Component } from 'react'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import {
  Link
} from "react-router-dom"

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile, headerTextObj }) => (
  <Container text>
    <Header
      as='h1'
      content={headerTextObj.title}
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1em' : '1.5em',
      }}
    />
    <Header
      as='h2'
      content={headerTextObj.subTitle}
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.4em' : '1.5em',
      }}
    />
    {headerTextObj.btnText && <Button color="red" size='massive' style={{marginTop: mobile ? '0.5em' : '1.5em'}}>
      {headerTextObj.btnText}
      <Icon name='right arrow' />
    </Button>}
    
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
  headerTextObj: PropTypes.object
}

const ResponsiveContainer = ({ children, isBannerHidden, pageName, headerTextObj }) => (
  <div>
    <DesktopContainer isBannerHidden={isBannerHidden} pageName={pageName} headerTextObj={headerTextObj}>{children}</DesktopContainer>
    <MobileContainer isBannerHidden={isBannerHidden} pageName={pageName} headerTextObj={headerTextObj}>{children}</MobileContainer>
  </div>
)
ResponsiveContainer.propTypes = {
  children: PropTypes.node,
  isBannerHidden: PropTypes.bool,
  bannerImg: PropTypes.string,
  headerTextObj: PropTypes.object
}
/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  // hideFixedMenu = () => this.setState({ fixed: false })
  // showFixedMenu = () => this.setState({ fixed: true })
  render() {
    const { children, isBannerHidden, headerTextObj } = this.props
    const { fixed } = this.state
    let headerWrapperClassName = ''
    if (!this.props.isBannerHidden) {
      headerWrapperClassName += `header__wrap--bg ${this.props.pageName}`
    }
    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            className={headerWrapperClassName}
            style={{ padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
              className={fixed ? 'header__fix--black' : ''}
            >
              <Container fluid>
                <Menu.Item>
                  <Image
                    src="https://tedxseattle.com/wp-content/uploads/2019/05/tedxseattle-logo-1.png"
                    size='small'
                  />
                </Menu.Item>
                <Menu.Menu position="right">
                  <Menu.Item style={{fontSize: '1.3em', fontWeight: '900'}} as='a'>
                    <Link to="/">
                      HOME
                    </Link>
                  </Menu.Item>
                  <Menu.Item style={{fontSize: '1.3em', fontWeight: '900'}} as='a'>
                    <Link to="/current-speakers">SPEAKERS</Link>
                  </Menu.Item>
                  <Menu.Item style={{fontSize: '1.3em', fontWeight: '900'}} as='a'>
                    <Link to="/talks">TALKS</Link>
                  </Menu.Item>
                  <Menu.Item style={{fontSize: '1.3em', fontWeight: '900'}} as='a'>
                    <Link to="/about">ABOUT</Link>
                  </Menu.Item>
                </Menu.Menu>                
              </Container>
            </Menu>
            {isBannerHidden ? '' : <HomepageHeading headerTextObj={headerTextObj}/>}
          </Segment>
        </Visibility>

        {children}
        <Segment style={{ padding: '5em 0em', backgroundColor: '#e62b1e' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <Header as='h2' style={{color: 'white'}}>What is TEDx?</Header>
                <p style={{color: 'white', lineHeight: '2'}}>In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxSeattle, where x = independently organized TED event. At our TEDxSeattle event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>
                    Footer Header
                  </Header>
                  <p>
                    © 2019 TEDxHangzhou. This independent TEDx event is operated under license from TED.
                  </p>
                  <p>
                    <a href="">
                      <Icon name='facebook' />
                    </a>
                    <a href="">
                      <Icon name='instagram' />
                    </a>
                    <a href="">
                      <Icon name='twitter' />
                    </a>
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children, isBannerHidden, headerTextObj } = this.props
    const { sidebarOpened } = this.state

    let headerWrapperClassName = ''
    if (!isBannerHidden) {
      headerWrapperClassName += `header__wrap--bg--mobile ${this.props.pageName}`
    }

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item>
            <Link to="/">
              HOME
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/current-speakers">SPEAKERS</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/talks">TALKS</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">ABOUT</Link>
          </Menu.Item>
          {/* <Menu.Item as='a'>Log in</Menu.Item>
          <Menu.Item as='a'>Sign Up</Menu.Item> */}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            className={headerWrapperClassName}
            inverted
            textAlign='center'
            style={{ padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
              </Menu>
            </Container>
            {this.props.isBannerHidden ? '' : <HomepageHeading mobile headerTextObj={headerTextObj}/>}
          </Segment>

          {children}
        </Sidebar.Pusher>
        <Segment style={{ padding: '3em 0em', backgroundColor: '#e62b1e' }} vertical>
          <Container>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column textAlign='center'>
                  <Header as='h2' style={{color: 'white', fontSize: '2rem'}}>What is TEDx?</Header>
                  <p style={{color: 'white', lineHeight: '2', fontSize: '1rem'}}>In the spirit of ideas worth spreading, TED has created a program called TEDx. TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. Our event is called TEDxSeattle, where x = independently organized TED event. At our TEDxSeattle event, TEDTalks video and live speakers will combine to spark deep discussion and connection in a small group. The TED Conference provides general guidance for the TEDx program, but individual TEDx events, including ours, are self-organized.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '2em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>
                    Footer Header
              </Header>
                  <p>
                    © 2019 TEDxHangzhou. This independent TEDx event is operated under license from TED.
              </p>
                  <p>
                    <a href="">
                      <Icon name='facebook' />
                    </a>
                    <a href="">
                      <Icon name='instagram' />
                    </a>
                    <a href="">
                      <Icon name='twitter' />
                    </a>
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveContainer