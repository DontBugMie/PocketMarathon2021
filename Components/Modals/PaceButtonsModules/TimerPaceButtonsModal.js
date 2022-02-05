import React, {useContext, useState} from 'react';
import { View, StyleSheet, Modal, Text, Pressable, Keyboard, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {PrimaryScreen} from "../../Styles/AppStyles";
import {PrimaryTextColor} from "../../Styles/AppStyles";
import {MixedBlueColor} from "../../../Components/Styles/AppStyles";
import {MixedGreenColor} from "../../../Components/Styles/AppStyles";
import { PrimaryGreenColor } from '../../Styles/AppStyles';
import { SecondaryGreenColor } from '../../Styles/AppStyles';
import { PrimaryYellowColor } from '../../Styles/AppStyles';
import { SecondaryYellowColor } from '../../Styles/AppStyles';
import { PrimaryPinkColor } from '../../Styles/AppStyles';
import { SecondaryPinkColor } from '../../Styles/AppStyles';
import PaceButton from "../../PaceButton/PaceButton";
import RunSummaryModal from "../RunSummary/RunSummaryModal";



const TimerPaceButtonsModal = props => {
    
    const [hidePaceBtnTextInputModal,showPaceBtnTextInputModal] = useState(false); 
   

    let pace;

    const slowPaceButtonPressedFunc = () => {
        pace = 'slow';
        console.log(pace)
        paceButtonPressedFunc();
    };

    const jogPaceButtonPressedFunc = () => {
        console.log('jog');
        pace = 'jog';
        console.log(pace)
        paceButtonPressedFunc();
    };

    const sprintPaceButtonPressedFunc = () => {
        pace = 'sprint';
        console.log(pace)
        paceButtonPressedFunc();
    };

    const paceButtonPressedFunc = () => {
        console.log('hello')
        showPaceBtnTextInputModal(!hidePaceBtnTextInputModal);
        showPaceBtnTextInputModal(true);
    
    };

    return (
         <Modal onPress={Keyboard.dismiss} style={PrimaryScreen}> 
            <Pressable onPress={Keyboard.dismiss} style={[styles.paceBtnsModalView]}>
                <Text style={styles.paceBtnsModalTitle}>Pick a Pace</Text>
                <PaceButton PaceButtonBackgroundColorOne={PrimaryGreenColor} PaceButtonBackgroundColorTwo={SecondaryGreenColor} PaceButtonTitle='Slow' PaceButtonPressedFunc={slowPaceButtonPressedFunc}/>
                <PaceButton PaceButtonBackgroundColorOne={PrimaryYellowColor} PaceButtonBackgroundColorTwo={SecondaryYellowColor} PaceButtonTitle='Jog' PaceButtonPressedFunc={jogPaceButtonPressedFunc}/>
                <PaceButton PaceButtonBackgroundColorOne={PrimaryPinkColor} PaceButtonBackgroundColorTwo={SecondaryPinkColor} PaceButtonTitle='Sprint' PaceButtonPressedFunc={sprintPaceButtonPressedFunc}/>
            </Pressable>
            <Pressable onPress={Keyboard.dismiss} style={styles.addCancelBtnContainerContainer}>
            <TouchableOpacity onPress={null} style={styles.addCancelBtnContainer}>
                            <LinearGradient
                                elevation={5}
                                colors={MixedBlueColor}
                                start={{ x: 0, y: 0}}
                                end={{ x: 1, y: 0.9 }}
                                style={styles.addCancelBtn}>
                                <Button title="Add"/>
                            </LinearGradient>
                        </TouchableOpacity>

                    <TouchableOpacity style={styles.addCancelBtnContainer}>
                        <LinearGradient
                            elevation={5}
                            colors={MixedGreenColor}
                            start={{ x: 0, y: 0}}
                            end={{ x: 1, y: 0.9 }}
                            style={styles.addCancelBtn}>
                            <Button title="Cancel"/>
                        </LinearGradient>
                    </TouchableOpacity>    
            </Pressable>
            <RunSummaryModal/>  
        </Modal> 
       
        
    )
};

const styles = StyleSheet.create({
    paceBtnsModalView: {
        justifyContent: 'space-evenly',
        margin:5,
        // top:5,
    },
    paceBtnsModalTitle: {
        fontSize: 25,
        textAlign:'center',
        color: PrimaryTextColor
    },
    addCancelBtnContainerContainer:{
        margin:30,
        flexDirection:'row', 
        justifyContent: 'space-evenly' 
    },
    addCancelBtnContainer: {
        width:'30%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3,
        elevation: 8,
    },
    addCancelBtn:{
        borderRadius:24,
        padding:5,
    }
   
});

export default TimerPaceButtonsModal;
