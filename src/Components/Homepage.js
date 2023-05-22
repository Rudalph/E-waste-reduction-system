import React from "react";
import './Homepage.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Figure from 'react-bootstrap/Figure';
import img1 from './images/hpbi.png';
import { getAuth, signOut } from "firebase/auth";


function Homepage () {
    function logout () {
        const auth = getAuth();
                signOut(auth).then(() => {
                // Sign-out successful.
                alert("Sign-out successful.")
                }).catch((error) => {
                // An error happened.
                  alert(error);
                });
    }
    return(
        <div>
                 <Navbar>
                        <Container>
                            <Navbar.Brand ><h1 className="fade-in-right">HOMEPAGE</h1></Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                              <Navbar.Text>
                                  <Nav className="justify-content-end fade-in-right" activeKey="/home">
                                        <Nav.Item>
                                        <Nav.Link href="#"><h5>Signup</h5></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="Signuppage"><h5>Signup</h5></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="link-2"><h5>Link</h5></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                        <Nav.Link eventKey="link-2" onClick={logout}><h5>LOGOUT</h5></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                               </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>


                 <div className="cardpos__s">
                    <Card className="cardsize__e">
                    <br></br>
                      <br></br>
                      <br></br>
                        <h1 className="incardtxt fade-in-text">WELCOME</h1> 
                        <br></br> 
                        <h6 className="fade-in-text">Home page message as per project.Addressing the users and  giving them access after login.Asking them to press Continue
                            to work further with website and use services provided
                        </h6>
                      <br></br>
                      <br></br>
                      <br></br>
                      <h6 className="fade-in-text">Home page message as per project.Addressing the users and  giving them access after login.Asking them to press Continue
                            to work further with website and use services provided
                        </h6>
                      
                      <div className="cardinsidediv">
                      
                      
                      
                      <button className="but butani"><h3>Continue</h3></button>

                                    <Figure className="figani">
                                        <Figure.Image className="imageincard"
                                            width={400}
                                            height={400}
                                            alt="171x180"
                                            src={img1}/>
                                    </Figure>     
                        </div>
                          
                    </Card>
                    
                 </div> 
                <br></br>
                <br></br>
                <br></br>
        </div>
    );
}
// check in for updation
export default Homepage;