import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  // Modal,
} from "semantic-ui-react";

import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from '../utils/auth';

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  // const [showAlert, setShowAlert] = useState(false);
  const [login, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      // setShowModal(true);
    }

    setUserFormData({
      username: "",
      email: "",
      password: "",
    });

  }
  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          Log-in to your account
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
              disabled={!(userFormData.email && userFormData.password)}
              type="submit"
            >
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;