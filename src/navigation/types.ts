import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  Screen1: undefined;
  Screen2: undefined;
};

export type TabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Contact: undefined;
};

export type RootStackParamList = {
  Main: NavigatorScreenParams<TabParamList>;
  Modal: undefined;
}; 