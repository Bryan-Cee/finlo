import React, {Component} from 'react';
import './style/App.css';
import {
  Card,
  CardGroup,
  Container, Dropdown,
  Grid,
  GridColumn,
  Header, Icon,
  Image, List, Menu, Responsive,
  Segment
} from "semantic-ui-react";

const options = [
  {key: 1, text: 'Choice 1', value: 1},
  {key: 2, text: 'Choice 2', value: 2},
  {key: 3, text: 'Choice 3', value: 3},
  {key: 3, text: 'Choice 3', value: 3},
  {key: 3, text: 'Choice 3', value: 3},
];
const leaf = require("./img/leaves-1.png");
const leaf2 = require("./img/leaves-2.png");
const leaf3 = require("./img/leaves-3.png");
const sectionLeaves = require("./img/section-leaves.png");
const sectionWoman = require("./img/woman-wearing-beaded-white-necklace-1181623.jpg");
const whiteLogo = require("./img/Logo.png");
const darkLogo = require("./img/Logo-dark.png");
const closeIcon = require("./img/hambuger-icon.svg");
const womenWalking = require("./img/women-walking.png");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: whiteLogo,
      navLinksColor: "#ffffff",
      header: false
    }
  }

  nav = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    let scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.nav.current.style.backgroundColor = "#ffffff";
      this.setState({logo: darkLogo, navLinksColor: "#000000"})
    } else {
      this.nav.current.style.backgroundColor = "";
      this.setState({logo: whiteLogo, navLinksColor: "#ffffff"})
    }
  };

  handleMenuClick = () => {
    this.setState({header: !this.state.header})
  };

  render() {
    return (
      <div className="App">
        <div className="App-header" ref={this.nav}>
          <Responsive minWidth={768}>
            <div className="App-header--nav">
              <img src={this.state.logo} className="App-logo" alt="logo" onClick={this.handleClick}/>
              <nav>
                <ul className="Header-nav">
                  <li><a href="#how-it-works" style={{color: this.state.navLinksColor}}>How it works?</a></li>
                  <li><a href="#why-Finlo" style={{color: this.state.navLinksColor}}>Why Finlo?</a></li>
                  <li><a href="#need-more-help" style={{color: this.state.navLinksColor}}>Contact</a></li>
                </ul>
              </nav>
              <div className="nav-buttons">
                <button style={{color: this.state.navLinksColor}} className="button button-transparent">Log In</button>
                <button className="button button-teal">Get Funding</button>
              </div>
            </div>
          </Responsive>
          <Responsive maxWidth={767}>
            <Container className="responsiveHeader">
              <img src={this.state.logo} className="App-logo" alt="logo"/>
              <div onClick={this.handleMenuClick}>
                <img style={{
                  height: "32px",
                  width: "32px",
                }} src={closeIcon} alt="close"/>
              </div>
            </Container>
            {this.state.header && <Container>
              <div style={{
                margin: "1em"
              }}>
                <List link verticalAlign="center">
                  <List.Item as='a' className="responsive-nav" href="#how-it-works" style={{
                    color: this.state.navLinksColor, padding: "1em"
                  }} onClick={this.handleMenuClick}>How it works?</List.Item>
                  <List.Item as='a' className="responsive-nav" href="#why-Finlo" style={{
                    color: this.state.navLinksColor, padding: "1em"
                  }} onClick={this.handleMenuClick}>Why Finlo?</List.Item>
                  <List.Item as='a' className="responsive-nav" href="#need-more-help" style={{
                    color: this.state.navLinksColor, padding: "1em"
                  }} onClick={this.handleMenuClick}>Contact</List.Item>
                  <List.Item onClick={this.handleMenuClick}>
                    <List.Content>
                      <button style={{color: this.state.navLinksColor}} className="button button-transparent">Log In
                      </button>
                    </List.Content>
                  </List.Item>
                  <List.Item onClick={this.handleMenuClick}>
                    <List.Content>
                      <button className="button button-teal">Get Funding</button>
                    </List.Content>
                  </List.Item>
                </List>
              </div>
            </Container>}
          </Responsive>
        </div>
        <div className="Hero__overlay"/>
        <div className="Hero">
          <div className="Hero__content--wrapper">
            <div className="Hero__content">
              <h3>The smooth and easy way to get funds</h3>
              <h1>Accelerating your success</h1>
              <button className="button button-teal">Quickly Test my Business Eligibility</button>
            </div>
          </div>
        </div>
        <Container>
          <div id="how-it-works" className="card-container">
            <div>
              <h2 style={{
                marginTop: "1em",
                color: "#01C8C8"
              }}>How it works?</h2>
            </div>
            <Segment primary style={{
              padding: "4em",
              backgroundColor: "#fafafa",
              border: "none",
              width: "90vw",
              boxShadow: "none"
            }}>
              <CardGroup centered stackable doubling>
                <Card style={{padding: "1em", boxShadow: "none", width: "30%"}}>
                  <Card.Content textAlign="center">
                    <Card.Header>
                      <div className="card-header">
                        <span className="card-number">1</span>
                        <img src={leaf} className="card-image" alt="leaf one"/>
                      </div>
                    </Card.Header>
                    <Card.Meta>
                      <h3 style={{color: "#0165C8"}}>Share your info</h3>
                    </Card.Meta>
                    <Card.Description>
                      <p>
                        Fill out a short application form sharing information about you and your business by connecting
                        your
                        accounts online
                      </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card style={{padding: "1em", boxShadow: "none", width: "30%"}}>
                  <Card.Content textAlign="center">
                    <Card.Header>
                      <div className="card-header">
                        <span className="card-number">2</span>
                        <img src={leaf2} className="card-image" alt="leaf one"/>
                      </div>
                    </Card.Header>
                    <Card.Meta>
                      <h3 style={{color: "#0165C8"}}>Get Approved</h3>
                    </Card.Meta>
                    <Card.Description>
                      <p>
                        We review the information shared and notify you if you are approved or not.
                        {<br/>}
                        {<br/>}
                        If you are approved, we provide you with the funding terms you are eligible to
                      </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card style={{padding: "1em", boxShadow: "none", width: "30%"}}>
                  <Card.Content textAlign="center">
                    <Card.Header>
                      <div className="card-header">
                        <span className="card-number">3</span>
                        <img src={leaf3} className="card-image" alt="leaf one"/>
                      </div>
                    </Card.Header>
                    <Card.Meta>
                      <h3 style={{color: "#0165C8"}}>Closing</h3>
                    </Card.Meta>
                    <Card.Description>
                      <p>
                        Accept the term proposed and submit requested documentation
                      </p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </CardGroup>
            </Segment>
            <button className="button button-teal">Get Approved</button>
          </div>
        </Container>
        <Responsive minWidth={768}>
          <div id="why-Finlo" style={{
            minHeight: "100vh",
            backgroundColor: "#efefef",
            margin: "0 auto"
          }}>
            <Container>
              <div className="card-container">
                <div>
                  <h2 style={{
                    margin: "1em",
                    color: "#01C8C8"
                  }}>Why Finlo?</h2>
                </div>
                <Grid stretched stackable className="unique-bg">
                  <Grid.Row>
                    <GridColumn width={1}/>
                    <GridColumn stretched width={7}>
                        <img src={sectionLeaves} alt="section-leaves"/>
                        <img src={sectionWoman} alt="woman" className="section-woman"/>
                        {/*<img src={womenWalking} alt="woman-walking" className="section-woman"/>*/}
                    </GridColumn>
                    <GridColumn stretched width={7}>
                      <CardGroup centered stackable doubling itemsPerRow={1}>
                        <Card raised style={{
                          borderRadius: "1em",
                          padding: "1em"
                        }}>
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{color: "#0165C8"}}>Smooth and Adequate Access to Funding</span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>We enable SMBs to access funding in a timely manner</p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card raised style={{
                          borderRadius: "1em",
                          padding: "1em"
                        }}>
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{color: "#0165C8"}}>Increase efficiency</span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>We support SMBs by providing digital tools which can increase efficiency in their daily
                                operations</p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card raised style={{
                          borderRadius: "1em",
                          padding: "1em"
                        }}>
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{color: "#0165C8"}}>Connect to other potential business partners</span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>Join a network of businesses who can become your suppliers or your clients</p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </CardGroup>
                    </GridColumn>
                  </Grid.Row>
                </Grid>
              </div>
            </Container>
          </div>
        </Responsive>
        <Responsive maxWidth={767}>
          <div id="why-Finlo" style={{
            minHeight: "100vh",
            backgroundColor: "#efefef",
            margin: "1em 0",
            padding: "5em 0",
            display: "flex",
            alignItems: "center",
          }}>
            <Container>
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <div>
                  <h2 style={{
                    margin: "1em",
                    color: "#01C8C8"
                  }}>Why Finlo?</h2>
                </div>
                <Grid stretched stackable className="unique-bg">
                  <Grid.Row>
                    <GridColumn stretched width={8}>
                    </GridColumn>
                    <GridColumn stretched width={6}>
                      <CardGroup centered stackable doubling itemsPerRow={1}>
                        <Card raised style={{
                          borderRadius: "1em",
                          padding: "1em"
                        }}>
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{color: "#0165C8"}}>Smooth and Adequate Access to Funding</span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>We enable SMBs to access funding in a timely manner</p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card raised style={{
                          borderRadius: "1em",
                          padding: "1em"
                        }}>
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{color: "#0165C8"}}>Increase efficiency</span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>We support SMBs by providing digital tools which can increase efficiency in their daily
                                operations</p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                        <Card raised style={{
                          borderRadius: "1em",
                          padding: "1em"
                        }}>
                          <Card.Content textAlign="left">
                            <Card.Header>
                              <span style={{color: "#0165C8"}}>Connect to other potential business partners</span>
                            </Card.Header>
                            <Card.Description textAlign="left">
                              <p>Join a network of businesses who can become your suppliers or your clients</p>
                            </Card.Description>
                          </Card.Content>
                        </Card>
                      </CardGroup>
                    </GridColumn>
                  </Grid.Row>
                  <GridColumn width={2}/>
                </Grid>
              </div>
            </Container>
          </div>
        </Responsive>
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>

        </div>
        <Segment id="need-more-help" inverted vertical style={{padding: '5em 0em'}}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Image src={whiteLogo} className="dark-logo"/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <Header as='h3' inverted>
                    Need more Help ? Call Us
                  </Header>
                  <Header as='h4' inverted>
                    +254 714 109 200
                  </Header>
                  <Header as='h4' inverted>
                    Our team is dedicated to serving you
                  </Header>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h2' inverted>
                    Stay in Touch
                  </Header>
                  <div style={{
                    marginTop: "2em"
                  }}>
                    <Icon link size="big" name="linkedin"/>
                    <Icon link size="big" name="twitter"/>
                    <Icon link size="big" name="whatsapp"/>
                    <Icon link size="big" name="facebook"/>
                    <a href="mailto:Info@finlo.ai" style={{color: "#fff"}}>
                      <Icon link size="big" name="mail outline"/>
                    </a>
                  </div>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Header as="h5" inverted>
                  © Finlo 2019
                </Header>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default App;
