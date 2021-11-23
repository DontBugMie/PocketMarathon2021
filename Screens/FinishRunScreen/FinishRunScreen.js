import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const FinishRunScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>FinishRunScreen</Text>
            <Button title="go to HomeScreen" onPress={() => { props.navigation.navigate({routeName: "HomeScreen"})}}/>
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

export default FinishRunScreen;