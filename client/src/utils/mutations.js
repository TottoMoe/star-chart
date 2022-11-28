import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const CREATE_EVENT = gql`
  mutation createEvent(
    $title: String!
    $description: String!
    $date: String!
    $creator: String!
  ) {
    createEvent(
      title: $title
      description: $description
      date: $date
      creator: $creator
    ) {
      title
      description
      date
      creator
    }
  }
`;
