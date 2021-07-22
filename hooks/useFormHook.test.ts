import { act, renderHook } from "@testing-library/react-hooks/server";
import { useFormHook } from "./useFormHook";

const initialState = {
  username: "",
  password: "",
};

describe("useFormHook", () => {
  it("Test useFormHook is Init", () => {
    const {
      hydrate,
      result: { current },
    } = renderHook(() => useFormHook(initialState));

    hydrate();

    expect(current.state.username).toBe("");
    expect(current.state.password).toBe("");
  });

  it("Test useFormHook is Init", () => {
    const { hydrate, result } = renderHook(() => useFormHook(initialState));

    hydrate();

    act(() => {
      result.current.setValue("username", "TestingUser");
    });

    act(() => {
      result.current.setValue("password", "randomPasw00rd!");
    });

    expect(result.current.state.username).toBe("TestingUser");
    expect(result.current.state.password).toBe("randomPasw00rd!");
  });
});
