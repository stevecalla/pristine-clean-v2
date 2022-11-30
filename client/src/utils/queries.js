import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me($id: ID!) {
    me(_id: $id) {
      _id
    username
    email
    firstName
    isManager
    lastName
    availability {
      mondayAm
      mondayPm
      tuesdayAm
      tuesdayPm
      wednesdayAm
      wednesdayPm
      thursdayAm
      thursdayPm
      fridayAm
      fridayPm
      saturdayAm
      saturdayPm
      sundayAm
      sundayPm
    }
    locations {
      _id
      businessName
      address
      shifts
      laborHours
      instructions {
        facilityType
        cleaningType
        bathrooms
        lobby
        sittingArea
        breakRoom
        frontdesk
        appliances
        dusting
        windows
        trash
        vacuum
        mop
        additionalServices
        exclusions
      }
    }
  }
}
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      thoughtAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_LOCATION = gql`
  query getSingleLocation($locationId: ID!) {
    location(locationId: $locationId) {
      _id
      businessName
      address
    }
  }
`;

export const QUERY_LOCATIONS = gql`
  query allLocations {
    locations {
      _id
      businessName
      address
      days
      laborHours
      instructions
      manager
      cleaners
    }
  }
`;

// export const QUERY_SINGLE_LOCATION = gql`
//   query singleLocation($locationId: ID!) {
//     location(locationId: $locationId) {
//       _id
//       name
//       skills
//     }
//   }
// `;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      _id
    username
    email
    password
    firstName
    lastName
    cell
    isManager
    availability {
      mondayAm
      mondayPm
      tuesdayAm
      tuesdayPm
      wednesdayAm
      wednesdayPm
      thursdayAm
      thursdayPm
      fridayAm
      fridayPm
      saturdayAm
      saturdayPm
      sundayAm
      sundayPm
    }}
  }
`;

export const QUERY_SINGLE_EMPLOYEE = gql`
  query singleEmployee($employeeId: ID!) {
    employee(employeeId: $employeeId) {
      _id
      name
      skills
    }
  }
`;
