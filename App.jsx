import React from 'react';
import { StatusBar, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#020617',
    borderTopColor: '#111827',
    borderTopWidth: 1,
    paddingBottom: 8,
    paddingTop: 8,
    height: 64,
  },
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#020617',
  },
  placeholderTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#e5e7eb',
    marginBottom: 4,
  },
  placeholderSubtitle: {
    fontSize: 14,
    color: '#9ca3af',
  },
});

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#020617',
  },
};

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarStyle: styles.tabBar,
  tabBarActiveTintColor: '#f97316',
  tabBarInactiveTintColor: '#6b7280',
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

function PlaceholderScreen({ title }) {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholderTitle}>{title}</Text>
      <Text style={styles.placeholderSubtitle}>Content coming soon</Text>
    </View>
  );
}

function FavoritesScreen() {
  return <PlaceholderScreen title="Favorites" />;
}

function CartScreen() {
  return <PlaceholderScreen title="Cart" />;
}

function ProfileScreen() {
  return <PlaceholderScreen title="Profile" />;
}

function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <StatusBar barStyle="light-content" />
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          options={homeOptions}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
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
