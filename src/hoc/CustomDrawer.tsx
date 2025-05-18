import React, { useCallback, useEffect, useMemo } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  runOnJS,
} from 'react-native-reanimated';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import { useDrawerStore } from '../store';

interface CustomDrawerProps {
  children: React.ReactNode;
  drawerContent: React.ReactNode;
}

const width = Dimensions.get('window').width;
const animationDuration = 350;

export const CustomDrawer: React.FC<CustomDrawerProps> = (({ children, drawerContent }) => {
  const isOpen = useDrawerStore((state) => state.isOpen);

  // Shared values for animations
  const progress = useSharedValue(0);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  
  const styles = generateStyles();

  const animatedViewStyle = useAnimatedStyle(() => {
    const radius = interpolate(
      progress.value,
      [0, 1],
      [0, 24],
      Extrapolate.CLAMP
    );
  
    return {
      transform: [
        { translateX: translateX.value * (width * 0.7) },
        { translateY: translateY.value * (width * 0.02) },
        { rotate: `-${progress.value * 10}deg` },
      ],
      borderTopLeftRadius: radius,
    };
  });
  

  // Effect to handle drawer state changes
  useEffect(() => {
    progress.value = withTiming(isOpen ? 1 : 0, { duration: animationDuration });
    translateX.value = withTiming(isOpen ? 1 : 0, { duration: animationDuration });
    translateY.value = withTiming(isOpen ? 1 : 0, { duration: animationDuration });
  }, [isOpen]);

  const renderDrawer = useCallback(() => (
    <Animated.View style={styles.drawer}>
      {drawerContent}
    </Animated.View>
  ), [drawerContent]);

  const renderContent = useCallback(() => (
    <Animated.View style={[styles.content,animatedViewStyle]}>{children}</Animated.View>
  ), [children,isOpen]);

  return (
    <View style={styles.container}>
      {renderDrawer()}
      {renderContent()}
    </View>
  );
});

const generateStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1
  },
  drawer: {
    position: 'relative',
      left: 0,
      top: 0,
      bottom: 0,
      backgroundColor: '#fff',
    zIndex: 100,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 2, height: 0 },
    shadowRadius: 8,
    width: '100%',
    flex:1,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    zIndex: 111,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
  },
  });