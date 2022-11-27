import React from "react";

const EventList = ({ events: events = [] }) => {
  console.log(events);
  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        Appointments
      </h3>
      <div className="flex-row my-4">
        {events &&
          events.map((event) => (
            <div key={event._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  An anonymous user commented{" "}
                  <span style={{ fontSize: "0.825rem" }}>on {event.date}</span>
                </h5>
                <p className="card-body">{event.title}</p>
                <p className="card-body">{event.description}</p>
                <p className="card-body">{event.date}</p>
                <p className="card-body">{event.creatorId}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default EventList;
