import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { Main } from '../components/core/ui/Main';
import { TrackDetailsPage } from '../components/core/ui/TrackDetailsPage';
import { RootStackParamList } from './types';
import { Platform, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import { svgImages } from '../components/assets/SvgImages';
import { Header } from '../components/core/ui/Header';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: ({ route }) => (
          <Header title={route.name}/>
        ),
      }}
    >
      <Stack.Screen
        name="Home"
        component={Main}
        options={{
          title: 'Music List',
        }}
      />
      <Stack.Screen
        name="TrackDetails"
        component={TrackDetailsPage}
        options={{
          title: 'Track Details',
        }}
      />
    </Stack.Navigator>
  );
};
