import React, { useState } from "react";
import { Button, Form, Grid, Header, Segment, Modal } from "semantic-ui-react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const SignupForm = () => {
  // set initial form state
  const [userFormData, setUserFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // set state for form validation
  const [validated] = useState(false);

  // set state to add user
  // const [showModal, setShowModal] = useState(false);
  const [addUser] = useMutation(ADD_USER);

  // call handleInputChange function to collect the input data
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything 
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      // event.stopPropagation();
    }

    try {
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log(data)
      Auth.login(data.createUser.token);
    } catch (err) {
      console.error(err);
      // setShowModal(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          Sign-up to your account
        </Header>
        <Form
          size="large"
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
        >
          {/* <Modal
            dismissible
            onClose={() => setShowModal(false)}
            show={showModal}
          >
            Something went wrong with your signup!
          </Modal> */}
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleInputChange}
              value={userFormData.username}
              required
            />
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              type="email"
              placeholder="E-mail address"
              name="email"
              onChange={handleInputChange}
              value={userFormData.email}
              required
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleInputChange}
              value={userFormData.password}
              required
            />

            <Button
              color="blue"
              fluid
              size="large"
              disabled={
                !(
                  userFormData.username &&
                  userFormData.email &&
                  userFormData.password
                )
              }
              type="submit"
            >
              Submit
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};
export default SignupForm;
