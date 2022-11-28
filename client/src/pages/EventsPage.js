import React from "react";
import { useQuery } from "@apollo/client";

import EventList from "../components/EventList";

import { QUERY_EVENTS } from "../utils/queries";

const Events = () => {
  const { loading, data } = useQuery(QUERY_EVENTS);
  const events = data?.events || [];

  console.log("Data: ", data);
  console.log("Events: ", events);

  return (
    <main>
      <div className="">
        {/* TODO: Uncomment for Event Form */}
        {/* <div
          className=""
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <EventForm />
        </div> */}
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EventList events={events} title="Current Appointments." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Events;
