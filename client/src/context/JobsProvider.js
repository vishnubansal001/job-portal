import React, { createContext, useState } from 'react';

const JobsContext = createContext();

const JobsProvider = ({ children }) => {
  const [array, setArray] = useState([]);

  return (
    <JobsContext.Provider value={{ array, setArray }}>
      {children}
    </JobsContext.Provider>
  );
};

export { JobsContext, JobsProvider };