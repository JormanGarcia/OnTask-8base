import Card, {
  CardTitle,
  CardBody,
  Title,
  Check,
  StatusIndicator,
  Trash,
} from "../../components/core/Card";
import { Masonry } from "../../components/core/Masonry";
import { useSearchContext } from "../../context/SearchContext";
import { useMutationHook } from "../../hooks/useMutationHook";
import { useNotesHook } from "../../hooks/useNotesHook";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { client } from "../../ApolloClient";
import { GET_NOTES } from "../../api/query";
import { useEffect } from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log("fetching...");

  const res = await client.query({
    query: GET_NOTES,
    fetchPolicy: "no-cache",
  });

  return {
    props: {
      Notes: res.data.tasksList.items,
    },
  };
};

const Home = ({
  Notes,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { search } = useSearchContext();
  const { DeleteNote, UpdateNote, UpdateNoteStatus } = useMutationHook();

  const { notes, setTitle, setNoteValue, setNotes, hasBeenModified } =
    useNotesHook(Notes, search);

  useEffect(() => {
    setNotes(Notes);
  }, [Notes]);

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

export default Home;
