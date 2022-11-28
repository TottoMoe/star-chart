import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Button, Form, Grid, Header, Segment } from "semantic-ui-react";
import { CREATE_EVENT } from "../../utils/mutations";
import { QUERY_EVENTS } from "../../utils/queries";

const EventForm = () => {
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    date: "",
  });

  const [addEvent, { error }] = useMutation(CREATE_EVENT, {
    update(cache, { data: { addEvent } }) {
      try {
        const { events } = cache.readQuery({ query: QUERY_EVENTS });

        cache.writeQuery({
          query: QUERY_EVENTS,
          data: { events: [addEvent, ...events] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addEvent({ variables: { ...formState } });

      setFormState({
        title: "",
        description: "",
        date: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  // TODO: Not sure how much of this we want to keep
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "thoughtText" && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== "thoughtText") {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="blue" textAlign="center">
          Make an Appointment
        </Header>
        <Form size="large" onSubmit={handleFormSubmit}>
          <Segment stacked>
            <Form.Input
              fluid
              icon="pencil alternate"
              type="text"
              iconPosition="left"
              name="title"
              placeholder="Title of your Appointment..."
              value={formState.title}
              onChange={handleChange}
              required
            />
            <Form.Input
              fluid
              icon="book"
              type="text"
              iconPosition="left"
              name="description"
              placeholder="Brief description of your Appointment..."
              value={formState.description}
              onChange={handleChange}
              required
            />
            <Form.Input
              fluid
              type="text"
              icon="calendar alternate"
              iconPosition="left"
              name="date"
              placeholder="Specify the start time of your appointment"
              value={formState.date}
              onChange={handleChange}
              required
            />

            <Button color="blue" fluid size="large" type="submit">
              Create new Appointment
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
      {error && <div>Something went wrong...</div>}
    </Grid>
  );
};

export default EventForm;
