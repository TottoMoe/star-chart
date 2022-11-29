import React from "react";
import { Link } from "react-router-dom";
import { Grid, Popup, Button, Header } from "semantic-ui-react";

const EventList = ({ events }) => {
  console.log(events);
  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  return (
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
                  <Link to={`/users/${event.creator}`}>
                    <Header as="h4">Creator: {event.creator}</Header>
                  </Link>
                  <p>{event.description}</p>
                  <Button color="green">Reschedule</Button>
                  <Button color="red">Cancel</Button>
                  <Link to={`/events/${event._id}`}>
                    <Button color="blue">Details</Button>
                  </Link>
                </Grid.Column>
              </Popup>
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  );
};

export default EventList;
