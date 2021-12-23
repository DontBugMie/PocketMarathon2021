import React, {useContext, useState} from 'react';
import { View, Text, StyleSheet, Button, TextInput, FlatList } from 'react-native';
import RunPaceContext from "../../Context/RunPaceContext";

import {PrimaryScreen} from "../Styles/AppStyles";


const AddRunElement = props => {

    const func = () => {

    };
    const {data, addRunPace} = useContext(RunPaceContext);
    return (
        <View style={[styles.runElementContainer, {display: props.hideAddRunPaceBtn}, PrimaryScreen]}>
            <Text>{props.g}</Text>
            <View /*style={{display: props.hideAddRunPaceBtn}}*/>
                <Button title="add RunPace"  onPress={ addRunPace } />
            </View>

            <FlatList data={data}
                      keyExtractor={(RunPace) => RunPace.title}
                      renderItem={({item}) => {
                return <Text>{item.title} </Text>
            }}/>

        </View>
    )
};

const styles = StyleSheet.create({
    runElementContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink'
    },
});
export default AddRunElement;
