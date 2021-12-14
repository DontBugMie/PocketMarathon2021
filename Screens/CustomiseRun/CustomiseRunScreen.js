import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

const CustomiseRunScreen = props => {

    const [speedBtnWalkBackgroundColorState, speedBtnWalkBackgroundColorSetState] = useState('green');
    const [speedBtnWalkWidthState, speedBtnWalkWidthSetState] = useState()
    const [speedbtnWalkHoursTextInput, speedBtnWalkSetHoursTextInput]= useState('00');
    const [speedbtnWalkMinsTextInput, speedBtnWalkSetMinsTextInput]= useState('00');
    const [speedbtnWalkSecsTextInput, speedBtnWalkSetSecsTextInput]= useState('00');
    const [speedBtnWalkTextInputHeight, speedBtnWalkTextInputSetHeight] = useState(40);

    const slowBtnPressed = () => {
        speedBtnWalkBackgroundColorSetState('yellow');
        speedBtnWalkWidthSetState('100%');
        speedBtnWalkTextInputSetHeight(30);
    };

    return (
        <View style={styles.screen}>
            <Text>NewRunScreen</Text>
            <View style={styles.customiseRunScreenButtonsContainer}>
                <Button title="Customise Run" onPress={() => { props.navigation.navigate({routeName: "CustomiseRunScreen"})}}/>
                <Button title="Time"/>
                <View style={styles.speedButtonsContainer}>



                    <View style={[styles.speedButtonContainer,styles.speedButtonContainerWalk, { backgroundColor: speedBtnWalkBackgroundColorState }, { width: speedBtnWalkWidthState}]}>
                        <Button title="Slow" onPress={slowBtnPressed}/>
                        <View style={styles.speedBtnTimeDistanceTextContainer}>
                            <TextInput
                                style={[styles.speedButtonContainerWalkOnPress, styles.speedBtnTimeDistanceText, { height: speedBtnWalkTextInputHeight }]}
                                onChangeText={speedBtnWalkSetHoursTextInput}
                                placeholder={speedbtnWalkHoursTextInput}
                            />
                            <Text>
                                :
                            </Text>
                            <TextInput
                                style={[styles.speedButtonContainerWalkOnPress, styles.speedBtnTimeDistanceText, { height: speedBtnWalkTextInputHeight }]}
                                onChangeText={speedBtnWalkSetMinsTextInput}
                                placeholder={speedbtnWalkMinsTextInput}
                            />
                            <Text>
                                :
                            </Text>
                            <TextInput
                                style={[styles.speedButtonContainerWalkOnPress, styles.speedBtnTimeDistanceText, { height: speedBtnWalkTextInputHeight }]}
                                onChangeText={speedBtnWalkSetSecsTextInput}
                                placeholder={speedbtnWalkSecsTextInput}
                            />
                        </View>
                    </View>






                    {/*<View style={[styles.speedButtonContainer,styles.speedButtonContainer2]}>*/}
                    {/*    <Button title="Jog"/>*/}
                    {/*</View>*/}
                    {/*<View style={[styles.speedButtonContainer,styles.speedButtonContainer3]}>*/}
                    {/*    <Button title="Sprint"/>*/}
                    {/*</View>*/}
                </View>
                <View style={[styles.addCancelButtonContainer]}>
                    <View style={[styles.speedButtonContainer]}>
                        <Button title="Add"/>
                    </View>
                    <View style={[styles.speedButtonContainer]}>
                        <Button title="Cancel"/>
                    </View>
                </View>


                <View>
                    <Text>Run Plan</Text>
                    <View>
                        <View>
                            
                        </View>
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
        // width: '29%',
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
    speedButtonContainerWalk: {
        backgroundColor: 'green'
    },
    speedButtonContainerWalkOnPress: {
        backgroundColor: 'white',
    },
    speedBtnTimeDistanceTextContainer:{
        flexDirection: 'row',
        margin: 5,
        justifyContent:'center'
    },
    speedBtnTimeDistanceText:{
        padding: 1,
        borderWidth: 1,
        borderRadius: 5,
    },
    speedButtonContainer2: {
        backgroundColor: 'yellow'
    },
    speedButtonContainer3: {
        backgroundColor: 'red',
    },
});
export default CustomiseRunScreen;