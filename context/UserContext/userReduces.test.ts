import { reducer, useUserReducer } from "./userReducer";
import { renderHook, act } from "@testing-library/react-hooks/server";
import { useReducer } from "react";

describe("Testing Reducer", () => {
  it("Testing UserReducer Login", () => {
    const { result, hydrate } = renderHook(() =>
      useReducer(reducer, { user: null })
    );

    hydrate();

    const user = {
      _id: "1",
      name: {
        first: "Jorman",
        last: "Garcia",
      },
    };

    act(() => {
      result.current[1]({
        type: "LOGIN_USER",
        payload: user,
      });
    });

    expect(result.current[0].user).toBe(user);

    act(() => {
      result.current[1]({
        type: "LOGOUT_USER",
      });
    });

    expect(result.current[0].user).toBeNull();
  });
});
