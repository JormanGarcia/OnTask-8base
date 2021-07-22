import { useState } from "react";

export function useFormHook<t>(initialState: t) {
  const [state, setState] = useState(initialState);

  const setValue = (name: keyof t, value: string) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const getProps = (name: keyof t) => ({
    value: state[name],
    onChange: (e: any) => setValue(name, e.target.value),
  });

  return { state, getProps, setValue };
}
