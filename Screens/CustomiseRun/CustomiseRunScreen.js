import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CustomiseRunScreen = props => {

    const slowBtnPressed = () => {
        console.log('heloo')
    };

    return (
        <View style={styles.screen}>
            <Text>NewRunScreen</Text>
            <View style={styles.customiseRunScreenButtonsContainer}>
                <Button title="Customise Run" onPress={() => { props.navigation.navigate({routeName: "CustomiseRunScreen"})}}/>
                <Button title="Time"/>
                <View style={styles.speedButtonsContainer}>
                    <View style={[styles.speedButtonContainer,styles.speedButtonContainer1]}>
                        <Button title="Slow" onPress={slowBtnPressed}/>
                    </View>
                    <View style={[styles.speedButtonContainer,styles.speedButtonContainer2]}>
                        <Button title="Jog"/>
                    </View>
                    <View style={[styles.speedButtonContainer,styles.speedButtonContainer3]}>
                        <Button title="Sprint"/>
                    </View>
                </View>
                <View style={[styles.addCancelButtonContainer]}>
                    <View style={[styles.speedButtonContainer]}>
                        <Button title="Add"/>
                    </View>
                    <View style={[styles.speedButtonContainer]}>
                        <Button title="Cancel"/>
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
    customiseRunScreenButtonsContainer: {
        alignItems: 'center'
    },
    addCancelButtonContainer: {
        display: "flex",
        flexDirection: 'row',
        alignContent: 'center'
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