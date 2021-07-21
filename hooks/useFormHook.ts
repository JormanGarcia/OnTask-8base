import { useState } from "react";

export function useFormHook<t>(initialState: t) {
  const [state, setState] = useState(initialState);

  const getProps = (name: keyof t) => ({
    value: state[name],
    onChange: (e: any) =>
      setState({
        ...state,
        [name]: e.target.value,
      }),
  });

  return { state, getProps };
}
