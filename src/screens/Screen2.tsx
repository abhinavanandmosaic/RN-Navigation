import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useTheme } from '../hoc/ThemeProvider';

const Screen2 = () => {
  const { colors } = useTheme();
  const styles = generateStyles(colors);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 2</Text>
    </View>
  );
};

export default Screen2; 

const generateStyles = (colors: any) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
});