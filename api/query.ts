import { gql } from "@apollo/client";

export const GET_NOTES = gql`
  query getNotes {
    tasksList {
      items {
        title
        content
        id
        isCompleted
        group {
          name
        }
      }
      count
    }
  }
`;

export const GET_GROUP_NAMES = gql`
  query getGroupsNames {
    groupsList {
      items {
        name
        id
      }
    }
  }
`;

export const GET_GROUP_NOTES = gql`
  query getGroupNotes($id: ID) {
    group(id: $id) {
      tasks {
        items {
          id
          title
          content
          isCompleted
        }
      }
    }
  }
`;
