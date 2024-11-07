import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from '../routers';
import HomeScreen from '../screens/Home';

import {View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostDetail from '../screens/PostDetail';
import {RootStackParamList} from '../routers/type';
const RootStack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <RootStack.Navigator initialRouteName={Routes.Home}>
      <RootStack.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

// function CustomTabBarIcon({
//   focused,
//   icon,
//   label,
// }: {
//   focused: boolean;
//   icon: React.JSX.Element;
//   label: string;
// }) {
//   return <View></View>;
// }

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={Routes.Home}>
        <Tab.Screen
          options={{headerShown: false}}
          name={Routes.HomeStack}
          component={HomeStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
