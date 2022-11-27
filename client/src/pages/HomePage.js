import React, { useState } from "react";
import {
  Grid,
  Segment,
  Container,
  Popup,
  Button,
  Header,
  Card,
} from "semantic-ui-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function HomePage() {
  const [value, onChange] = useState(new Date());
  return (
    <Container style={{ Height: "100%", padding: "1em 0em" }}>
      <Card
        verticalAlign="middle"
        centered
        fluid
        style={{ background: "#0d0d0d", marginTop: "10rem" }}
      >
        <Grid celled columns="equal" divided="vertically">
          <Grid.Column textAlign="center" verticalAlign="middle" columns={2}>
            <Grid.Row width={5}>
              <Segment>User Name</Segment>
              <Segment>UserID: 123</Segment>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column floated="right" width={5}>
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
            <Grid.Column width={5}>
              <Popup
                trigger={<Button>Appointment 2 @8:30AM</Button>}
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
            <Grid.Column width={5}>
              <Popup
                trigger={<Button>Appointment 3 @9:00AM</Button>}
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
          </Grid.Row>
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
            <Grid.Column width={5}>
              <Popup
                trigger={<Button>Appointment 2 @8:30AM</Button>}
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
            <Grid.Column width={5}>
              <Popup
                trigger={<Button>Appointment 3 @9:00AM</Button>}
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
          </Grid.Row>
        </Grid>
      </Card>
    </Container>
  );
}
