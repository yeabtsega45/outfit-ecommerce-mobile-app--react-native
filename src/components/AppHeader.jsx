import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const profileImage = require('../assets/profile-picture.png');

function AppHeader({ title, subtitle, onMenuPress, onCartPress }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.iconButton}
        onPress={onMenuPress}
        activeOpacity={0.7}
      >
        <Ionicons name="menu" size={22} color="#e5e7eb" />
      </TouchableOpacity>

      <View style={styles.centerContent}>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.rightGroup}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onCartPress}
          activeOpacity={0.7}
        >
          <Ionicons name="bag-outline" size={20} color="#e5e7eb" />
        </TouchableOpacity>

        <Image source={profileImage} style={styles.avatar} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
  },
  centerContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#f9fafb',
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 2,
  },
  rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
    borderWidth: 1,
    borderColor: 'rgba(55, 65, 81, 0.6)',
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginLeft: 4,
  },
});

export default AppHeader;
