import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {PrimaryTextColor} from "../Styles/AppStyles";

const PaceButton = props => {


    // need to work out how to close the first modal in order to see the second modal 

    return (
        <View style={[styles.PaceButtonContainer, styles.PaceButton]}>
            <TouchableOpacity onPress={props.PaceButtonPressedFunc} style={[styles.PaceButton]}>
                    <LinearGradient
                    elevation={5}
                    colors= {[props.PaceButtonBackgroundColorOne,props.PaceButtonBackgroundColorTwo]}
                    start={{ x: 0, y: 0}}
                    end={{ x: 1, y: 0.9 }}
                    style={[styles.linearGradientStyle, styles.PaceButton]}>
                    <Text style={styles.PaceButtonText}>{props.PaceButtonTitle}</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    PaceButtonContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.30,
        shadowRadius: 3,
        elevation: 8,
        height: '15%',
    },
    PaceButton:{
        borderRadius: 50,
    },
    PaceButtonText:{
        textAlign: 'center',
        padding:50,
        lineHeight: 10,
        fontSize: 20,
        color: PrimaryTextColor
    }
});

export default PaceButton;
