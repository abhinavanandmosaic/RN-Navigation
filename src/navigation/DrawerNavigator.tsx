import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../hoc/CustomDrawer';
import { DrawerContent } from '../hoc/DrawerContent';
import TabNavigator from './TabNavigator';
import { RootStackParamList } from './types';

const Drawer = createDrawerNavigator<RootStackParamList>();

const DrawerNavigator = () => {
  return (
        <CustomDrawer drawerContent={<DrawerContent />}>
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Main" component={TabNavigator} />
      </Drawer.Navigator>
    </CustomDrawer>
  );
};

export default DrawerNavigator; 