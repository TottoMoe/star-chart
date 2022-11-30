import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import {
  Grid,
  Container,
} from "semantic-ui-react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import EventList from "../components/EventList";
import { QUERY_USER } from "../utils/queries";

const UserPage = () => {
  const [value, onChange] = useState(new Date());
  const { username } = useParams();
  // Uncomment the following two lines if you wish to query the current user by default
  // const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
  //   variables: { username: userParam },
  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: username },
  });
  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("query data: ", data);
  return (
    <main style={{ Height: "100%", padding: "1em 0em" }}>
      <Container
        style={{ background: "#0d0d0d", margin: "10rem", color: "black" }}
      >
        <Grid centered celled columns="equal" divided="vertically">
          <Grid.Column columns={2}>
            <Grid.Row width={5}>
              <Header as="h2" color="blue" textAlign="center">
                {user.username}
              </Header>
              <Header as="h3" color="blue" textAlign="center">
                ID:{user._id}
              </Header>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column floated="right" width={10}>
            <Calendar onChange={onChange} value={value} />
          </Grid.Column>

          <Grid.Row>
            <EventList events={user.createdEvents} title="Event title..." />
          </Grid.Row>
        </Grid>
      </Container>
    </main>
  );
};

export default UserPage;
