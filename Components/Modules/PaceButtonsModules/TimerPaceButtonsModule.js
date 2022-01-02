import React, {useContext} from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import {PrimaryScreen} from "../../Styles/AppStyles";
import {PrimaryTextColor} from "../../Styles/AppStyles";
import { PrimaryGreenColor } from '../../Styles/AppStyles';
import { SecondaryGreenColor } from '../../Styles/AppStyles';
import { PrimaryYellowColor } from '../../Styles/AppStyles';
import { SecondaryYellowColor } from '../../Styles/AppStyles';
import { PrimaryPinkColor } from '../../Styles/AppStyles';
import { SecondaryPinkColor } from '../../Styles/AppStyles';
import PaceButton from "../../PaceButton/PaceButton";


const TimerPaceButtonsModule = props => {

    return (
        <View style={PrimaryScreen}>
            <Modal animationType='fade' /*onRequestClose={}*/ /*onShow={}*/ visible={props.paceBtnsContainerVisibility} transparent={false}>
            <View style={[styles.paceBtnsModalView]}>
                <Text style={styles.paceBtnsModalTitle}>Pick a Pace</Text>
                <PaceButton PaceButtonBackgroundColorOne={PrimaryGreenColor} PaceButtonBackgroundColorTwo={SecondaryGreenColor} PaceButtonTitle='Slow'/>
                <PaceButton PaceButtonBackgroundColorOne={PrimaryYellowColor} PaceButtonBackgroundColorTwo={SecondaryYellowColor} PaceButtonTitle='Jog'/>
                <PaceButton PaceButtonBackgroundColorOne={PrimaryPinkColor} PaceButtonBackgroundColorTwo={SecondaryPinkColor} PaceButtonTitle='Sprint'/>
            </View>
            </Modal>
        </View>
        
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

export default TimerPaceButtonsModule;
