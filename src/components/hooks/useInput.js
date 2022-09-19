import { useState, useCallback } from "react";

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  const [toggle, setToggle] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  };

  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset, toggle];
}

export default useInputs;
