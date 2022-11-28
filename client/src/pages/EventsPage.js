import React from "react";
import { useQuery } from "@apollo/client";
import EventList from "../components/EventList";
import { QUERY_EVENTS } from "../utils/queries";
import { Container, Card } from "semantic-ui-react";

const Events = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.events || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("Data: ", data);
  console.log("Events: ", events);

  return (
    <main>
      <Container style={{ Height: "100%", padding: "1em 0em" }}>
        <Card
          verticalAlign="middle"
          centered
          fluid
          style={{ background: "#0d0d0d", marginTop: "10rem" }}
        ></Card>
          <EventList events={events} title="Current Appointments." />
      </Container>
    </main>
  );
};

export default Events;
