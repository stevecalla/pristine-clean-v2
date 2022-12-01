import { gql } from '@apollo/client';

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
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_AVAILABILITY = gql`
  mutation updateAvailability(
    $id: ID!
    $mondayAm: Boolean
    $mondayPm: Boolean
    $tuesdayAm: Boolean
    $tuesdayPm: Boolean
    $wednesdayAm: Boolean
    $wednesdayPm: Boolean
    $thursdayAm: Boolean
    $thursdayPm: Boolean
    $fridayAm: Boolean
    $fridayPm: Boolean
    $saturdayAm: Boolean
    $saturdayPm: Boolean
    $sundayAm: Boolean
    $sundayPm: Boolean
  ) {
    updateAvailability(
      _id: $id
      mondayAm: $mondayAm
      mondayPm: $mondayPm
      tuesdayAm: $tuesdayAm
      tuesdayPm: $tuesdayPm
      wednesdayAm: $wednesdayAm
      wednesdayPm: $wednesdayPm
      thursdayAm: $thursdayAm
      thursdayPm: $thursdayPm
      fridayAm: $fridayAm
      fridayPm: $fridayPm
      saturdayAm: $saturdayAm
      saturdayPm: $saturdayPm
      sundayAm: $sundayAm
      sundayPm: $sundayPm
    ) {
      _id
    }
  }
`;
