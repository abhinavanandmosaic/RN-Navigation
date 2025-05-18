import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from './types';
import { useTheme } from '../hoc/ThemeProvider';
import { Image } from 'react-native';
import StackNavigator from './StackNavigator';
import { Header } from '../components';
import { useCurrentScreenStore } from '../store';

const homeIcon = require('../assets/home.png');
const contactIcon = require('../assets/contact.png');

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {;
  const colors = useTheme()?.colors;

  const renderHeader = (route: any) => {
    return useCurrentScreenStore?.getState()?.getCurrentScreenIndex(0) > 0 ? null : <Header route={route} />
  }
  
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarIcon: ({ color, size }) => {
          let iconSource;
          if (route.name === 'Home') {
            iconSource = homeIcon;
          } else if (route.name === 'Contact') {
            iconSource = contactIcon;
          }
          return (
            <Image
              source={iconSource}
              style={{ width: size, height: size, tintColor: color }}
              resizeMode="contain"
            />
          );
        },
        header: ({ route }) => renderHeader(route)
      })}
      
    >
      <Tab.Screen 
        name="Home" 
        component={StackNavigator}
        options={{
          tabBarLabel: 'Home',
        }} 
      />
      <Tab.Screen 
        name="Contact" 
        component={StackNavigator}
        options={{
          tabBarLabel: 'Contact',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator; 