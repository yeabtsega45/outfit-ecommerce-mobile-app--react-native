import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const profileImage = require('../assets/profile-picture.png');

const productImages = {
  1: require('../assets/product-image-1.png'),
  2: require('../assets/product-image-2.png'),
  3: require('../assets/product-image-3.png'),
  4: require('../assets/product-image-4.png'),
  5: require('../assets/product-image-5.png'),
};

// Sample cart data - in a real app, this would come from a state management solution
const initialCartItems = [
  {
    id: '1',
    productId: '1',
    name: 'Jacket Jeans',
    price: '$37.9',
    color: '#9db3c8',
    size: 'L',
    image: productImages[1],
  },
  {
    id: '2',
    productId: '3',
    name: 'Acrylic Sweater',
    price: '$35.9',
    color: '#e24b3c',
    size: 'M',
    image: productImages[3],
  },
  {
    id: '3',
    productId: '4',
    name: 'Acrylic Sweater',
    price: '$45.9',
    color: '#111827',
    size: 'M',
    image: productImages[4],
  },
];

function CartScreen({ navigation }) {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const removeItem = itemId => {
    setCartItems(cartItems.filter(item => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return sum + price;
    }, 0);
  };

  const total = calculateTotal();
  const shipping = 0.0;
  const grandTotal = total + shipping;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation?.goBack()}
          activeOpacity={0.8}
        >
          <Ionicons name="chevron-back" size={20} color="#e24b3c" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>My Cart</Text>

        <Image source={profileImage} style={styles.profileImage} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Cart Items */}
        {cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Image source={item.image} style={styles.productImage} />

            <View style={styles.itemDetails}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>

              <View style={styles.optionsRow}>
                <View
                  style={[styles.colorSwatch, { backgroundColor: item.color }]}
                />
                <View style={styles.sizeBox}>
                  <Text style={styles.sizeText}>{item.size}</Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => removeItem(item.id)}
              activeOpacity={0.7}
            >
              <Ionicons name="trash-outline" size={20} color="#FFB3B3" />
            </TouchableOpacity>
          </View>
        ))}

        {/* Order Summary */}
        <View style={styles.summarySection}>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Total:</Text>
            <Text style={styles.summaryValue}>${total.toFixed(1)}</Text>
          </View>

          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Shipping:</Text>
            <Text style={styles.summaryValue}>${shipping.toFixed(1)}</Text>
          </View>

          <View style={styles.separator} />

          <View style={styles.summaryRow}>
            <Text style={styles.grandTotalLabel}>Grand Total:</Text>
            <Text style={styles.grandTotalValue}>${grandTotal.toFixed(1)}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Checkout Button */}
      <View style={styles.checkoutContainer}>
        <TouchableOpacity style={styles.checkoutButton} activeOpacity={0.85}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF0F1',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FEE7EA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  productImage: {
    width: 80,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
  },
  itemDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '400',
    color: '#333333',
    marginBottom: 8,
  },
  optionsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  colorSwatch: {
    width: 18,
    height: 18,
    borderRadius: 9,
  },
  sizeBox: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  sizeText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#6B7280',
  },
  deleteButton: {
    padding: 8,
  },
  summarySection: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6B7280',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: '400',
    color: '#9CA3AF',
  },
  separator: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 12,
  },
  grandTotalLabel: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333333',
  },
  grandTotalValue: {
    fontSize: 16,
    fontWeight: '400',
    color: '#9CA3AF',
  },
  checkoutContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 12,
    backgroundColor: '#FBF0F1',
  },
  checkoutButton: {
    backgroundColor: '#ED7E7E',
    borderRadius: 999,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});

export default CartScreen;
