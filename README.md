# React Native Custom Drawer Navigation App

## Overview

This app demonstrates a custom animated drawer navigation system in React Native, featuring:

- Custom Drawer with logo, icons, and sign out
- Bottom Tab Navigator (Home, Contact)
- Home Stack (Screen1, Screen2)
- TypeScript and Zustand for state management
- Theming (light/dark/system)
- PNG assets for icons

## Folder Structure

```
src/
  assets/         # PNG icons and logo
  components/     # Reusable UI components (Drawer, Header, ThemeProvider, etc.)
  hoc/            # Higher Order Components
  navigation/     # Navigation setup (TabNavigator, StackNavigator, types)
  screens/        # App screens (Screen1, Screen2, etc.)
  store/          # Zustand stores (theme, drawer, current screen)
  App.tsx         # App entry point
```

## Navigation Structure

```
DrawerNavigator
  └── TabNavigator (Home, Contact)
        ├── StackNavigator (Screen1, Screen2)
        └── StackNavigator (Screen1, Screen2)
```

- **Drawer**: Custom, animated, with logo and menu items (icons from `src/assets/`)
- **Tabs**: Home (stack), Contact (stack)
- **Stack**: Each tab uses StackNavigator (Screen1 → Screen2)
- **Header Logic**: Tab header is shown on Screen1, Stack header (with back button) is shown on Screen2

## Assets

Place PNG icons in `src/assets/`:

- `home.png`, `contact.png`, `cart.png`, `favourites.png`, `order.png`, `logout.png`

## Setup & Running

1. **Install dependencies:**
   ```bash
   yarn install
   # or
   npm install
   ```
2. **Start Metro bundler:**
   ```bash
   npx expo start -c
   # or for bare RN: npx react-native start --reset-cache
   ```
3. **Run on device/emulator:**
   ```bash
   npx expo run:ios   # or npx react-native run-ios
   npx expo run:android   # or npx react-native run-android
   ```

## Demo Checklist

- [x] Drawer opens/closes with animation
- [x] Drawer shows logo, menu items with icons, and sign out
- [x] Tab navigation (Home, Contact) with icons
- [x] Each tab uses stack navigation (Screen1 → Screen2)
- [x] Tab header is shown on Screen1, stack header is shown on Screen2
- [x] Theming works (light/dark/system)
- [x] TypeScript and Zustand used throughout

## Video Demo

- [Demo Video (mp4)](../assets/rn-navigation-demo.mp4)

1. Show the drawer opening/closing
2. Navigate between Home/Contact tabs
3. Navigate from Screen1 to Screen2
4. Show theme switching (if implemented)

--
