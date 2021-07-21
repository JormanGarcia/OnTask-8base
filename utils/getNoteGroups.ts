import { ICard } from "../models/card";

export const getNoteGroups = (notes: ICard[]) => {
  return notes.reduce((prev: string[], item, i, array) => {
    if (item.group !== "" && !prev.includes(item.group)) {
      prev.push(item.group);
    }

    return prev;
  }, []);
};
