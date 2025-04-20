
# Tinder-Style Product Discovery App

A swipe-based product discovery web app built with **React**, **Tailwind CSS**, **react-spring**, and **use-gesture**. Users can swipe left (pass), right (save), or up (add to cart). The state resets after all products are swiped. Fully frontend—no backend required.

## Features

- Tinder-style swipe gestures (left, right, up)
- Card animation using react-spring
- Stack-based card layout
- Product save/pass/cart actions
- Swipe state indicator
- Responsive mobile-first UI
- No backend required

## Tech Stack

- **React.js**
- **Tailwind CSS**
- **react-spring**
- **@use-gesture/react**
- **TypeScript**
- **Vite**

## Setup Instructions

1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/swipe-products.git
cd swipe-products
```

2. **Install Dependencies**
```bash
npm install --legacy-peers-deps
```

3. **Run the App Locally**
```bash
npm run dev
```

4. **View on Mobile**
- Open [http://localhost:5173](http://localhost:5173) on your browser or mobile emulator.

## Project Structure

```
src/
├── components/         # SwipeableCard, ProductCard
├── data/               # products.ts
├── hooks/              # useSwipe logic
├── App.tsx             # Entry point
├── main.tsx            # Vite entry
```

## How It Works

- Each product card is rendered in a stack.
- useSwipe handles gesture detection and triggers corresponding animations.
- When a swipe exceeds a threshold, the product is removed from view.
- All cards reset once swiped.
- The top swipe adds to cart, left passes, and right saves.

## Build for Production

```bash
npm run build
```

Deploy using **Vercel**, **Netlify**, or any static hosting service.
