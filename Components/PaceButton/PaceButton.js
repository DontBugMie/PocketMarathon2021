import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {PrimaryTextColor} from "../Styles/AppStyles";

// import * as Speech from 'expo-speech';



const PaceButton = props => {

    //add textinput stuff to the same button as the pace button. hide the name of the 'jog'
    //and show textinput when clicking on the button 
    

    //make function so that if one pace button is clicked then the others cant show their
    //textinputs


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

    const PaceTextInputHeight = 20;
    const PaceBtnTextInputHeight = 100 - PaceTextInputHeight;

    // const speak = () => {
    //     const thingToSay = 'hello this is a very nice day today';
    //     Speech.speak(thingToSay);
    //     Speech.getAvailableVoicesAsync();
    //     console.log(Speech.getAvailableVoicesAsync());
    // };
   

    return (
        <View>
            {/* <Button style={{color:'black'}} title="Press to hear some words" onPress={speak} /> */}
            <View style={[{zIndex: showPaceButton}, styles.PaceButtonContainer]}>
                <TouchableOpacity onPress={hidePaceButtonFunc} style={[styles.PaceButton, {maxHeight: PaceBtnTextInputHeight}]}>
                        <LinearGradient
                        elevation={5}
                        colors= {[props.PaceButtonBackgroundColorOne,props.PaceButtonBackgroundColorTwo]}
                        start={{ x: 0, y: 0}}
                        end={{ x: 1, y: 0.9 }}
                        style={[styles.linearGradientStyle, styles.PaceButton]}>
                        <Text style={[styles.PaceButtonText,{fontSize: PaceTextInputHeight}]}>{props.PaceButtonTitle}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <View style={[styles.PaceButtonContainer, {position: 'absolute', zIndex: showPaceTextInputBtn}]}>
            <TouchableOpacity onPress={hidePaceTextInputBtnFunc} style={[styles.PaceButton, {height: PaceBtnTextInputHeight}]}>
                    <LinearGradient
                    elevation={5}
                    colors= {[props.PaceButtonBackgroundColorOne,props.PaceButtonBackgroundColorTwo]}
                    start={{ x: 0, y: 0}}
                    end={{ x: 1, y: 0.9 }}
                    style={[styles.linearGradientStyle, styles.PaceButton, styles.PaceButtonText, styles.PaceButtonTextInputContainer, {fontSize: PaceTextInputHeight}]}>
                            <TextInput placeholder='HR' keyboardType="numeric" maxLength={2} multiline={false} style={[styles.PaceButtonTextInput, {height: PaceTextInputHeight}]}></TextInput>
                            <Text>:</Text>
                            <TextInput placeholder='MINS' keyboardType="numeric" maxLength={2} multiline={false} style={[styles.PaceButtonTextInput, {height: PaceTextInputHeight}]}></TextInput>
                            <Text>:</Text>
                            <TextInput placeholder='SECS' keyboardType="numeric" maxLength={2} multiline={false} style={[styles.PaceButtonTextInput, {height: PaceTextInputHeight}]}></TextInput>
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
        width:'100%',
        margin:5
    },
    PaceButton:{
        borderRadius: 50,
        margin: 5
    },
    PaceButtonText:{
        textAlign:'center',
        padding:50,
        color: PrimaryTextColor,
        justifyContent: 'center',
    }, 
    PaceButtonTextInputContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
    },
    PaceButtonTextInput: {
        backgroundColor: 'white',
        zIndex:50,
        textAlign:'center',
        textAlignVertical: 'center',
        alignContent: 'space-between',
        width:'30%'
        // transform: [{scaleY:1}, {translateX: 35}, {translateY: 45}]
    }
});

export default PaceButton;
