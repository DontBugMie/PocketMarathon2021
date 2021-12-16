import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';



const AddRunElement = props => {

    const func = () => {

    };

    return (
        <View style={styles.runElementContainer}>
            <Text>{props.g}</Text>

        </View>
    )
};

const styles = StyleSheet.create({
    runElementContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
});
export default AddRunElement;
