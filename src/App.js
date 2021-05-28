import React from "react";
import "./App.css";
import myImage from "./imageInSrc.jpg";
import Clock from "./Clock";
import { Card, Button } from "react-bootstrap";
class App extends React.Component {
  state = {
    Person: {
      fullName: "Adel Abidi",
      bio: "bio dsdsd",
      imgSrc: myImage,
      profession: "Etudiant",
    },
    show: true,
  };

  handleShowPerson = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    return (
      <div>
        <Clock />

        {this.state.show && (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.Person.imgSrc} />
            <Card.Body>
              <Card.Title>{this.state.Person.fullName}</Card.Title>
              <Card.Subtitle>{this.state.Person.profession}</Card.Subtitle>
              <Card.Text>{this.state.Person.bio}</Card.Text>
            </Card.Body>
          </Card>
        )}
        <br></br>
        <Button variant="primary" onClick={this.handleShowPerson}>
          Show
        </Button>
      </div>
    );
  }
}
export default App;
