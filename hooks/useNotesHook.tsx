import { ICard } from "../models/card";
import { useState } from "react";

export const useNotesHook = (state: ICard[], search: string = "") => {
  const [notes, setNotesArray] = useState(state);
  const [notesRecord, setNotesRecord] = useState(state);

  const setNotes = (notesToSet: ICard[]) => {
    setNotesArray(notesToSet);
    setNotesRecord(notesToSet);
  };

  const filteredNotes = (toFilterNotes: ICard[], toSearch: string) => {
    if (toFilterNotes.length === 0) return [];
    return toFilterNotes.filter(
      ({ title, content }) =>
        content.includes(toSearch) || title.includes(toSearch)
    );
  };

  const setTitle = async (_id: string, title: string) => {
    setNotesArray(
      notes.map((card) => {
        if (card.id === _id) {
          return {
            ...card,
            title,
          };
        }
        return card;
      })
    );
  };

  const filterByGroup = (notes: ICard[], group: string) => {
    if (notes.length === 0) return [];

    return notes.filter((note) => note.group === group);
  };

  const setNoteValue = async (content: string, _id: string) => {
    setNotesArray(
      notes.map((card) => {
        if (card.id === _id) {
          return {
            ...card,
            content,
          };
        }
        return card;
      })
    );
  };

  const hasBeenModified = (note: ICard) => {
    const prevNote = notesRecord.find((_note) => _note.id === note.id);

    return prevNote?.title !== note.title || prevNote?.content !== note.content;
  };

  return {
    notes: filteredNotes(notes, search),
    setNoteValue,
    setNotes,
    filterByGroup,
    setTitle,
    hasBeenModified,
  };
};
