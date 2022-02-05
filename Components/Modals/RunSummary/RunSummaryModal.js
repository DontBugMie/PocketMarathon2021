import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button, FlatList, ScrollView } from 'react-native';
import TextInputContext from "../../../Contexts/TextInputContext";
import {PrimaryScreen} from "../../Styles/AppStyles";

const RunSummaryModal = props => {

    const {data, addRunPace} = useContext(TextInputContext);





    return (
        <View style={[styles.runElementContainer, {display: props.hideAddRunPaceBtn}, PrimaryScreen]}>
            <Text>{props.titleSummary}</Text>
            <View>
                <Button title="add RunPace"  onPress={ addRunPace } />
            </View>

            <FlatList data={data}
            horizontal={true}
            style={{backgroundColor:'yellow', flexDirection:'row'}}
                      keyExtractor={(RunPace) => RunPace.title}
                      renderItem={({item}) => {
                return <View style={{backgroundColor:'purple', margin:1}}><Text>{item.title} {props.speedbtnWalkHoursTextInput} | Start</Text></View>
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

export default RunSummaryModal;
