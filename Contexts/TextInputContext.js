import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const TextInputContext = React.createContext();

export const PocketMarathonProvider = ({children}) => {

    // const RunPace = [{title: 'blog 1'},{title: 'blog 2'},{title: 'blog 3'}];

    const [RunPace, SetRunPace] = useState([]);

    const addRunPace = () => {
        SetRunPace([ ...RunPace, { title: `This is my new ${RunPace} + ${RunPace.length + 1}` }
        ]);
    };

    return <TextInputContext.Provider value={{data: RunPace, addRunPace}}>
        {children}
    </TextInputContext.Provider>
};

export default  TextInputContext;
