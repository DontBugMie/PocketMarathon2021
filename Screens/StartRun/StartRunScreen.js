import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const StartRunScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>StartRunScreen</Text>
            <Button title="go to FinishRunScreen" onPress={() => { props.navigation.navigate({routeName: "FinishRunScreen"})}}/>
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

export default StartRunScreen;