import React from "react";

const EventList = ({ events }) => {
  console.log(events);
  if (!events.length) {
    return <h3>No Events Yet</h3>;
  }

  return (
    <div>
      <h3
        className=""
        style={{ borderBottom: "1px dotted #1a1a1a" }}
      >
        Appointments
      </h3>
      <div className="flex-row my-4">
        {events &&
          events.map((event) => (
            <div key={event._id} className="">
              <div className="">
                <h5 className="">
                  An anonymous user commented{" "}
                  <span style={{ fontSize: "0.825rem" }}>on {event.date}</span>
                </h5>
                <p className="">{event.title}</p>
                <p className="">{event.description}</p>
                <p className="">{event.date}</p>
                <p className="">{event.creatorId}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default EventList;
