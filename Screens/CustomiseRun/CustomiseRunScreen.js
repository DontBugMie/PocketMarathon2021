import React, { useState, useRef, useContext } from 'react';
import {View, Text, StyleSheet, Button, TextInput, TouchableOpacity, Animated, FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {MixedBlueColor} from "../../Components/Styles/AppStyles";
import {MixedGreenColor} from "../../Components/Styles/AppStyles";
import {PrimaryScreen} from "../../Components/Styles/AppStyles";
import PaceButton from "../../Components/PaceButton/PaceButton";
import RunSummary from "../../Components/Modules/RunSummary/RunSummaryModule";
import TimerPaceButtonsModule from "../../Components/Modules/PaceButtonsModules/TimerPaceButtonsModule";

const CustomiseRunScreen = props => {

    const [speedBtnWalkBackgroundColorState, speedBtnWalkBackgroundColorSetState] = useState('green');
    const [speedBtnWalkWidthState, speedBtnWalkWidthSetState] = useState()
    const [speedbtnWalkHoursTextInput, speedBtnWalkSetHoursTextInput]= useState('00');
    const [speedbtnWalkMinsTextInput, speedBtnWalkSetMinsTextInput]= useState('00');
    const [speedbtnWalkSecsTextInput, speedBtnWalkSetSecsTextInput]= useState('00');
    const [speedBtnWalkTextInputHeight, speedBtnWalkTextInputSetHeight] = useState(40);

    const [timerDistanceContainerShow, timerDistanceContainerHide] = useState('block');
    const [speedButtonContainerHide, speedButtonContainerShow] = useState('none');
    const [addCancelButtonContainerHide, addCancelButtonContainerShow] = useState('none');

    const [hideAddRunPaceBtn, showAddRunPaceBtn] = useState('none');

    const [hideTimerPaceButtonModule, showTimerPaceButtonModule] = useState('none');
    const [hidePaceBtnsContainerVisibility, showPaceBtnsContainerVisibility]=useState(false)

    const slowBtnPressed = () => {
        speedBtnWalkBackgroundColorSetState('yellow');
        speedBtnWalkWidthSetState('100%');
        speedBtnWalkTextInputSetHeight(30);
    };

    const timerBtnPressed = () => {
        timerDistanceContainerHide('none');
        speedButtonContainerShow('block');
        addCancelButtonContainerShow('block');
        showAddRunPaceBtn('block');
        showTimerPaceButtonModule('block');
        showPaceBtnsContainerVisibility(true)
    };

    return (
        <View style={PrimaryScreen}>
            <View style={styles.customiseRunScreenButtonsContainer}>
                    <View  style={[styles.timerDistanceContainer, {display: timerDistanceContainerShow}]}>
                        <TouchableOpacity onPress={timerBtnPressed} style={styles.linearGradientStyleContainer}>
                            <LinearGradient
                                elevation={5}
                                colors={MixedBlueColor}
                                start={{ x: 0, y: 0}}
                                end={{ x: 1, y: 0.9 }}
                                style={styles.linearGradientStyle}
                            >
                                <Button title="Timer"/>
                            </LinearGradient>
                        </TouchableOpacity>

                    <TouchableOpacity style={styles.linearGradientStyleContainer}>
                        <LinearGradient
                            colors={MixedGreenColor}
                            start={{ x: 0, y: 0}}
                            end={{ x: 1, y: 0.9 }}
                            style={styles.linearGradientStyle}>
                            <Button title="Distance"/>
                        </LinearGradient>
                    </TouchableOpacity> 
                </View>


                <TimerPaceButtonsModule paceBtnsContainerVisibility={hidePaceBtnsContainerVisibility} />
            

               
                




                {/* <View style={styles.speedButtonsContainer}> */}
                    {/* <View style={[styles.speedButtonContainer,styles.speedButtonContainerWalk, { backgroundColor: speedBtnWalkBackgroundColorState }, { width: speedBtnWalkWidthState}, {display: speedButtonContainerHide}]}>
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
                    </View> */}






                    {/*<View style={[styles.speedButtonContainer,styles.speedButtonContainer2]}>*/}
                    {/*    <Button title="Jog"/>*/}
                    {/*</View>*/}
                    {/*<View style={[styles.speedButtonContainer,styles.speedButtonContainer3]}>*/}
                    {/*    <Button title="Sprint"/>*/}
                    {/*</View>*/}
                {/* </View> 
                <View style={[styles.addCancelButtonContainer, {display: addCancelButtonContainerHide}]}>
                    <View style={[styles.speedButtonContainer]}>
                        <Button title="Add"/>
                    </View>
                    <View style={[styles.speedButtonContainer]}>
                        <Button title="Cancel"/>
                    </View>
                </View>


                <View style={[{display: addCancelButtonContainerHide}]}>
                    <Text>Run Plan</Text>
                    <Text>{speedbtnWalkHoursTextInput}</Text>
                    <View>

                            <Text>{speedbtnWalkHoursTextInput}</Text>
                    </View>
                </View>*/}
            </View>
            

            {/* <RunSummary
                titleSummary={'This is where the RunSummary goes:'}
                hideAddRunPaceBtn={hideAddRunPaceBtn}
                speedbtnWalkHoursTextInput={speedbtnWalkHoursTextInput}
            />  */}
        </View>
    )
};

const styles = StyleSheet.create({
    customiseRunScreenButtonsContainer: {
        alignItems: 'center',
        top:'40%',
    },
    timerDistanceContainer: {
        flexDirection: 'row',
        justifyContent:'center',
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
        borderWidth:0.5,
        borderColor: '#C0C0C0',
        textAlignVertical:'center',
        overflow: 'hidden',
        margin:5,
        width: '40%',
    },
    linearGradientStyle:{
        padding:10,
    },
    speedButtonsContainer: {
        flexDirection: 'row',
    },
    timerDistanceBtnContainer:{
        borderWidth: 0.5,
        borderRadius: 160,
        margin: 5,
        padding: 5,
    },
    speedButtonContainer: {
        padding: '3%',
        margin: '2%',
        // width: '29%',
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 5,
    },
    addCancelButtonContainer: {
        display: "flex",
        flexDirection: 'row',
        alignContent: 'center'
    },
    speedButtonContainerWalk: {
        backgroundColor: 'green',
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
        borderWidth: 0.5,
        borderRadius: 5,
    },
    speedButtonContainer2: {
        backgroundColor: 'yellow'
    },
    speedButtonContainer3: {
        backgroundColor: 'red',
    },
});
export default  CustomiseRunScreen;
