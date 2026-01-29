import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import CartScreen from './src/screens/CartScreen';
import FavouritesScreen from './src/screens/FavouritesScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const FavoritesStack = createNativeStackNavigator();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FBF0F1',
    borderTopColor: '#E5E7EB',
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingTop: 8,
    height: 64,
  },
});

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FBF0F1',
  },
};

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: styles.tabBar,
  tabBarActiveTintColor: '#ED7E7E',
  tabBarInactiveTintColor: '#9CA3AF',
};

const homeOptions = {
  tabBarIcon: ({ color, size, focused }) => (
    <Ionicons
      name={focused ? 'home' : 'home-outline'}
      size={size}
      color={color}
    />
  ),
};

const favoritesOptions = {
  tabBarIcon: ({ color, size, focused }) => (
    <Ionicons
      name={focused ? 'heart' : 'heart-outline'}
      size={size}
      color={color}
    />
  ),
};

const cartOptions = {
  tabBarIcon: ({ color, size, focused }) => (
    <Ionicons
      name={focused ? 'cart' : 'cart-outline'}
      size={size}
      color={color}
    />
  ),
};

const profileOptions = {
  tabBarIcon: ({ color, size, focused }) => (
    <Ionicons
      name={focused ? 'person' : 'person-outline'}
      size={size}
      color={color}
    />
  ),
};

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </HomeStack.Navigator>
  );
}

function FavoritesStackNavigator() {
  return (
    <FavoritesStack.Navigator screenOptions={{ headerShown: false }}>
      <FavoritesStack.Screen
        name="FavouritesScreen"
        component={FavouritesScreen}
      />
      <FavoritesStack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
      />
    </FavoritesStack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={homeOptions}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesStackNavigator}
          options={favoritesOptions}
        />
        <Tab.Screen name="Cart" component={CartScreen} options={cartOptions} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={profileOptions}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
