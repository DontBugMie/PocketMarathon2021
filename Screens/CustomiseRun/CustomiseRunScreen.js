import React, { useState } from 'react';
import {View, StyleSheet, Button, TouchableOpacity, FlatList} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {MixedBlueColor} from "../../Components/Styles/AppStyles";
import {MixedGreenColor} from "../../Components/Styles/AppStyles";
import {PrimaryScreen} from "../../Components/Styles/AppStyles";
import TimerPaceButtonsModal from "../../Components/Modals/PaceButtonsModules/TimerPaceButtonsModal";

const CustomiseRunScreen = props => {

    const [timerDistanceContainerShow, timerDistanceContainerHide] = useState('block');
    const [hidePaceBtnsContainerVisibility, showPaceBtnsContainerVisibility]=useState(false);

    const timerBtnPressed = () => {
        timerDistanceContainerHide('none');
        showPaceBtnsContainerVisibility(true);
    };

    return (
        <View style={PrimaryScreen}>
            <View style={[styles.customiseRunScreenButtonsContainer, styles.timerDistanceContainer, {display: timerDistanceContainerShow}]}>
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
            <TimerPaceButtonsModal paceBtnsContainerVisibility={hidePaceBtnsContainerVisibility} styles={{display:'none', background:'yellow'}}/>
          

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
});
export default  CustomiseRunScreen;
