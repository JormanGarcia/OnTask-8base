import { useReducer } from "react";

export interface IUserLogged {
  _id: string;
  name: { first: string; last: string };
}

export type IActionType =
  | {
      type: "LOGIN_USER";
      payload: IUserLogged;
    }
  | { type: "LOGOUT_USER"; payload?: null };

type IDispatch = (state: any, action: IActionType) => any;

export const reducer: IDispatch = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN_USER":
      return {
        user: payload,
      };
    case "LOGOUT_USER":
      return {
        user: null,
      };

    default:
      return state;
  }
};

export const useUserReducer = () => {
  const userReducer = useReducer(reducer, {
    user: null,
  });

  return userReducer;
};
