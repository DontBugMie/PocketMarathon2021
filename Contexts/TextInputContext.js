import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const TextInputContext = React.createContext();

export const PocketMarathonProvider = ({children}) => {

    // const RunPace = [{title: 'blog 1'},{title: 'blog 2'},{title: 'blog 3'}];
    const start = "Start"

    const [RunPace, SetRunPace] = useState(['hello', 'no' ]);

    const addRunPace = () => {
        SetRunPace([ { title: `${RunPace}`+ start}
        ]);
    };

    return <TextInputContext.Provider value={{data: RunPace, addRunPace}}>
        {children}
    </TextInputContext.Provider>
};

export default  TextInputContext;
