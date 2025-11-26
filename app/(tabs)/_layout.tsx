import { Tabs } from 'expo-router';
import React from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: 'Shop',
          tabBarIcon: ({ color }) =><Entypo name="shop" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ConsultScreen"
        options={{
          title: 'Consult',
          tabBarIcon: ({ color }) => <FontAwesome6 name="user-doctor" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="forum"
        options={{
          title: 'Forum',
          tabBarIcon: ({ color }) => <Entypo name="leaf" size={24} color={color}/>,
        }}
      />
      <Tabs.Screen
        name="bulletin"
        options={{
          title: 'Bulletin',
          tabBarIcon: ({ color }) => <FontAwesome name="bell-o" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
