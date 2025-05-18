import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { useDrawerStore } from '../store';

const MenuIcon = require('../assets/menu.png');
const BackIcon = require('../assets/back.png');

const DrawerTrigger = ({ showBackButton, navigation }: { showBackButton?: boolean, navigation?: any }) => {
  const backButton = showBackButton || false;
  const { toggleDrawer } = useDrawerStore();

  const handlePress = () => {
    if(backButton && navigation?.canGoBack()) {
      navigation.goBack();
    } else if (!backButton && MenuIcon) {
      toggleDrawer();
    }
  }
  return (
    <TouchableOpacity onPress={handlePress} style={{ padding: 6 }}>
      <Image source={backButton ? BackIcon : MenuIcon} style={{ width: 24, height: 24 }} resizeMode="contain" />
    </TouchableOpacity>
  );
}; 

export default DrawerTrigger;