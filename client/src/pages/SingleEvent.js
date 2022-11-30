import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Grid,
  Segment,
  Container,
} from "semantic-ui-react";
import { QUERY_SINGLE_EVENT } from "../utils/queries";

const SingleEvent = () => {
  const { eventId } = useParams();

  console.log("eventId: ", eventId);

  const { loading, data } = useQuery(QUERY_SINGLE_EVENT, {
    variables: { eventId: eventId },
  });

  const event = data?.event || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("query data: ", data);
  return (
    <main>
      <Container style={{ marginTop: "10rem", backgroundColor: "black", margin: "3rem", color: "black" }}>
        <Grid celled columns="equal" divided="vertically">
          <Grid.Column columns={2}>
            <Grid.Row width={5}>
              <Segment>{event.title}</Segment>
              <Segment>Description: {event.description}</Segment>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    </main>
  );
};

export default SingleEvent;
