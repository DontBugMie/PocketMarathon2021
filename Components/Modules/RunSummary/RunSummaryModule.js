import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import RunPaceContext from "../../Context/RunPaceContext";
import {PrimaryScreen} from "../Styles/AppStyles";

const RunSummary = props => {

    const {data, addRunPace} = useContext(RunPaceContext);

    return (
        <View style={[styles.runElementContainer, {display: props.hideAddRunPaceBtn}, PrimaryScreen]}>
            <Text>{props.titleSummary}</Text>
            <View>
                <Button title="add RunPace"  onPress={ addRunPace } />
            </View>

            <FlatList data={data}
                      keyExtractor={(RunPace) => RunPace.title}
                      renderItem={({item}) => {
                return <Text>{item.title} {props.speedbtnWalkHoursTextInput} </Text>
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

export default RunSummary;
