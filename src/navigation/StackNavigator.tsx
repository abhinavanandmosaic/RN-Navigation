import React, { useMemo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '../components';
import { Screen1, Screen2 } from '../screens';
import type { HomeStackParamList } from './types';

const Stack = createStackNavigator<HomeStackParamList>();

// Simulated external configuration (could be loaded from API or CMS)
const screenConfig: { name: keyof HomeStackParamList; component: React.ComponentType<any> }[] = [
  { name: 'Screen1', component: Screen1 },
  { name: 'Screen2', component: Screen2 },
];

const StackNavigator = () => {
  const screens = useMemo(() => screenConfig, []);

  return (
    <Stack.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: true,
        header: () => {
          const currentRouteIndex = navigation.getState()?.index || 0;
          const index = navigation.getState()?.routes?.findIndex(r => r.name === route.name);
          const isFirstScreen = index === 0;
          return isFirstScreen ? null : (
            <Header navigation={navigation} route={route} showBackButton />
          );
        },
      })}
    >
      {screens.map(({ name, component }) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;