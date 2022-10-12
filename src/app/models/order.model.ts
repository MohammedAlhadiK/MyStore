import { Product } from './product.model';
export class Order {
  id: number = 0;
  products: Product[] = [];
  totalpayed: number = 0;
  fullname: string = '';
  address: string = '';
  creditcard: string = '';
  datetimeCreated: Date = new Date();
}
