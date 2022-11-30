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
    <div>
    
        <div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <UserList users={users} title="Current Appointments." />
          )}
        </div>
      </div>
    
  );
};

export default Users;
