import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import {MixedBlueColor} from "../../Components/Styles/AppStyles";
import {MixedGreenColor} from "../../Components/Styles/AppStyles";


const CustomiseRunScreen = props => {

    const [speedBtnWalkBackgroundColorState, speedBtnWalkBackgroundColorSetState] = useState('green');
    const [speedBtnWalkWidthState, speedBtnWalkWidthSetState] = useState()
    const [speedbtnWalkHoursTextInput, speedBtnWalkSetHoursTextInput]= useState('00');
    const [speedbtnWalkMinsTextInput, speedBtnWalkSetMinsTextInput]= useState('00');
    const [speedbtnWalkSecsTextInput, speedBtnWalkSetSecsTextInput]= useState('00');
    const [speedBtnWalkTextInputHeight, speedBtnWalkTextInputSetHeight] = useState(40);

    const [timerDistanceContainerShow, timerDistanceContainerHide] = useState('block');
    const [speedButtonContainerHide, speedButtonContainerShow] = useState('none');

    const slowBtnPressed = () => {
        speedBtnWalkBackgroundColorSetState('yellow');
        speedBtnWalkWidthSetState('100%');
        speedBtnWalkTextInputSetHeight(30);
    };

    const addTimerPressed = () => {
        timerDistanceContainerHide('none');
        speedButtonContainerShow('block');
    };

    return (
        <View style={styles.screen}>

            <View style={styles.customiseRunScreenButtonsContainer}>
                <TouchableOpacity onPress={addTimerPressed}>
                    <View style={[styles.timerDistanceContainer, {display: timerDistanceContainerShow}]}>
                        <View style={styles.linearGradientStyleContainer}>
                            <LinearGradient
                                elevation={5}s
                                colors={MixedBlueColor}
                                start={{ x: 0, y: 0}}
                                end={{ x: 1, y: 0.9 }}
                                style={styles.linearGradientStyle}
                            >
                                <Button title="add timer"/>
                            </LinearGradient>
                        </View>



                    <View style={styles.linearGradientStyleContainer}>
                        <LinearGradient
                            colors={MixedGreenColor}
                            start={{ x: 0, y: 0}}
                            end={{ x: 1, y: 0.9 }}
                            style={styles.linearGradientStyle}>
                            <Button title="add distance"/>
                        </LinearGradient>
                    </View>
                </View>
                </TouchableOpacity>

                <View style={styles.speedButtonsContainer}>



                    <View style={[styles.speedButtonContainer,styles.speedButtonContainerWalk, { backgroundColor: speedBtnWalkBackgroundColorState }, { width: speedBtnWalkWidthState}, {display: speedButtonContainerHide}]}>
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

                            <Text>{speedbtnWalkHoursTextInput}</Text>
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
    customiseRunScreenButtonsContainer: {
        alignItems: 'center'
    },
    timerDistanceContainer: {
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3,

        elevation: 8,
    },
    linearGradientStyleContainer:{
        borderRadius: 60,
        borderWidth:1,
        borderColor: '#C0C0C0',
        textAlignVertical:'center',
        overflow: 'hidden',
        margin:5
    },
    linearGradientStyle:{
        padding:10,
    },
    speedButtonsContainer: {
        flexDirection: 'row'
    },
    timerDistanceBtnContainer:{
        borderWidth: 1,
        borderRadius: 160,
        margin: 5,
        padding: 5,
    },
    speedButtonContainer: {
        padding: '3%',
        margin: '2%',
        // width: '29%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
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
