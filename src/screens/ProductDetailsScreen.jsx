import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const productImage = require('../assets/product-image-2.png');
const profileImage = require('../assets/profile-picture.png');

const SIZES = ['S', 'M', 'L', 'XL'];
const COLORS = [
  '#9db3c8',
  '#e24b3c',
  '#3f5fbf',
  '#c8944b',
  '#1d5b37',
  '#111827',
];

function ProductDetailsScreen() {
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColorIndex, setSelectedColorIndex] = useState(1);

  return (
    <View style={styles.screen}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <View style={styles.imageSection}>
            <View style={styles.headerRow}>
              <TouchableOpacity activeOpacity={0.8} style={styles.gridButton}>
                <View style={styles.gridDotRow}>
                  <View style={styles.gridDot} />
                  <View style={styles.gridDot} />
                </View>
                <View style={styles.gridDotRow}>
                  <View style={styles.gridDot} />
                  <View style={styles.gridDot} />
                </View>
              </TouchableOpacity>
              <Image source={profileImage} style={styles.avatar} />
            </View>

            <Image
              source={productImage}
              style={styles.productImage}
              resizeMode="cover"
            />
          </View>

          <View style={styles.detailsSection}>
            <View style={styles.titleRow}>
              <Text style={styles.productName}>Winter Coat</Text>
              <Text style={styles.productPrice}>$65.9</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Size</Text>
              <View style={styles.sizeRow}>
                {SIZES.map(size => {
                  const selected = size === selectedSize;
                  return (
                    <TouchableOpacity
                      key={size}
                      activeOpacity={0.8}
                      style={[
                        styles.sizeChip,
                        selected && styles.sizeChipSelected,
                      ]}
                      onPress={() => setSelectedSize(size)}
                    >
                      <Text
                        style={[
                          styles.sizeText,
                          selected && styles.sizeTextSelected,
                        ]}
                      >
                        {size}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionLabel}>Colors</Text>
              <View style={styles.colorRow}>
                {COLORS.map((color, index) => {
                  const selected = index === selectedColorIndex;
                  return (
                    <TouchableOpacity
                      key={color}
                      activeOpacity={0.8}
                      style={[
                        styles.colorOuter,
                        selected && styles.colorOuterSelected,
                      ]}
                      onPress={() => setSelectedColorIndex(index)}
                    >
                      <View
                        style={[styles.colorInner, { backgroundColor: color }]}
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <TouchableOpacity activeOpacity={0.85} style={styles.addButton}>
              <Text style={styles.addButtonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffeef5',
  },
  scrollContent: {
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  card: {
    borderRadius: 36,
    overflow: 'hidden',
    backgroundColor: '#ffeef5',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 6,
  },
  imageSection: {
    backgroundColor: '#ffeef5',
    paddingTop: 18,
    paddingHorizontal: 20,
  },
  headerRow: {
    position: 'absolute',
    top: 22,
    left: 20,
    right: 20,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  gridButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gridDotRow: {
    flexDirection: 'row',
  },
  gridDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#f87171',
    margin: 2,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: '#ffeef5',
  },
  productImage: {
    width: '100%',
    height: 360,
    borderRadius: 28,
    marginTop: 30,
  },
  detailsSection: {
    backgroundColor: '#fff5f6',
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 28,
    borderBottomLeftRadius: 36,
    borderBottomRightRadius: 36,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  productName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  section: {
    marginBottom: 18,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4b5563',
    marginBottom: 10,
  },
  sizeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizeChip: {
    width: 34,
    height: 34,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  sizeChipSelected: {
    backgroundColor: '#f87171',
    borderColor: '#f87171',
  },
  sizeText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#6b7280',
  },
  sizeTextSelected: {
    color: '#ffffff',
  },
  colorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorOuter: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  colorOuterSelected: {
    borderColor: '#f87171',
  },
  colorInner: {
    width: 22,
    height: 22,
    borderRadius: 11,
  },
  addButton: {
    marginTop: 10,
    backgroundColor: '#f87171',
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
  },
});

export default ProductDetailsScreen;
