import { useMutation } from "@apollo/client";
import {
  ADD_NOTE,
  ADD_NOTE_ON_GROUP,
  CREATE_GROUP,
  DELETE_NOTE,
  UPDATE_NOTE,
  UPDATE_STATUS,
} from "../api/mutation";
import { useRefresh } from "./useRefresh";

export const useMutationHook = () => {
  const [dispatchNote, newNote] = useMutation(ADD_NOTE);
  const [dispatchNoteOnGroup, newNoteGroup] = useMutation(ADD_NOTE_ON_GROUP);
  const [dispatchDeletedNote, deletedNote] = useMutation(DELETE_NOTE);
  const [dispatchUpdateNote, updateNote] = useMutation(UPDATE_NOTE);
  const [dispatchGroup, newGroup] = useMutation(CREATE_GROUP);
  const [dispatchUpdateStatus, updateStatus] = useMutation(UPDATE_STATUS);

  const { refreshRouter } = useRefresh();

  const AddNote = async () => {
    const response = await dispatchNote();
    refreshRouter();
    return response;
  };

  const AddNoteOnGroup = async (id: string | string[]) => {
    const response = await dispatchNoteOnGroup({
      variables: {
        id,
      },
    });
    refreshRouter();
    return response;
  };

  const AddGroup = async (name: string) => {
    const response = await dispatchGroup({
      variables: {
        name,
      },
    });
    return response;
  };

  const DeleteNote = async (id: string) => {
    const response = await dispatchDeletedNote({
      variables: {
        id,
      },
    });

    refreshRouter();
  };

  const UpdateNote = async (
    id: string,
    { title, content }: { title: string; content: string }
  ) => {
    const response = await dispatchUpdateNote({
      variables: {
        id,
        title,
        content,
      },
    });

    refreshRouter();
  };

  const UpdateNoteStatus = async (id: string, status: boolean) => {
    const response = await dispatchUpdateStatus({
      variables: {
        id,
        status,
      },
    });

    refreshRouter();
  };

  return {
    AddNote,
    DeleteNote,
    UpdateNote,
    AddGroup,
    UpdateNoteStatus,
    AddNoteOnGroup,
  };
};
