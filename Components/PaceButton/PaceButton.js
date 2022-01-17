import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {PrimaryTextColor} from "../Styles/AppStyles";

const PaceButton = props => {


    // need to add an "add" "cancel button"
    // pressing add/ cancell will both bring pacebtton back to the front
    //might need to add commented out stuff again

    const [showPaceButton, hidePaceButton] = useState('1');

    const hidePaceButtonFunc = ( ) => {
        hidePaceButton('-1');
    };

    const [showPaceTextInputBtn, hidePaceTextInputBtn] = useState('');

    const hidePaceTextInputBtnFunc = ( ) => {
        hidePaceTextInputBtn('-1');
    };

   

    return (
        <View style={[styles.PaceButtonContainer]}>
            <View style={[ {backgroundColor: 'pink', zIndex: showPaceButton}]}>
                <TouchableOpacity onPress={hidePaceButtonFunc} style={[styles.PaceButton]}>
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

            <View style={[styles.PaceButtonContainer, {backgroundColor: 'blue', position: 'absolute', zIndex: showPaceTextInputBtn}]}>
            <TouchableOpacity /*onPress={hidePaceTextinputButtonFunc}*/ style={[styles.PaceButton, styles.PaceButtonTextInput]}>
                    <LinearGradient
                    elevation={5}
                    colors= {[props.PaceButtonBackgroundColorOne,props.PaceButtonBackgroundColorTwo]}
                    start={{ x: 0, y: 0}}
                    end={{ x: 1, y: 0.9 }}
                    style={[styles.linearGradientStyle, styles.PaceButton]}>
                    <TextInput style={styles.PaceButtonText}>{props.PaceButtonTitle}</TextInput>
                </LinearGradient>
            </TouchableOpacity>
            </View>
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
    }, 
    PaceButtonTextInput: {
      
    }
});

export default PaceButton;
