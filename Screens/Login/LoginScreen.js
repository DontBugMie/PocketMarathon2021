import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CreateAccountScreen from "../CreateAccount/CreateAccountScreen";

const LoginScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>LoginScreen</Text>
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

export default LoginScreen;