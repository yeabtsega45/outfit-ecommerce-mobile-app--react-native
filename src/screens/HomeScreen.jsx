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
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from '../components/AppHeader';

const { width } = Dimensions.get('window');

const products = [
  {
    id: '1',
    name: 'Minimal Orange Jacket',
    price: '$89.99',
    image: require('../assets/product-image-1.png'),
    tag: 'New',
  },
  {
    id: '2',
    name: 'Classic Beige Coat',
    price: '$119.99',
    image: require('../assets/product-image-2.png'),
    tag: 'Best',
  },
  {
    id: '3',
    name: 'Streetwear Hoodie',
    price: '$79.99',
    image: require('../assets/product-image-3.png'),
    tag: 'Hot',
  },
  {
    id: '4',
    name: 'Grey Knit Sweater',
    price: '$69.99',
    image: require('../assets/product-image-4.png'),
  },
  {
    id: '5',
    name: 'Casual White Tee',
    price: '$29.99',
    image: require('../assets/product-image-5.png'),
  },
];

function HomeScreen() {
  return (
    <LinearGradient
      colors={['#0f172a', '#020617']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
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
            <Text style={styles.heroTitle}>Street Minimal</Text>
            <Text style={styles.heroSubtitle}>Fresh drops for this season</Text>

            <View style={styles.heroPriceRow}>
              <Text style={styles.heroPrice}>$89.99</Text>
              <Text style={styles.heroPriceLabel}>Starting from</Text>
            </View>

            <TouchableOpacity
              style={styles.heroButton}
              activeOpacity={0.85}
            >
              <Text style={styles.heroButtonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={products[0].image}
            resizeMode="contain"
            style={styles.heroImage}
          />
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
          {products.slice(1, 4).map(product => (
            <TouchableOpacity
              key={product.id}
              style={styles.card}
              activeOpacity={0.85}
            >
              <View style={styles.cardImageWrapper}>
                <Image
                  source={product.image}
                  resizeMode="cover"
                  style={styles.cardImage}
                />
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
          ))}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended for you</Text>
        </View>

        <View style={styles.recommendedRow}>
          {products.slice(3).map(product => (
            <TouchableOpacity
              key={product.id}
              style={styles.recommendedCard}
              activeOpacity={0.85}
            >
              <Image
                source={product.image}
                resizeMode="cover"
                style={styles.recommendedImage}
              />
              <View style={styles.recommendedMeta}>
                <Text numberOfLines={1} style={styles.recommendedTitle}>
                  {product.name}
                </Text>
                <Text style={styles.recommendedPrice}>{product.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const CARD_WIDTH = width * 0.6;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
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
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
  },
  heroTextBlock: {
    flex: 1,
    paddingRight: 8,
  },
  heroLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: '#f97316',
    marginBottom: 4,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#f9fafb',
    marginBottom: 4,
  },
  heroSubtitle: {
    fontSize: 13,
    color: '#9ca3af',
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
    color: '#f97316',
  },
  heroPriceLabel: {
    fontSize: 12,
    color: '#9ca3af',
    marginBottom: 2,
  },
  heroButton: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#f97316',
    alignSelf: 'flex-start',
  },
  heroButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0b1120',
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
    color: '#f9fafb',
  },
  sectionLink: {
    fontSize: 13,
    color: '#9ca3af',
  },
  horizontalList: {
    paddingHorizontal: 20,
    paddingTop: 18,
  },
  card: {
    width: CARD_WIDTH,
    borderRadius: 22,
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
    marginRight: 16,
    overflow: 'hidden',
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
    backgroundColor: 'rgba(15, 23, 42, 0.9)',
  },
  tagText: {
    fontSize: 11,
    color: '#f97316',
    fontWeight: '600',
  },
  cardBody: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  cardTitle: {
    fontSize: 14,
    color: '#e5e7eb',
    marginBottom: 4,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#f97316',
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
    backgroundColor: 'rgba(15, 23, 42, 0.95)',
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
    color: '#e5e7eb',
    marginBottom: 3,
  },
  recommendedPrice: {
    fontSize: 14,
    fontWeight: '700',
    color: '#f97316',
  },
});

export default HomeScreen;

