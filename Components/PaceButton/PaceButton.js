import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {MixedBlueColor} from "../Styles/AppStyles";




const PaceButton = props => {

    let pace = props.pace;

    return (
        <LinearGradient
            elevation={5}
            colors= {[props.PaceButtonBackgroundColorOne,props.PaceButtonBackgroundColorTwo]}
            start={{ x: 0, y: 0}}
            end={{ x: 1, y: 0.9 }}
            style={styles.linearGradientStyle}
        >
            <Button title={props.PaceButtonTitle}/>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    PaceButton:{
        width: '40%'
    }
});

export default PaceButton;
