import { gql } from "@apollo/client";

export const ADD_NOTE = gql`
  mutation noteCreate {
    taskCreate(data: { content: "", title: "untilted" }) {
      content
      id
      title
    }
  }
`;

export const ADD_NOTE_ON_GROUP = gql`
  mutation createNoteOnGroup($id: ID) {
    taskCreate(data: { content: "", group: { connect: { id: $id } } }) {
      id
    }
  }
`;

export const CREATE_GROUP = gql`
  mutation groupCreate($name: String) {
    groupCreate(data: { name: $name }) {
      name
      id
    }
  }
`;

export const UPDATE_NOTE = gql`
  mutation UpdateNote($id: ID, $title: String, $content: String) {
    taskUpdate(
      filter: { id: $id }
      data: { title: $title, content: $content }
    ) {
      title
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation noteDelete($id: ID) {
    taskDelete(data: { id: $id }) {
      success
    }
  }
`;

// CUSTOM RESOLVER 👇

export const UPDATE_STATUS = gql`
  mutation UpdateStatus($id: String!, $status: Boolean!) {
    UpdateStatus(id: $id, status: $status) {
      result
    }
  }
`;
