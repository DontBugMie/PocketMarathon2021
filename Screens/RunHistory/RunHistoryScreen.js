import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CreateAccountScreen from "../CreateAccount/CreateAccountScreen";

const RunHistoryScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>RunHistoryScreen</Text>
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

export default RunHistoryScreen;