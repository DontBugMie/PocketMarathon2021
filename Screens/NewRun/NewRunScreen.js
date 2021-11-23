import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const NewRunScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>NewRunScreen</Text>
            <Button title="go to StartRunScreen" onPress={() => { props.navigation.navigate({routeName: "StartRunScreen"})}}/>
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

export default NewRunScreen;