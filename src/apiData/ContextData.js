// ContextData.js
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [questions, setQuestion] = useState([]);  // Array to store multiple questions

  const addQuestion = (newQuestion) => {
    setQuestion(prevQuestions => [...prevQuestions, newQuestion]);
  };

  return (
    <MyContext.Provider value={{ questions, addQuestion }}>
      {children}
    </MyContext.Provider>
  );
};
