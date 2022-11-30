import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Grid,
  Container,
  Header
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
    <main style={{Height: "100%", padding: "1em 0em"}}>
      <Container style={{ background: "#0d0d0d",margin: "10rem", color: "black" }}>
        <Grid celled columns="equal" divided="vertically">
          <Grid.Column columns={2}>
            <Grid.Row width={5}>
            <Header as="h2" color="blue" textAlign="center">
            Title: {event.title}
            </Header>
            <Header as="h2" color="blue" textAlign="center">
             Description: {event.description}            
            </Header>
            </Grid.Row>
          </Grid.Column>
        </Grid>
      </Container>
    </main>
  );
};

export default SingleEvent;
