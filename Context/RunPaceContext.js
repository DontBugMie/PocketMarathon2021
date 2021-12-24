import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const RunPaceContext = React.createContext();

export const RunProvider = ({children}) => {

    // const RunPace = [{title: 'blog 1'},{title: 'blog 2'},{title: 'blog 3'}];

    const [RunPace, SetRunPace] = useState([]);

    const addRunPace = () => {
        SetRunPace([ ...RunPace, { title: `This is my new ${RunPace} + ${RunPace.length + 1}` }
        ]);
    };

    return <RunPaceContext.Provider value={{data: RunPace, addRunPace}}>
        {children}
    </RunPaceContext.Provider>
};

export default  RunPaceContext;
