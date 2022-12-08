/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorPropType, ColorSchemeName, Pressable, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons'

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import EntryScreen from '../screens/EntryScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import Layout from '../constants/Layout';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={MainTabNavigator} options={{ 
        headerStyle: {
          backgroundColor: Colors.header.background
        },
        headerTintColor: Colors.header.text,
        title: 'Manga Journal',
        headerRight: () => (
          <View style={{
            flexDirection:'row',
            width: 60,
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
            <FontAwesome
              name='search'
              size={24}
              color={Colors.header.text}
            />
            <Ionicons
              name='filter'
              size={24}
              color={Colors.header.text}
            />
          </View>
        )
      }}/>
      <Stack.Screen
        name="Entry"
        component={EntryScreen} 
        options={{ 
          title: 'Update Info',
          headerStyle: {
            backgroundColor: Colors.header.background
          },
          headerTintColor: Colors.header.text, 
        }} 
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors.header.text_light,
        tabBarStyle: {
          backgroundColor: Colors.header.background_darkgray,
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors.header.text_light,
          height: 4
        },
        tabBarLabelStyle: {
          fontWeight: 'bold'
        },
        tabBarShowIcon: true,
      }}>
      <MainTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="book" size={25} color={color} />,
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="plus-circle" size={25} color={color} />,
          tabBarLabel: () => null,
        }}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
