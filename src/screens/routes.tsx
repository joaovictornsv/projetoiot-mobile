import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'

import FavoritesScreen from './Favorites';
import CreateScreen from "./Create";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#151922',
          borderTopColor: 'transparent',
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarActiveTintColor: '#D27842',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          )
        }}
        name="History"
        component={FavoritesScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="home" color={color} size={size} />
          )
        }}
        name="Create"
        component={CreateScreen}
      />
    </Tab.Navigator>
  );
}
