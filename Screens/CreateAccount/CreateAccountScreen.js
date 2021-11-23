import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CreateAccountScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>CreateAccountScreen</Text>
            {/*<Button title="go to NewRunScreen" onPress={() => { props.navigation.navigate({routeName: ""})}}/>*/}
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

export default CreateAccountScreen;