import React, {useContext} from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {PrimaryScreen} from "../../Styles/AppStyles";


// need to work out how to close the first modal in order to see the second modal 



const PaceButtonTextInputModal = props => {
    
    return (
        <View style={PrimaryScreen}>
        <Modal animationType='none' onRequestClose={props.close} /*onShow={}*/ visible={props.falsePaceBtnTextInputModalVisibility} transparent={false}>
            <View style={[styles.paceBtnsModalView]}>
                <Text>{props.pace}</Text>
                <View>
                    <TextInput></TextInput>
                    <TextInput></TextInput>
                    <TextInput></TextInput>
                </View>
            </View>
        </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    
});

export default PaceButtonTextInputModal;
