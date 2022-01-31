import React, {useState} from 'react';
import { View, StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Pressable} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {PrimaryTextColor} from "../Styles/AppStyles";
import {PrimaryScreen} from "../Styles/AppStyles";

// import * as Speech from 'expo-speech';



const PaceButton = props => {

    //add textinput stuff to the same button as the pace button. hide the name of the 'jog'
    //and show textinput when clicking on the button 
    

    //make function so that if one pace button is clicked then the others cant show their
    //textinputs


    // need to add an "add" "cancel button"
    // pressing add/ cancell will both bring pacebtton back to the front
    //might need to add commented out stuff again


    const PaceTextInputHeight = 20;
    const PaceBtnTextInputHeight = 100 - PaceTextInputHeight;

    // const speak = () => {
    //     const thingToSay = 'hello this is a very nice day today';
    //     Speech.speak(thingToSay);
    //     Speech.getAvailableVoicesAsync();
    //     console.log(Speech.getAvailableVoicesAsync());
    // };

    const [displayPaceBtnTextInputToggle, hidePaceBtnTextInputToggle] = useState("block");
    // const [displayPaceBtnTextToggle, hidePaceBtnTextToggle] = useState(props.PaceButtonTitle);


    const paceBtnTextInputFunc = () => {
        if( displayPaceBtnTextInputToggle === "none"){
            hidePaceBtnTextInputToggle("flex");
            // hidePaceBtnTextToggle(""); 
        }else{
            hidePaceBtnTextInputToggle("none");
            // hidePaceBtnTextToggle(props.PaceButtonTitle);
        };
    };
   
    return (
        <Pressable onPress={Keyboard.dismiss} 
    >
        {/* <Pressable onPress={Keyboard.dismiss}> */}
            {/* <Button style={{color:'black'}} title="Press to hear some words" onPress={speak} /> */}
            <View style={[styles.PaceButtonContainer, {minWidth:'102%'}]}>
                <View  style={[styles.PaceButton, {maxHeight: PaceBtnTextInputHeight}]}>
                    <LinearGradient
                    elevation={5}
                    colors= {[props.PaceButtonBackgroundColorOne, props.PaceButtonBackgroundColorTwo]}
                    start={{ x: 0, y: 0}}
                    end={{ x: 1, y: 0.9 }}
                    style={[styles.linearGradientStyle, styles.PaceButton, styles.PaceButtonText, styles.PaceButtonContainer, styles.PaceButtonTextInputContainer, {width:'95%'}]}>
                    {/* <View style={[styles.PaceButtonContainer, styles.PaceButtonTextInputContainer,  ]}>  */}
                        <TextInput name={props.PaceButtonTitle + 'hr'} placeholder='HR' keyboardType="number-pad" maxLength={2} multiline={false} style={[styles.PaceButtonTextInput, {height: PaceTextInputHeight}]}/>
                        <Text>:</Text>
                        <TextInput name={'mins'} placeholder='MINS' keyboardType="number-pad" maxLength={2} multiline={false} style={[styles.PaceButtonTextInput, {height: PaceTextInputHeight}]}/>
                        <Text >:</Text>
                        <TextInput name={'secs'}  placeholder='SECS' keyboardType="number-pad" maxLength={2} multiline={false} style={[styles.PaceButtonTextInput, {height: PaceTextInputHeight}]}/>
                    {/* </View> */}
                {/* <Text style={[styles.PaceButtonText,{fontSize: PaceTextInputHeight}]}></Text> */}
                </LinearGradient>
            </View>
            </View>
 
            <View style={[styles.PaceButtonContainer, {position: 'absolute', display:displayPaceBtnTextInputToggle}]}>
                <TouchableOpacity onPress={paceBtnTextInputFunc} style={[styles.PaceButton, {maxHeight: PaceBtnTextInputHeight}]}>
                    <LinearGradient
                    elevation={5}
                    colors= {[props.PaceButtonBackgroundColorOne, props.PaceButtonBackgroundColorTwo]}
                    start={{ x: 0, y: 0}}
                    end={{ x: 1, y: 0.9 }}
                    style={[styles.linearGradientStyle, styles.PaceButton]}>
                    
                <Text style={[styles.PaceButtonText,{fontSize: PaceTextInputHeight}]}>{props.PaceButtonTitle}</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
            {/* </Pressable> */}
         </Pressable>
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
        top: -10,
    }, 
    PaceButtonTextInputContainer:{
        justifyContent:'center', 
        position: 'absolute',
        flexDirection: 'row',
        top: '40%',
    },
    PaceButtonTextInput: {
        backgroundColor: 'white',
        textAlign:'center',
        width:'35%', 
        // transform: [{scaleY:1}, {translateX: 35}, {translateY: 45}]
    }
});

export default PaceButton;
