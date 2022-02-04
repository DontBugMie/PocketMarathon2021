import React, {useContext, useState} from 'react';
import { View, StyleSheet, Modal, Text, Pressable, Keyboard, Button, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {PrimaryScreen} from "../../Styles/AppStyles";
import {MixedBlueColor} from "../../Styles/AppStyles";
import {MixedGreenColor} from "../../Styles/AppStyles";
import { PrimaryGreenColor } from '../../Styles/AppStyles';
import { SecondaryGreenColor } from '../../Styles/AppStyles';
import { PrimaryYellowColor } from '../../Styles/AppStyles';
import { SecondaryYellowColor } from '../../Styles/AppStyles';
import { PrimaryPinkColor } from '../../Styles/AppStyles';
import { SecondaryPinkColor } from '../../Styles/AppStyles';
import PaceButton from "../../PaceButton/PaceButton";



const RunSummaryModal = props => {
    
   
    return (
         <View onPress={Keyboard.dismiss} style={{backgroundColor:'pink', flex:0.75, borderBottomColor:'green'}}> 
            <Text>  jkl  </Text>
        </View> 
    )
};

const styles = StyleSheet.create({
    
});

export default RunSummaryModal;
