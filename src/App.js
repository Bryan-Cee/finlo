import React from 'react';
import './style/App.css';
import {
  Card,
  CardGroup,
  Container,
  Grid,
  GridColumn,
  Header, Icon,
  Image,
  Segment
} from "semantic-ui-react";
import logo from "./assets/finlo/assets/img/Logo.png";

const leaf = require("./img/leaves-1.png");
const leaf2 = require("./img/leaves-2.png");
const leaf3 = require("./img/leaves-3.png");
const sectionLeaves = require("./img/section-leaves.png");
const sectionWoman = require("./img/woman-wearing-beaded-white-necklace-1181623.jpg");
const darkLogo = require("./img/Logo-dark.png");

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="App-header--nav">
          <img src={logo} className="App-logo" alt="logo" />
          <nav>
            <ul className="Header-nav">
               <li><a href="#how-it-works">How it works?</a></li>
               <li><a href="#why-Finlo">Why Finlo?</a></li>
              <li><a href="#need-more-help">Contact</a></li>
            </ul>
           </nav>
          <div className="nav-buttons">
            <button className="button-transparent">Log In</button>
            <button className="button-teal">Get Funding</button>
          </div>
        </div>
      </div>
      <div className="Hero__overlay"/>
      <div className="Hero">
        <div className="Hero__content--wrapper">
          <div className="Hero__content">
            <h3>The smooth and easy way to get funds</h3>
            <h1>Accelerating your success</h1>
            <button className="button-teal">Quickly Test my Business Eligibility</button>
          </div>
        </div>
      </div>
      <Container id="how-it-works">
        <div className="card-container">
          <div>
            <h2 style={{
              margin: "1em"
            }}>How it works?</h2>
          </div>
          <CardGroup centered stackable doubling>
            <Card color="teal">
              <Card.Content textAlign="center">
                <Card.Header>
                  <div className="card-header">
                    <span className="card-number">1</span>
                    <img src={leaf} className="card-image" alt="leaf one"/>
                  </div>
                </Card.Header>
                <Card.Meta>
                  <h3>Share your info</h3>
                </Card.Meta>
                <Card.Description textAlign="left">
                  <p>
                    Fill out a short application form sharing information about you and your business by connecting your accounts online
                  </p>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card color="teal">
              <Card.Content textAlign="center">
                <Card.Header>
                  <div className="card-header">
                    <span className="card-number">2</span>
                    <img src={leaf2} className="card-image" alt="leaf one"/>
                  </div>
                </Card.Header>
                <Card.Meta>
                  <h3>Get Approved</h3>
                </Card.Meta>
                <Card.Description textAlign="left">
                  <p>
                    We review the information shared and notify you if you are approved or not.
                    {" "}
                    If you are approved, we provide you with the funding terms you are eligible to
                  </p>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card color="teal">
              <Card.Content textAlign="center">
                <Card.Header>
                  <div className="card-header">
                    <span className="card-number">3</span>
                    <img src={leaf3} className="card-image" alt="leaf one"/>
                  </div>
                </Card.Header>
                <Card.Meta>
                  <h3>Closing</h3>
                </Card.Meta>
                <Card.Description textAlign="left">
                  <p>
                    Accept the term proposed and submit requested documentation
                  </p>
                </Card.Description>
              </Card.Content>

            </Card>
          </CardGroup>
          <button className="button-teal">Get Approved</button>
        </div>
      </Container>
      <div id="why-Finlo" style={{
        height: "100vh",
        backgroundColor: "#efefef",
      }}>
        <Container>
          <div className="card-container">
            <div>
              <h2 style={{
                margin: "1em"
              }}>How it works?</h2>
            </div>
            <Grid stretched stackable>
              <Grid.Row>
                <GridColumn stretched width={9}>
                  <div>
                    <img src={sectionLeaves} alt="section-leaves"/>
                    <img src={sectionWoman} alt="woman" className="section-woman"/>
                  </div>
                </GridColumn>
                <GridColumn stretched width={5}>
                  <CardGroup centered stackable doubling itemsPerRow={1}>
                    <Card color="teal">
                      <Card.Content textAlign="left">
                        <Card.Header>
                          <span>Smooth and Adequate Access to Funding</span>
                        </Card.Header>
                        <Card.Description textAlign="left">
                          <p>We enable SMBs to access funding in a timely manner</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                    <Card color="teal">
                      <Card.Content textAlign="left">
                        <Card.Header>
                          <span>Increase efficiency</span>
                        </Card.Header>
                        <Card.Description textAlign="left">
                          <p>We support SMBs by providing digital tools which can increase efficiency in their daily operations</p>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                    <Card color="teal">
                      <Card.Content textAlign="left">
                        <Card.Header>
                          <span>Connect to other potential business partners</span>
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
      <Segment id="need-more-help" inverted vertical style={{ padding: '5em 0em' }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column color="white" width={5}>
                <Card>
                  <Card.Content>
                    <Card.Description>
                      <Grid>
                        <Grid.Column width={7}>
                          <Image src={darkLogo} className="dark-logo"/>
                        </Grid.Column>
                        <Grid.Column stretched width={7} centered>
                          <div style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "space-evenly"
                          }}>
                            <Icon size="large" name="map marker alternate"/>
                            <div>Nairobi, Kenya</div>
                            <div>Paris, France</div>
                          </div>
                        </Grid.Column>
                      </Grid>
                    </Card.Description>
                  </Card.Content>
                </Card>
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
              <Grid.Column width={5}>
                <Header as='h2' inverted>
                  Stay in Touch
                </Header>
                <div style={{
                  marginTop: "2em"
                }}>
                  <Icon link size="huge" name="linkedin"/>
                  <Icon link size="huge" name="twitter"/>
                  <Icon link size="huge" name="mail outline"/>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Header as="h5" inverted>
                © Finlo 2019 | Designed by <a rel="noopener noreferrer" target="_blank" href="https://briancheruiyot.web.app">Brian Cheruiyot</a>
              </Header>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}

export default App;
