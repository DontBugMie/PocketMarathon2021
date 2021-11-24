import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = props => {
    console.log(props);

    return (
        <View style={styles.screen}>
            <Text>HomeScreen</Text>
            <Button title="go to NewRunScreen" onPress={() => { props.navigation.navigate({routeName: "NewRunScreen"})}}/>
            {/*<Button title="go to MenuScreen" onPress={() => { props.navigation.navigate({routeName: "MenuScreen"})}}/>*/}
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

export default HomeScreen;