import React from "react";
import { useQuery } from "@apollo/client";
import EventList from "../components/EventList";
import { QUERY_EVENTS } from "../utils/queries";
import { Container, Card} from "semantic-ui-react";
const Events = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.events || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("Data: ", data);
  console.log("Events: ", events);

  return (
    <main style={{ Height: "100%", padding: "1em 0em" }}>
      <Container style={{ marginTop: "10rem" }}>
        <Card
          verticalAlign="middle"
          centered
          fluid
        ></Card>
          <EventList events={events} title="Current Appointments." />
      </Container>
    </main>
  );
};

export default Events;
