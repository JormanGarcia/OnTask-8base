import {
  createContext,
  Dispatch,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type ISearchContext = {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<ISearchContext>({
  search: "",
  setSearch: () => {},
});

export const SearchContextProvider: FC = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);
