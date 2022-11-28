import React from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_EVENT } from "../utils/queries";

const SingleEvent = () => {
  const { eventId } = useParams();

  console.log("eventId: ", eventId);

  const { loading, data } = useQuery(QUERY_SINGLE_EVENT, {
    variables: { eventId: eventId },
  });

  const event = data?.event || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("query data: ", data);
  return (
    <div className="">
      <h3 className="">
        {event.creator} <br />
        <span style={{ fontSize: "1rem" }}>had this event on {event.date}</span>
      </h3>
      <div className="">
        <blockquote
          className="p-4"
          style={{
            fontSize: "1.5rem",
            fontStyle: "italic",
            border: "2px dotted #1a1a1a",
            lineHeight: "1.5",
          }}
        >
          {event.description}
        </blockquote>
      </div>
    </div>
  );
};

export default SingleEvent;
