import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Container,
  Popup,
  Button,
  Header,
  Card,
} from "semantic-ui-react";

const UserList = ({ users }) => {
  console.log(users);
  if (!users.length) {
    return <h3>No users Yet</h3>;
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
            {users &&
              users.map((user) => (
                <Grid.Column width={5}>
                  <Popup
                    trigger={<Button>{user.username}</Button>}
                    flowing
                    hoverable
                  >
                    <Grid.Column textAlign="center">
                      <Header as="h4">ID: {user._id}</Header>
                      <p>{user.email}</p>
                      {/* TODO: Determine how to go to the user's page */}
                      <Link to={`/users/${user.username}`}>
                        <Button color="green">Scheduler's Events</Button>
                      </Link>
                      <Button color="red">Delete Scheduler</Button>
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

export default UserList;
