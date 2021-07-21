import { getNoteGroups } from "./getNoteGroups";

test("Testing getNoteGroups", () => {
  const result = getNoteGroups([
    {
      _id: "1",
      content: "Random Content",
      group: "",
      title: "Random Title",
    },
    {
      _id: "2",
      content: "Random Content",
      group: "group",
      title: "Random Title",
    },
    {
      _id: "3",
      content: "Random Content",
      group: "group",
      title: "Random Title",
    },
    {
      _id: "1",
      content: "Random Content",
      group: "super-group",
      title: "Random Title",
    },
  ]);

  expect(result).toStrictEqual(["group", "super-group"]);
});
