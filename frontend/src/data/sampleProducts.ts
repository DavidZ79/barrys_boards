import { Product, ProductCategory } from '../types/Product';

export const sampleProducts: Product[] = [
  // Keyboards
  {
    id: 1,
    name: "60% Mechanical Keyboard - Black",
    description: "Compact 60% mechanical keyboard with RGB backlighting and hot-swappable switches. Perfect for gaming and productivity.",
    price: 89.99,
    stockQuantity: 15,
    category: ProductCategory.KEYBOARD,
    imageUrl: "/assets/KEEB/keebs/60%/black61.JPG",
    sku: "KB-60-BLK-001",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 2,
    name: "75% Mechanical Keyboard - Crystal",
    description: "Premium 75% layout keyboard with crystal clear case design. Features premium switches and customizable RGB lighting.",
    price: 149.99,
    stockQuantity: 8,
    category: ProductCategory.KEYBOARD,
    imageUrl: "/assets/KEEB/keebs/crystal/crystal75.jpg",
    sku: "KB-75-CRY-001",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 3,
    name: "96% Mechanical Keyboard",
    description: "Full-size functionality in a compact 96% layout. Perfect for those who need a numpad but want a smaller footprint.",
    price: 129.99,
    stockQuantity: 12,
    category: ProductCategory.KEYBOARD,
    imageUrl: "/assets/KEEB/keebs/96%/96percent.jpg",
    sku: "KB-96-001",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },

  // Keycaps
  {
    id: 4,
    name: "Sakura Keycap Set",
    description: "Beautiful cherry blossom themed keycap set with Japanese sub-legends. PBT material for durability and premium feel.",
    price: 79.99,
    stockQuantity: 25,
    category: ProductCategory.KEYCAP,
    imageUrl: "/assets/KEEB/keycap images/sakura.jpg",
    sku: "KC-SAK-001",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 5,
    name: "Matcha Green Keycap Set",
    description: "Elegant matcha green keycap set with subtle texture. Perfect for a calming, nature-inspired setup.",
    price: 69.99,
    stockQuantity: 18,
    category: ProductCategory.KEYCAP,
    imageUrl: "/assets/KEEB/keycap images/matcha.jpg",
    sku: "KC-MAT-001",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 6,
    name: "Sushi Themed Keycap Set",
    description: "Unique sushi-themed keycap set featuring various sushi designs. A fun and quirky addition to any keyboard.",
    price: 89.99,
    stockQuantity: 10,
    category: ProductCategory.KEYCAP,
    imageUrl: "/assets/KEEB/keycap images/sushi.jpg",
    sku: "KC-SUS-001",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 7,
    name: "Black & White Minimalist Keycaps",
    description: "Clean and minimalist black and white keycap set. Perfect for a professional or monochrome aesthetic.",
    price: 59.99,
    stockQuantity: 30,
    category: ProductCategory.KEYCAP,
    imageUrl: "/assets/KEEB/keycap images/black and white.webp",
    sku: "KC-BW-001",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 8,
    name: "Bubble Gum Keycap Set",
    description: "Playful bubble gum colored keycap set with a fun, vibrant aesthetic. Great for adding personality to your setup.",
    price: 49.99,
    stockQuantity: 22,
    category: ProductCategory.KEYCAP,
    imageUrl: "/assets/KEEB/keycap images/bubble.jpg",
    sku: "KC-BUB-001",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 9,
    name: "MSI Gaming Keycap Set",
    description: "Gaming-focused keycap set with MSI branding and aggressive styling. Perfect for gaming enthusiasts.",
    price: 74.99,
    stockQuantity: 15,
    category: ProductCategory.KEYCAP,
    imageUrl: "/assets/KEEB/keycap images/msi.jpg",
    sku: "KC-MSI-001",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    id: 10,
    name: "Glacier Blue Keycap Set",
    description: "Cool glacier blue keycap set with a frosty, premium appearance. Ideal for a clean, modern aesthetic.",
    price: 64.99,
    stockQuantity: 20,
    category: ProductCategory.KEYCAP,
    imageUrl: "/assets/KEEB/keycap images/glacier.webp",
    sku: "KC-GLA-001",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  }
]; 