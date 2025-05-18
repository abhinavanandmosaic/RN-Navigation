import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DrawerTrigger from "./DrawerTrigger";

const Header = ({
  route,
  showBackButton,
  navigation,
}: {
  route: any;
  showBackButton?: boolean;
  navigation?: any;
}) => {
  const backButton = showBackButton || false;

  return (
    <View style={styles.container}>
      <DrawerTrigger showBackButton={backButton} navigation={navigation} />
      <Text style={styles.title}>{route.name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "white",
    position: "relative",
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 8,
  },
});
