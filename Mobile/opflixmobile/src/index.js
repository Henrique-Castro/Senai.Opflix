//Dependencies
import React from 'react';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
//Screens
import HomeScreen from './pages/home';
import LoginScreen from './pages/login';

const AuthStack = createStackNavigator({
    Login : {screen : LoginScreen}
});

const MainNavigation = createBottomTabNavigator({
    Home: {screen : HomeScreen},
},
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            showLabel: false,
            showIcon: false,
            inactiveBackgroundColor: '#d9d2e4',
            activeBackgroundColor: '#ffffff',
            style: {
                width: '100%',
                height: 50
            }
        }
    }
);
MainNavigation.navigationOptions = {
  header:null
}

export default createAppContainer(
    createSwitchNavigator(
      {
        MainNavigation,
        AuthStack,
      },
      {
        initialRouteName: 'AuthStack',
      },
    ),
  );