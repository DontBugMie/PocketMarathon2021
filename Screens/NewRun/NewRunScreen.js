import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';

const NewRunScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>NewRunScreen</Text>
            {/*<Button title="go to StartRunScreen" onPress={() => { props.navigation.navigate({routeName: "StartRunScreen"})}}/>*/}
            <View>
                <Button title="Customise Run" onPress={() => { props.navigation.navigate({routeName: "CustomiseRunScreen"})}}/>
            {/*    <Button title="Previous run session" onPress={() => { props.navigation.navigate({routeName: "CustomiseRunScreen"})}}/>*/}
            {/*    <Button title="Compete" onPress={() => { props.navigation.navigate({routeName: "CustomiseRunScreen"})}}/>*/}
            </View>
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
