import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CustomiseRunScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>NewRunScreen</Text>
            <View>
                <Button title="Customise Run" onPress={() => { props.navigation.navigate({routeName: "CustomiseRunScreen"})}}/>
                <Button title="Time"/>
                <View style={styles.speedButtonsContainer}>
                    <View style={[styles.speedButtonContainer,styles.speedButtonContainer1]}>
                        <Button title="Slow"/>
                    </View>
                    <View style={[styles.speedButtonContainer,styles.speedButtonContainer2]}>
                        <Button title="jog"/>
                    </View>
                    <View style={[styles.speedButtonContainer,styles.speedButtonContainer3]}>
                        <Button title="Sprint"/>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    speedButtonsContainer: {
        flexDirection: 'row'
    },
    speedButtonContainer: {
        padding: '3%',
        margin: '2%',
        width: '29%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
    speedButtonContainer1: {
        backgroundColor: 'green'
    },
    speedButtonContainer2: {
        backgroundColor: 'yellow'
    },
    speedButtonContainer3: {
        backgroundColor: 'red'
    },
});
export default CustomiseRunScreen;