import { Injectable } from '@angular/core';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private Orders: Order[] = [];

  constructor() {}
  getAllorder(): Order[] {
    return this.Orders;
  }
  getorderByID(orderid: number): Order {
    let Currentorder = this.Orders.filter((x) => x.id === orderid)[0];
    return Currentorder;
  }
  addorderToCart(targetedorder: Order) {
    this.Orders.push(targetedorder);
  }
  removeorder(orderid: number): void {
    this.Orders.splice(orderid, 1);
  }
  clearCart() {
    this.Orders = [];
  }
}
