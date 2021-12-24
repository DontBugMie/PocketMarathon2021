import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button, ScrollView} from 'react-native';




const SlowPaceButton = props => {

    return (
        <ScrollView style={[styles.PaceButton]}>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    PaceButton:{
        backgroundColor: 'pink'
    }
});

export default SlowPaceButton;
