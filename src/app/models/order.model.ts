import { Product } from './product.model';

export class Order {
  id: number = 0;
  products: Product[] = [];
  totalpayed: number = 0;
}
