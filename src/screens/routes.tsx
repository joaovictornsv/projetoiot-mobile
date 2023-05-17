import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons'

import RecentAccessScreen from './RecentAccess';
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
        tabBarActiveTintColor: '#7286D3',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="list" color={color} size={size} />
          )
        }}
        name="History"
        component={RecentAccessScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="user" color={color} size={size} />
          )
        }}
        name="Create"
        component={CreateScreen}
      />
    </Tab.Navigator>
  );
}
