import { Product } from "./products.model";

export class StoreProduct extends Product {
  product: String;
  useDefaultPrice: Boolean;
  price: Number;
  availableQuantity: Number;
  store: String;
  createdAt: Date;
  updatedAt: Date;  
}