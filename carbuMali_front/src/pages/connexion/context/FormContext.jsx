// context/FormContext.js
import { createContext, useState, useContext } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({});
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
