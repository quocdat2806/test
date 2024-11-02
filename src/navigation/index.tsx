import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from '../routers';
import Home from '../screens/Home';
import {VideoScreen} from '../screens/Videos';
import {FriendScreen} from '../screens/Friend';
import {ShoppingCartScreen} from '../screens/ShoppingCart';
import {ChatScreen} from '../screens/Chat';
import {
  HomeIcon,
  MessageIcon,
  ShoppingCartIcon,
  UserProfile02Icon,
  VideoIcon,
} from '../assets/icons';
import {StatusBar, View} from 'react-native';
import AppText from '../components/Text';
import React from 'react';
import AppColors from '../constants/colors';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PostDetail from '../screens/PostDetail';
import {RootStackParamList} from '../routers/type';
const RootStack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="PostDetail"
        component={PostDetail}
        options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
}

function CustomTabBarIcon({
  focused,
  icon,
  label,
}: {
  focused: boolean;
  icon: React.JSX.Element;
  label: string;
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: focused ? AppColors.blue : AppColors.white,
        borderRadius: focused ? 20 : 0,
        paddingVertical: focused ? 6 : 0,
        paddingHorizontal: focused ? 8 : 0,
      }}>
      {icon}
      {focused && (
        <AppText
          style={{
            color: focused ? AppColors.white : AppColors.black,
            marginLeft: focused ? 4 : 0,
          }}
          text={label}
        />
      )}
    </View>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      {/* <StatusBar hidden /> */}
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            paddingHorizontal: 12,
          },
        }}
        initialRouteName={Routes.HOME}>
        <Tab.Screen
          name={Routes.HOME}
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                focused={focused}
                icon={
                  <HomeIcon
                    color={focused ? AppColors.white : AppColors.black1}
                    stroke={focused ? AppColors.white : AppColors.black1}
                  />
                }
                label="Home"
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name={Routes.VIDEO}
          component={VideoScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                focused={focused}
                icon={
                  <VideoIcon
                    stroke={focused ? AppColors.white : AppColors.black1}
                  />
                }
                label="Video"
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name={Routes.FRIEND}
          component={FriendScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                focused={focused}
                icon={
                  <UserProfile02Icon
                    color={focused ? AppColors.white : AppColors.black1}
                    stroke={focused ? AppColors.white : AppColors.black1}
                  />
                }
                label="Friend"
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name={Routes.SHOPPINGCART}
          component={ShoppingCartScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                focused={focused}
                icon={
                  <ShoppingCartIcon
                    stroke={focused ? AppColors.white : AppColors.black1}
                  />
                }
                label="Cart"
              />
            ),
            tabBarLabel: () => null,
          }}
        />
        <Tab.Screen
          name={Routes.CHAT}
          component={ChatScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <CustomTabBarIcon
                focused={focused}
                icon={
                  <MessageIcon
                    stroke={focused ? AppColors.white : AppColors.black1}
                  />
                }
                label="Chat"
              />
            ),
            tabBarLabel: () => null,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
