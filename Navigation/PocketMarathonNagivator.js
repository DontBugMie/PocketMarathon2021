import React from  'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {RunProvider} from "../Context/RunPaceContext";
import HomeScreen from '../Screens/Home/HomeScreen.js';
import CreateAccountScreen from '../Screens/CreateAccount/CreateAccountScreen';
import LoginScreen from '../Screens/Login/LoginScreen';
import NewRunScreen from '../Screens/NewRun/NewRunScreen';
import RunHistoryIndividualItemScreen from '../Screens/RunHistoryIndividualItem/RunHistoryIndividualItemScreen';
import RunHistoryScreen from '../Screens/RunHistory/RunHistoryScreen';
import StartRunScreen from '../Screens/StartRun/StartRunScreen';
import FinishRunScreen from '../Screens/FinishRunScreen/FinishRunScreen';
import CustomiseRunScreen from '../Screens/CustomiseRun/CustomiseRunScreen';

const PocketMarathonNavigator = createStackNavigator({
    // HomeScreen : {
    //     screen: HomeScreen
    // },
    // CreateAccountScreen: {
    //     screen: CreateAccountScreen
    // },
    // LoginScreen: {
    //     screen: LoginScreen
    // },
    // NewRunScreen: {
    //     screen: NewRunScreen
    // },
    CustomiseRunScreen :{
        screen: CustomiseRunScreen
    },
    // RunHistoryIndividualItemScreen: {
    //     screen: RunHistoryIndividualItemScreen
    // },
    // RunHistoryScreen: {
    //     screen: RunHistoryScreen
    // },
    // StartRunScreen: {
    //     screen: StartRunScreen
    // },
    // FinishRunScreen: {
    //     screen: FinishRunScreen
    // },
});

const PocketMarathonNavigatorApplication = createAppContainer(PocketMarathonNavigator);

export default () => {
    return ( <RunProvider>
        <PocketMarathonNavigatorApplication/>
    </RunProvider>
    )}
