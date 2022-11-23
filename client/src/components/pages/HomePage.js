import React, { useState } from "react";
import {
  Grid,
  Segment,
  Container,
  Popup,
  Button,
  Header,
} from "semantic-ui-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function HomePage() {
  const [value, onChange] = useState(new Date());
  return (
    <Container style={{ margin: "3rem", color: "black" }}>
      <Grid celled columns="equal" divided="vertically">
        <Grid.Column columns={2}>
          <Grid.Row width={5}>
            <Segment>User Name</Segment>
            <Segment>UserID: 123</Segment>
          </Grid.Row>
        </Grid.Column>

        <Grid.Column floated="right" width={10}>
          <Calendar onChange={onChange} value={value} />
        </Grid.Column>

        <Grid.Row>
          <Grid.Column width={5}>
            <Popup
              trigger={<Button>Appointment 1 @8:00AM</Button>}
              flowing
              hoverable
            >
              <Grid.Column textAlign="center">
                <Header as="h4">Meeting name</Header>
                <p>This is a meeting example description</p>
                <Button color="green">Reschedule</Button>
                <Button color="red">Cancel</Button>
              </Grid.Column>
            </Popup>
          </Grid.Column>
          <Grid.Column width={8}>
            <Segment>Appointment 2</Segment>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={5}>
            <Segment>Appointment 3</Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>Appointment 4</Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>Appointment 5</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}