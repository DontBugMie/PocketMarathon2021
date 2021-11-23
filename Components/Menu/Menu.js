import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const MenuScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Menu</Text>
            <Button title="go to HomeScreen" onPress={() => { props.navigation.navigate({routeName: "NewRunScreen"})}}/>
            <Button title="go to LoginScreen" onPress={() => { props.navigation.navigate({routeName: "LoginScreen"})}}/>
            <Button title="go to CreateAccountScreen" onPress={() => { props.navigation.navigate({routeName: "CreateAccountScreen"})}}/>
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

export default MenuScreen;