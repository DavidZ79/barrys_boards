export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: ProductCategory;
  imageUrl: string;
  sku: string;
  createdAt: string;
  updatedAt: string;
}

export enum ProductCategory {
  KEYBOARD = 'KEYBOARD',
  SWITCH = 'SWITCH',
  KEYCAP = 'KEYCAP',
  PCB = 'PCB',
  CASE = 'CASE',
  STABILIZER = 'STABILIZER',
  CABLE = 'CABLE',
  TOOL = 'TOOL',
  ACCESSORY = 'ACCESSORY'
} 