import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import products from '../data/productData.json';

const profileImage = require('../assets/profile-picture.png');

const productImages = {
  1: require('../assets/product-image-1.png'),
  2: require('../assets/product-image-2.png'),
  3: require('../assets/product-image-3.png'),
  4: require('../assets/product-image-4.png'),
  5: require('../assets/product-image-5.png'),
};

const { width } = Dimensions.get('window');
const CARD_PADDING = 20;
const CARD_GAP = 16;
const NUM_COLUMNS = 2;
const CARD_WIDTH = (width - CARD_PADDING * 2 - CARD_GAP) / NUM_COLUMNS;

// Sample favourites - first 4 products
const initialFavouriteIds = ['1', '2', '3', '4'];

function FavouritesScreen({ navigation }) {
  const [favouriteIds, setFavouriteIds] = useState(initialFavouriteIds);

  const favouriteProducts = products.filter(p => favouriteIds.includes(p.id));

  const removeFavourite = productId => {
    setFavouriteIds(favouriteIds.filter(id => id !== productId));
  };

  const goToProduct = productId => {
    navigation.navigate('ProductDetails', { productId });
  };

  const goToHome = () => {
    const parent = navigation.getParent();
    if (parent) {
      parent.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={goToHome}
          activeOpacity={0.8}
        >
          <Ionicons name="chevron-back" size={20} color="#e24b3c" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Favourites</Text>

        <Image source={profileImage} style={styles.profileImage} />
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {favouriteProducts.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="heart-outline" size={64} color="#ED7E7E" />
            <Text style={styles.emptyTitle}>No favourites yet</Text>
            <Text style={styles.emptySubtitle}>
              Tap the heart on products you love to add them here
            </Text>
          </View>
        ) : (
          <View style={styles.grid}>
            {favouriteProducts.map(product => {
              const imageSource = productImages[product.id];
              return (
                <TouchableOpacity
                  key={product.id}
                  style={styles.card}
                  activeOpacity={0.85}
                  onPress={() => goToProduct(product.id)}
                >
                  <View style={styles.imageWrapper}>
                    {imageSource && (
                      <Image
                        source={imageSource}
                        style={styles.productImage}
                        resizeMode="cover"
                      />
                    )}
                    <TouchableOpacity
                      style={styles.heartButton}
                      onPress={() => removeFavourite(product.id)}
                      activeOpacity={0.7}
                      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    >
                      <Ionicons name="heart" size={22} color="#ED7E7E" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.cardBody}>
                    <Text numberOfLines={2} style={styles.productName}>
                      {product.name}
                    </Text>
                    <Text style={styles.productPrice}>{product.price}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>
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
    paddingHorizontal: CARD_PADDING,
    paddingBottom: 32,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: CARD_WIDTH,
    marginBottom: CARD_GAP,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  imageWrapper: {
    width: '100%',
    height: CARD_WIDTH * 1.2,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  heartButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333333',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ED7E7E',
  },
  emptyState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333333',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    paddingHorizontal: 32,
  },
});

export default FavouritesScreen;
