import Card, {
  CardTitle,
  CardBody,
  Title,
  StatusIndicator,
  Check,
  Trash,
} from "../../components/core/Card";
import { Masonry } from "../../components/core/Masonry";
import { useMutationHook } from "../../hooks/useMutationHook";
import { useNotesHook } from "../../hooks/useNotesHook";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { client } from "../../ApolloClient";
import { GET_GROUP_NOTES, GET_NOTES } from "../../api/query";
import React, { useEffect } from "react";
import { useSearchContext } from "../../context/SearchContext";
import { FullViewWrapper } from "../../components/core/FullViewWrapper";
import { Typography } from "../../components/core/Typography";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("fetching...");

  const res = await client.query({
    query: GET_GROUP_NOTES,
    fetchPolicy: "no-cache",
    variables: {
      id: context.query.group,
    },
  });

  if (res.data.group === null) {
    return {
      props: {
        Notes: [],
        DataIsNull: true,
      },
    };
  }

  return {
    props: {
      Notes: res.data.group.tasks.items,
      DataIsNull: false,
    },
  };
};

const Group = ({
  Notes,
  DataIsNull,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { search } = useSearchContext();
  const { DeleteNote, UpdateNote, UpdateNoteStatus } = useMutationHook();

  const { notes, setTitle, setNoteValue, setNotes, hasBeenModified } =
    useNotesHook(Notes, search);

  useEffect(() => {
    setNotes(Notes);
  }, [Notes]);

  if (DataIsNull) {
    return (
      <div>
        <Typography variant="h2" colorized align="center" margin="300px 0 0 0">
          Group does not exist😢. Maybe somenthing is wrong in the url.
        </Typography>
      </div>
    );
  }

  return (
    <>
      <Masonry>
        {notes.map((note) => (
          <Card key={note.id}>
            <CardTitle>
              <StatusIndicator
                onClick={() => UpdateNoteStatus(note.id, !note.isCompleted)}
                isCompleted={note.isCompleted}
              />
              <Title
                value={note.title}
                onChange={(e) => setTitle(note.id, e.target.value)}
              />

              <Trash
                onClick={() => {
                  DeleteNote(note.id);
                }}
              />

              {hasBeenModified(note) && (
                <Check
                  onClick={() => {
                    UpdateNote(note.id, {
                      title: note.title,
                      content: note.content,
                    });
                  }}
                />
              )}
            </CardTitle>
            <CardBody
              value={note.content}
              onChange={(e) => setNoteValue(e.target.value, note.id)}
            />
          </Card>
        ))}
      </Masonry>
    </>
  );
};

export default Group;
