import { useState } from "react";
export const useInput = () => {
  const [input, setInputValue] = useState("");
  function handleInputChange(e) {
    setInputValue(e.target.value.trim());
  }
  function reset() {
    setInputValue("");
  }
  return [input, handleInputChange, reset];
};
