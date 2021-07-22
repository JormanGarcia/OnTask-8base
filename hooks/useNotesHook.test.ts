import { act, renderHook } from "@testing-library/react-hooks/server";
import { ICard } from "../models/card";
import { useNotesHook } from "./useNotesHook";

describe("useNotesHook", () => {
  const initialState: ICard[] = [
    {
      content: "Do Homework",
      group: "group1",
      id: "1",
      isCompleted: false,
      title: "Untilted",
    },
    {
      content: "Listen Music",
      group: "group2",
      id: "2",
      isCompleted: false,
      title: "Untilted",
    },
    {
      content: "Play footbal",
      group: "group1",
      id: "3",
      isCompleted: false,
      title: "Untilted",
    },
    {
      content: "Read a Book",
      group: "group1",
      id: "4",
      isCompleted: false,
      title: "Untilted",
    },
    {
      content: "Go to Run",
      group: "group2",
      id: "5",
      isCompleted: false,
      title: "Untilted",
    },
  ];

  it("is init?", () => {
    const { result } = renderHook(() => useNotesHook(initialState));

    expect(result.current.notes).toStrictEqual(initialState);
  });

  it("filter by group", () => {
    const { result } = renderHook(() => useNotesHook(initialState));

    expect(
      result.current.filterByGroup(result.current.notes, "group1")
    ).toStrictEqual(initialState.filter((note) => note.group === "group1"));
    expect(
      result.current.filterByGroup(result.current.notes, "group2")
    ).toStrictEqual(initialState.filter((note) => note.group === "group2"));
  });

  it("filter by group", () => {
    const { result } = renderHook(() => useNotesHook(initialState));

    expect(
      result.current.filterByGroup(result.current.notes, "group1")
    ).toStrictEqual(initialState.filter((note) => note.group === "group1"));
    expect(
      result.current.filterByGroup(result.current.notes, "group2")
    ).toStrictEqual(initialState.filter((note) => note.group === "group2"));
  });

  it("Search", () => {
    const search = "Read a";
    const { result } = renderHook(() => useNotesHook(initialState, search));

    expect(
      result.current.filterByGroup(result.current.notes, "group1")
    ).toStrictEqual([
      {
        content: "Read a Book",
        group: "group1",
        id: "4",
        isCompleted: false,
        title: "Untilted",
      },
    ]);
  });

  it("Set Title Value", () => {
    const { result, hydrate } = renderHook(() => useNotesHook(initialState));

    hydrate();

    act(() => {
      result.current.setTitle("1", "New Title");
    });

    expect(result.current.notes[0].title).toBe("New Title");
  });

  it("Set Content Value", () => {
    const { result, hydrate } = renderHook(() => useNotesHook(initialState));

    hydrate();

    act(() => {
      result.current.setNoteValue("New Content", "1");
    });

    expect(result.current.notes[0].content).toBe("New Content");
  });

  it("Set All Notes", () => {
    const { result, hydrate } = renderHook(() => useNotesHook(initialState));

    hydrate();

    act(() => {
      result.current.setNotes([]);
    });

    expect(result.current.notes).toStrictEqual([]);
  });
});
