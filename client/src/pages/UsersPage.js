import React from "react";
import { useQuery } from "@apollo/client";
import UserList from "../components/UserList";
import { QUERY_USERS } from "../utils/queries";

const Users = () => {
  const { loading, data } = useQuery(QUERY_USERS);
  const users = data?.users || [];

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("Data: ", data);
  console.log("users: ", users);

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
            <UserList users={users} title="Current Appointments." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Users;
