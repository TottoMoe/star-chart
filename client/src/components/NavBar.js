import React from "react";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Link to="/Home">
            <Menu.Item as="a" header>
              {/* <Image size='mini' src='' style={{marginRight: '1.5rem'}}/> <<<<needs image>>>> */}
              Star Chart
            </Menu.Item>
          </Link>

          <Link to="/Login">
            <Menu.Item as="a">Login</Menu.Item>
          </Link>
             
          <Link to="/SignupForm">
            <Menu.Item as="a">Signup</Menu.Item>
          </Link>
          
          <Link to="/Users">
            <Menu.Item as="a">Users</Menu.Item>
          </Link>

          <Link to="/Events">
            <Menu.Item as="a">Events</Menu.Item>
          </Link>

          <Link to="/EventForm">
            <Menu.Item as="a">Create Event</Menu.Item>
          </Link>
        </Container>
      </Menu>
    </div>
  );
};

export default NavBar;
