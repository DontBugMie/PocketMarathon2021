import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CreateAccountScreen from "../CreateAccount/CreateAccountScreen";

const RunHistoryIndividualItemScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>PreviousScreen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default RunHistoryIndividualItemScreen;