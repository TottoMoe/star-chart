import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { CREATE_EVENT } from '../../utils/mutations';
import { QUERY_EVENTS } from '../../utils/queries';

const EventForm = () => {
  const [formState, setFormState] = useState({
    title: '',
    description: '',
    date: '',
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
      await addEvent({variables: { ...formState },
      });

      setFormState({
        title: '',
        description: '',
        date: '',
      });
    } catch (err) {
      console.error(err);
    }
  };

  // TODO: Not sure how much of this we want to keep
  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'thoughtText' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
    } else if (name !== 'thoughtText') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
      <h3>Schedule an new Appointment.</h3>

      <form
        className=""
        onSubmit={handleFormSubmit}
      >
        <div className="">
          <textarea
            name="title"
            placeholder="Title of your Appointment..."
            value={formState.title}
            className="form-input"
            style={{ lineHeight: '1.5' }}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="">
          <input
            name="description"
            placeholder="Brief description of your Appointment..."
            value={formState.description}
            className="form-input"
            onChange={handleChange}
          />
        </div>
        <div className="">
          <input
            name="date"
            placeholder="Specify the start time of your appointment..."
            value={formState.date}
            className="form-input w-100"
            onChange={handleChange}
          />
        </div>

        <div className="">
          <button className="btn btn-primary btn-block" type="submit">
            Create new Appointment
          </button>
        </div>
        {error && (
          <div className="">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default EventForm;
