import { StyleSheet } from 'react-native';

const Colors = StyleSheet.create({
    PrimaryTextColor:{
        color: 'rgb(95,83,125)'
    },
    SecondaryTextColor:{
        color: 'rgb(169,167,178)'
    },
    PrimaryYellowColor:{
        backgroundColor: 'rgb(255,204,42)'
    },
    SecondaryYellowColor:{
        backgroundColor: 'rgb(220,116,36)'
    },
    MixedYellow:{
        backgroundColor: "yellow"
    },
    PrimaryPinkColor:{
        backgroundColor: 'rgb(228,115,193)'
    },
    SecondaryPinkColor:{
        backgroundColor: 'rgb(190,122,230)'
    },
    PrimaryBlueColor:{
        backgroundColor: 'rgb(36,228,255)'
    },
    SecondaryBlueColor:{
        backgroundColor: 'rgb(60,120,215)'
    },
    PrimaryGreenColor:{
        backgroundColor: 'rgb(41,209,33)'
    },
    SecondaryGreenColor:{
        backgroundColor: 'rgb(52,119,35)'
    },
});

const Screens = StyleSheet.create({
    PrimaryScreen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    }
});

const Buttons = StyleSheet.create({
    PrimaryButton:{
        padding: '3%',
        margin: '2%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    }
});

export { Screens, Buttons, Colors };
