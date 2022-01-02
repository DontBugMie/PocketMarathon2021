import { StyleSheet } from 'react-native';

const PrimaryTextColor = 'rgb(95,83,125)';
const SecondaryTextColor = 'rgb(169,167,178)';
const PrimaryYellowColor = 'rgb(255,204,42)';
const SecondaryYellowColor = 'rgb(220,116,36)';
const PrimaryPinkColor = 'rgb(228,115,193)';
const SecondaryPinkColor = 'rgb(190,122,230)';
const PrimaryBlueColor = 'rgb(36,228,255)';
const SecondaryBlueColor = 'rgb(60,120,215)';
const PrimaryGreenColor = 'rgb(41,209,33)';
const SecondaryGreenColor = 'rgb(52,119,35)';

const MixedTextColor = ['rgb(95,83,125)', 'rgb(169,167,178)'];
const MixedYellowColor = ['rgb(255,204,42)','rgb(220,116,36)'];
const MixedPinkColor = ['rgb(228,115,193)', 'rgb(190,122,230)'];
const MixedBlueColor = ['#E2F6FF','rgb(36,228,255)', '#00CCCC'];
const MixedGreenColor = ['#DDFFFF', '#00E800', '#30C702'];


const PrimaryScreen = {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        padding: '5%',
};

const PrimaryModule = {
    backgroundColor: 'pink',
    width: '90%',
    height: '50%',
}

const Buttons = StyleSheet.create({
    PrimaryButton:{
        padding: '3%',
        margin: '2%',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    }
});

export {PrimaryTextColor, SecondaryTextColor, PrimaryYellowColor, SecondaryYellowColor ,PrimaryPinkColor, SecondaryPinkColor, PrimaryBlueColor, SecondaryBlueColor, PrimaryGreenColor, SecondaryGreenColor, MixedTextColor, MixedYellowColor, MixedPinkColor, MixedBlueColor, MixedGreenColor, PrimaryScreen, PrimaryModule, Buttons,  };
