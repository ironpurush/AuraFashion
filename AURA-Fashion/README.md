# AURA Fashion Website

## Project Structure
```
AURA-Fashion/
├── index.html          ← Main HTML file (open this in browser)
├── styles.css          ← All styles
├── script.js           ← All interactivity
├── products.js         ← All 122 product listings ← EDIT THIS FILE
├── logo.jpg            ← AURA Fashion logo
└── images/
    ├── biba/
    │   ├── 34/  (15 kurtis)
    │   ├── 36/  (7 kurtis)
    │   ├── 38/  (5 kurtis)
    │   ├── 40/  (6 kurtis)
    │   └── 42/  (6 kurtis)
    └── rangriti/
        ├── 34/  (26 kurtis)
        ├── 36/  (19 kurtis)
        ├── 38/  (22 kurtis)
        ├── 42/  (14 kurtis)
        └── 46/  (2 kurtis)
```

## How to Mark a Product as Sold Out
Open `products.js` and find the product by ID, then change `soldOut: false` → `soldOut: true`

```js
{ id: "AURA-001", ..., soldOut: true }   // ← Sold Out
{ id: "AURA-002", ..., soldOut: false }  // ← Available
```

## How to Add a New Product
1. Put the image in `images/biba/` or `images/rangriti/` in the correct size folder
2. Open `products.js` and add a new entry at the end:

```js
{
  id: "AURA-123",
  name: "Your Kurti Name",
  brand: "BIBA",           // or "Rangriti"
  size: "38",
  description: "Your description here.",
  image: "images/biba/38/your_image.jpg",
  soldOut: false
}
```

## Deployment
- **GitHub Pages**: Push folder, enable Pages in repo settings
- **Netlify**: Drag & drop the folder at netlify.com/drop
- **Vercel**: Import repo or drag folder at vercel.com
- **Hostinger**: Upload via File Manager or FTP

## WhatsApp
Number: +91 83560 59051
Clicking "Buy on WhatsApp" auto-fills the customer's message with Product ID.
