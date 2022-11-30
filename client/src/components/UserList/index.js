import React from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Container,
  // Popup,
  Button,
  Card,
  Header
} from "semantic-ui-react";

const UserList = ({ users }) => {
  console.log(users);
  if (!users.length) {
    return <h3>No users Yet</h3>;
  }

  return (
    <div>
    <Header as="h2" color="blue" textAlign="center" style={{ Height: "100%", padding: "5em 0em" }}>
          All Users
    </Header>
    <Container>
      <Card
        verticalAlign="middle"
        centered
        fluid
        style={{ background: "#0d0d0d"}}
      >
        <Grid celled columns="equal" divided="vertically">
          <Grid.Row>
            {users &&
              users.map((user) => (
                <Grid.Column width={5}>
                  {/* for future development <Popup
                    trigger={<Button>{user.username}</Button>}
                    flowing
                    hoverable
                  > */}
                    <Grid.Column textAlign="center">
                      <Link to={`/users/${user.username}`}>
                        <Button color="blue">{user.username}</Button>
                      </Link>
                      {/* <Button color="red">Delete Scheduler</Button> */}
                    </Grid.Column>
                  {/* </Popup> */}
                </Grid.Column>
              ))}
          </Grid.Row>
        </Grid>
      </Card>
    </Container>
    </div>
  );
};

export default UserList;
