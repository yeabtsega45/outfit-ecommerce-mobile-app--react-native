# Outfit Ecommerce Mobile

A React Native e-commerce mobile app for browsing and shopping outfit products. Features a light, modern UI with a consistent pink-and-white theme across all screens.

## Features

- **Home** – Product discovery with a hero section, popular products carousel, and recommended items (data from `productData.json`)
- **Product details** – Full product view with size/color options and Add to Cart
- **Favourites** – Grid of saved products; tap to view details or remove with the heart icon
- **Cart** – Cart items with image, name, price, size/color; order summary and Checkout button
- **Profile** – User info, menu (Orders, Addresses, Payment, Settings, Help), and Log out

## Screens

| Screen              | Description                                                                                            |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| **Home**            | Hero product, “Popular” horizontal list, “Recommended for you” list                                    |
| **Product Details** | Large product image, name, price, size chips (S/M/L/XL), color swatches, Add to Cart                   |
| **Favourites**      | 2-column grid of favourited products; empty state when none                                            |
| **Cart**            | List of cart items with remove; Total, Shipping, Grand Total; Checkout button                          |
| **Profile**         | Avatar, name, email; My Orders, Shipping Addresses, Payment Methods, Settings, Help & Support; Log Out |

## Tech Stack

- **React Native** (0.83.x) with **React** 19
- **React Navigation** – Bottom tabs + native stack
  - `@react-navigation/native`
  - `@react-navigation/bottom-tabs`
  - `@react-navigation/native-stack`
- **React Native Vector Icons** (Ionicons)
- **React Native Linear Gradient** (used where applicable)
- **Product data** – `src/data/productData.json`
- **Assets** – `src/assets/` (product images, profile picture)

## Project Structure

```
├── App.jsx                    # Root: NavigationContainer, bottom tabs, stacks
├── src/
│   ├── assets/                # product-image-1..5.png, profile-picture.png
│   ├── components/
│   │   └── AppHeader.jsx      # Reusable header (title, menu, cart, avatar)
│   ├── data/
│   │   └── productData.json   # Product list (id, name, price, image path, tag)
│   └── screens/
│       ├── HomeScreen.jsx
│       ├── ProductDetailsScreen.jsx
│       ├── FavouritesScreen.jsx
│       ├── CartScreen.jsx
│       └── ProfileScreen.jsx
├── android/
├── ios/
└── package.json
```

## Navigation

- **Tabs:** Home, Favourites, Cart, Profile (icons only, light pink active colour).
- **Home stack:** Home → Product Details.
- **Favourites stack:** Favourites → Product Details.
- Cart and Profile are single screens per tab.

## Getting Started

> Make sure you’ve completed the [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment) first.

### 1. Install dependencies

```sh
npm install
```

### 2. Start Metro

```sh
npm start
```

### 3. Run the app

**Android**

```sh
npm run android
```

**iOS** (install CocoaPods deps first)

```sh
bundle install
bundle exec pod install
npm run ios
```

### 4. Reload

- **Android:** Double-tap <kbd>R</kbd> or Dev Menu (<kbd>Ctrl</kbd>+<kbd>M</kbd> / <kbd>Cmd</kbd>+<kbd>M</kbd>) → Reload.
- **iOS:** <kbd>R</kbd> in the simulator.

## Scripts

| Command           | Description         |
| ----------------- | ------------------- |
| `npm start`       | Start Metro bundler |
| `npm run android` | Run on Android      |
| `npm run ios`     | Run on iOS          |
| `npm run lint`    | Run ESLint          |
| `npm test`        | Run Jest tests      |

## Learn More

- [React Native](https://reactnative.dev)
- [React Navigation](https://reactnavigation.org)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
