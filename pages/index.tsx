import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    push("/notes");
  });

  return <div>Redirection To Notes...</div>;
}
