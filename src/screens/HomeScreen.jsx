import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AppHeader from '../components/AppHeader';
import products from '../data/productData.json';

const { width } = Dimensions.get('window');

const productImages = {
  1: require('../assets/product-image-1.png'),
  2: require('../assets/product-image-2.png'),
  3: require('../assets/product-image-3.png'),
  4: require('../assets/product-image-4.png'),
  5: require('../assets/product-image-5.png'),
};

function HomeScreen({ navigation }) {
  const heroProduct = products[0];

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <AppHeader
          title="Outfit Store"
          subtitle="Discover your next look"
          onMenuPress={() => {}}
          onCartPress={() => {}}
        />

        <View style={styles.heroSection}>
          <View style={styles.heroTextBlock}>
            <Text style={styles.heroLabel}>New Collection</Text>
            <Text style={styles.heroTitle}>{heroProduct?.name}</Text>
            <Text style={styles.heroSubtitle}>Fresh drops for this season</Text>

            <View style={styles.heroPriceRow}>
              <Text style={styles.heroPrice}>{heroProduct?.price}</Text>
              <Text style={styles.heroPriceLabel}>Starting from</Text>
            </View>

            <TouchableOpacity
              style={styles.heroButton}
              activeOpacity={0.85}
              onPress={() =>
                navigation.navigate('ProductDetails', {
                  productId: heroProduct?.id,
                })
              }
            >
              <Text style={styles.heroButtonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>

          {heroProduct && productImages[heroProduct.id] && (
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() =>
                navigation.navigate('ProductDetails', {
                  productId: heroProduct.id,
                })
              }
            >
              <Image
                source={productImages[heroProduct.id]}
                resizeMode="contain"
                style={styles.heroImage}
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular</Text>
          <Text style={styles.sectionLink}>See all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {products.slice(1, 4).map(product => {
            const imageSource = productImages[product.id];
            return (
              <TouchableOpacity
                key={product.id}
                style={styles.card}
                activeOpacity={0.85}
                onPress={() =>
                  navigation.navigate('ProductDetails', {
                    productId: product.id,
                  })
                }
              >
                <View style={styles.cardImageWrapper}>
                  {imageSource && (
                    <Image
                      source={imageSource}
                      resizeMode="cover"
                      style={styles.cardImage}
                    />
                  )}
                  {product.tag ? (
                    <View style={styles.tagBadge}>
                      <Text style={styles.tagText}>{product.tag}</Text>
                    </View>
                  ) : null}
                </View>

                <View style={styles.cardBody}>
                  <Text numberOfLines={1} style={styles.cardTitle}>
                    {product.name}
                  </Text>
                  <Text style={styles.cardPrice}>{product.price}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended for you</Text>
        </View>

        <View style={styles.recommendedRow}>
          {products.slice(3).map(product => {
            const imageSource = productImages[product.id];
            return (
              <TouchableOpacity
                key={product.id}
                style={styles.recommendedCard}
                activeOpacity={0.85}
                onPress={() =>
                  navigation.navigate('ProductDetails', {
                    productId: product.id,
                  })
                }
              >
                {imageSource && (
                  <Image
                    source={imageSource}
                    resizeMode="cover"
                    style={styles.recommendedImage}
                  />
                )}
                <View style={styles.recommendedMeta}>
                  <Text numberOfLines={1} style={styles.recommendedTitle}>
                    {product.name}
                  </Text>
                  <Text style={styles.recommendedPrice}>{product.price}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const CARD_WIDTH = width * 0.6;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF0F1',
  },
  scrollContent: {
    paddingBottom: 32,
  },
  heroSection: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderRadius: 24,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  heroTextBlock: {
    flex: 1,
    paddingRight: 8,
  },
  heroLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#ED7E7E',
    marginBottom: 4,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#333333',
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 12,
  },
  heroPriceRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 8,
    marginBottom: 12,
  },
  heroPrice: {
    fontSize: 22,
    fontWeight: '700',
    color: '#ED7E7E',
  },
  heroPriceLabel: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 2,
  },
  heroButton: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#ED7E7E',
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  heroImage: {
    width: 120,
    height: 140,
  },
  sectionHeader: {
    marginTop: 26,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333333',
  },
  sectionLink: {
    fontSize: 13,
    color: '#6B7280',
  },
  horizontalList: {
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    marginRight: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  cardImageWrapper: {
    width: '100%',
    height: CARD_WIDTH * 0.8,
    overflow: 'hidden',
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
  tagBadge: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tagText: {
    fontSize: 11,
    color: '#ED7E7E',
    fontWeight: '600',
  },
  cardBody: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  cardTitle: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ED7E7E',
  },
  recommendedRow: {
    marginTop: 14,
    marginHorizontal: 20,
  },
  recommendedCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  recommendedImage: {
    width: 64,
    height: 64,
    borderRadius: 16,
    marginRight: 12,
  },
  recommendedMeta: {
    flex: 1,
  },
  recommendedTitle: {
    fontSize: 14,
    color: '#333333',
    marginBottom: 3,
  },
  recommendedPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ED7E7E',
  },
});

export default HomeScreen;
