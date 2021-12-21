import React from 'react';

const RunPaceContext = React.createContext();

export const RunProvider = ({children}) => {
    return <RunPaceContext.Provider>
        {children}
    </RunPaceContext.Provider>
}
