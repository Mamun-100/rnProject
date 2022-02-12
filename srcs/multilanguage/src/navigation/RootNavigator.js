import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';


const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const { t } = useTranslation();
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{ tabBarLabel: t('navigate:home') }}
        />
        <Tab.Screen
          name='Settings'
          component={SettingsScreen}
          options={{ tabBarLabel: t('navigate:settings') }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
