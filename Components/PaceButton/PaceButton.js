import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const PaceButton = props => {

    return (
        <View style={styles.PaceButtonContainer}>
            <LinearGradient
            elevation={5}
            colors= {[props.PaceButtonBackgroundColorOne,props.PaceButtonBackgroundColorTwo]}
            start={{ x: 0, y: 0}}
            end={{ x: 1, y: 0.9 }}
            style={[styles.linearGradientStyle, styles.PaceButton]}
        >
            <Text style={styles.PaceButtonText}>{props.PaceButtonTitle}</Text>
            {/*might need to get rid of this line as might not be useful */}
            <Button title={props.PaceButtonTitle}/> 
        </LinearGradient>
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
        lineHeight: 100,
        fontSize: 20
    }
});

export default PaceButton;
