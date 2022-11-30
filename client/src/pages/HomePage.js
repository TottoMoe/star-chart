import React from "react";
import { Link } from "react-router-dom";
import { Segment, Container, Card } from "semantic-ui-react";
import "react-calendar/dist/Calendar.css";

export default function HomePage() {
  return (
    <Container
      style={{ Height: "100%", padding: "1em 0em", backgroundColor: "black" }}
    >
      <Card
        verticalAlign="middle"
        centered
        fluid
        style={{ marginTop: "10rem", backgroundColor: "black" }}
      >
        <Link to={"/Users"}>
          <Segment size="massive" textAlign="center">
            See all Users
          </Segment>
        </Link>
        <Link to={"/Events"}>
          <Segment size="massive" textAlign="center">
            See all Events
          </Segment>
        </Link>
        <Link to={"/EventForm"}>
          <Segment size="massive" textAlign="center">
            Create a new Appointment
          </Segment>
        </Link>
      </Card>
    </Container>
  );
}
