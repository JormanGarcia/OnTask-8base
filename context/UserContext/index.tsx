import { Dispatch } from "react";
import { createContext, FC, useContext } from "react";
import { IActionType, IUserLogged, useUserReducer } from "./userReducer";

interface IUserContext {
  state: {
    user: null | IUserLogged;
  };
  dispatch: Dispatch<IActionType> | (() => void);
}

const UserContext = createContext<IUserContext>({
  state: {
    user: null,
  },
  dispatch: () => console.log(undefined),
});

export const UserContextProvider: FC = ({ children }) => {
  const [state, dispatch] = useUserReducer();

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
