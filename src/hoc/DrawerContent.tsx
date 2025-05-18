import React, { useCallback, useMemo, useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/types";
import { useTheme } from "./ThemeProvider";
import { useDrawerStore } from "../store/useDrawerStore";

// Import PNG assets
const homeIcon = require("../assets/home.png");
const cartIcon = require("../assets/cart.png");
const favouritesIcon = require("../assets/favourites.png");
const ordersIcon = require("../assets/order.png");
const signoutIcon = require("../assets/logout.png");
const contactIcon = require("../assets/contact.png");

// Type for navigation
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

// Menu items for the drawer
const menuItems = [
  { label: "Start", icon: homeIcon, route: "Home" },
  { label: "Your Cart", icon: cartIcon, route: undefined },
  { label: "Favourites", icon: favouritesIcon, route: undefined },
  { label: "Your Orders", icon: ordersIcon, route: undefined },
  { label: "Contact", icon: contactIcon, route: "Contact" },
];

const width = Dimensions.get('window').width;

export const DrawerContent: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const colors = useTheme()?.colors;

  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);

  const styles = generateStyles(colors);

  const highlightedStyles = useMemo(() => {
    return highlightedIndex !== null ? styles.highlightedMenuItem : {};
  }, [highlightedIndex]);

  const handleNavigation = useCallback(
    (route: string | undefined) => {
      if (route) {
        navigation.navigate(route as any)
        setHighlightedIndex(null)
        useDrawerStore.getState().toggleDrawer()
      };
    },
    [navigation]
  );

  const handleSignOut = useCallback(() => {
    useDrawerStore.getState().toggleDrawer()
  }, []);
  const handleFocus = useCallback((index: number) => {
    setHighlightedIndex(index);
  }, []);
  const handleBlur = useCallback(() => {
    setHighlightedIndex(null);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>BeKa</Text>
        </View>
        <View style={styles.menu}>
          {menuItems.map((item, index) => {
            const isHighlighted =
              highlightedIndex !== null && highlightedIndex === index;
            return (
              <View
                key={item.label}
                onTouchStart={() => setHighlightedIndex(index)}
                onTouchEnd={() => setHighlightedIndex(null)}
              >
                <TouchableOpacity
                  onPress={() => handleNavigation(item.route)}
                  onFocus={() => handleFocus(index)}
                  onBlur={handleBlur}
                  activeOpacity={0.9}
                  style={[styles.menuItem, isHighlighted ? {backgroundColor: highlightedStyles?.backgroundColor} : {}]}
                >
                  <Image
                    source={item.icon}
                    style={[
                      styles.menuIcon,
                      isHighlighted ? {tintColor: highlightedStyles?.tintColor} : {},
                    ]}
                    resizeMode="contain"
                  />
                  <Text
                    style={[
                      styles.menuText,
                      isHighlighted ? {color: highlightedStyles?.color} : {},
                    ]}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                  >
                    {item.label}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.signOutContainer}>
        <TouchableOpacity
          style={styles.signOutButton}
          onPress={handleSignOut}
          activeOpacity={0.9}
        >
          <Image source={signoutIcon} style={styles.signOutIcon} />
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const generateStyles = (colors: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#161326",
      paddingTop: 48,
      paddingHorizontal: 24,
      justifyContent: "space-between",
      color: "#fff",
      borderTopLeftRadius: 24,
    },
    logoText: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#fff",
      width: width * 0.45,
      textAlign: "center",
    },
    logoContainer: {
      alignItems: "flex-start",
      marginBottom: 32,
    },
    logo: {
      width: 64,
      height: 64,
      resizeMode: "contain",
      marginBottom: 8,
      tintColor: colors.background,
    },
    menu: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    menuItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      padding: 12,
      borderRadius: 12,
      marginBottom: 4,
      paddingHorizontal: 12,
      maxWidth: 'auto',
    },
    menuIcon: {
      width: 28,
      height: 28,
      marginRight: 12,
      resizeMode: "contain",
      tintColor: "#fff",
    },
    menuText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      minWidth: width * 0.3,
      maxWidth: width * 0.38,
    },
    signOutContainer: {
      marginBottom: 32,
    },
    highlightedMenuItem: {
      backgroundColor: "#52383f",
      color: "#C55755",
      tintColor: "#C55755",
    },
    signOutButton: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 16,
      borderRadius: 12,
      paddingHorizontal: 8,
    },
    signOutIcon: {
      width: 28,
      height: 28,
      marginRight: 16,
      resizeMode: "contain",
      tintColor: "#fff",
    },
    signOutText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
    },
  });
