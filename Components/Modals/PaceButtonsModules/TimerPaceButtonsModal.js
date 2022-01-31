import React, {useContext, useState} from 'react';
import { View, StyleSheet, Modal, Text, Pressable, Keyboard } from 'react-native';
import {PrimaryScreen} from "../../Styles/AppStyles";
import {PrimaryTextColor} from "../../Styles/AppStyles";
import { PrimaryGreenColor } from '../../Styles/AppStyles';
import { SecondaryGreenColor } from '../../Styles/AppStyles';
import { PrimaryYellowColor } from '../../Styles/AppStyles';
import { SecondaryYellowColor } from '../../Styles/AppStyles';
import { PrimaryPinkColor } from '../../Styles/AppStyles';
import { SecondaryPinkColor } from '../../Styles/AppStyles';
import PaceButton from "../../PaceButton/PaceButton";



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
        <Pressable onPress={Keyboard.dismiss} style={PrimaryScreen, {backgroundColor: 'pink'}} >
         <Modal animationType='fade' onRequestClose={()=>{showPaceBtnTextInputModal(!hidePaceBtnTextInputModal)}} visible={props.paceBtnsContainerVisibility}> 
            <Pressable onPress={Keyboard.dismiss} style={[styles.paceBtnsModalView] }>
                <Text style={styles.paceBtnsModalTitle}>Pick a Pace</Text>
                <PaceButton PaceButtonBackgroundColorOne={PrimaryGreenColor} PaceButtonBackgroundColorTwo={SecondaryGreenColor} PaceButtonTitle='Slow' PaceButtonPressedFunc={slowPaceButtonPressedFunc}/>
                <PaceButton PaceButtonBackgroundColorOne={PrimaryYellowColor} PaceButtonBackgroundColorTwo={SecondaryYellowColor} PaceButtonTitle='Jog' PaceButtonPressedFunc={jogPaceButtonPressedFunc}/>
                <PaceButton PaceButtonBackgroundColorOne={PrimaryPinkColor} PaceButtonBackgroundColorTwo={SecondaryPinkColor} PaceButtonTitle='Sprint' PaceButtonPressedFunc={sprintPaceButtonPressedFunc}/>
            </Pressable>
            
            </Modal> 
        </Pressable>
        
    )
};

const styles = StyleSheet.create({
    paceBtnsModalView: {
        justifyContent: 'space-around',
        margin:5,
        top:150,
    },
    paceBtnsModalTitle: {
        fontSize: 25,
        textAlign:'center',
        color: PrimaryTextColor
    }
});

export default TimerPaceButtonsModal;
