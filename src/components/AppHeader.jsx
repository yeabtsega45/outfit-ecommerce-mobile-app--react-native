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
        <Ionicons name="menu" size={22} color="#333333" />
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
          <Ionicons name="bag-outline" size={20} color="#333333" />
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
    color: '#333333',
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 12,
    color: '#6B7280',
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
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    marginLeft: 4,
  },
});

export default AppHeader;
