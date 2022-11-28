import React from "react";
import {
  Grid,
  Container,
  Popup,
  Button,
  Header,
  Card,
} from "semantic-ui-react";

const EventList = ({ events }) => {
  console.log(events);
  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  return (
    <Container style={{ Height: "100%", padding: "1em 0em" }}>
      <Card
        verticalAlign="middle"
        centered
        fluid
        style={{ background: "#0d0d0d", marginTop: "10rem" }}
      >
        <Grid celled columns="equal" divided="vertically">
          <Grid.Row>
            {events &&
              events.map((event) => (
                <Grid.Column width={5}>
                  <Popup
                    trigger={
                      <Button>
                        {event.title} {event.date}
                      </Button>
                    }
                    flowing
                    hoverable
                  >
                    <Grid.Column textAlign="center">
                      <Header as="h4">Creator: {event.creator}</Header>
                      <p>{event.description}</p>
                      <Button color="green">Reschedule</Button>
                      <Button color="red">Cancel</Button>
                    </Grid.Column>
                  </Popup>
                </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>
      </Card>
    </Container>
  );
};

export default EventList;
