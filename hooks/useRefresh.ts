import { useRouter } from "next/router";

export const useRefresh = () => {
  const router = useRouter();

  const refreshRouter = () => {
    router.replace(router.asPath);
  };

  return {
    refreshRouter,
  };
};
