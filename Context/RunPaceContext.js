import React from 'react';

const RunPaceContext = React.createContext();

export const RunProvider = ({children}) => {
    return <RunPaceContext.Provider value={789}>
        {children}
    </RunPaceContext.Provider>
};

export default  RunPaceContext;
