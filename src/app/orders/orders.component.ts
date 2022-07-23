import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order.model';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  Orders: Order[] = [];
  constructor(private ordersService: OrdersService) {
    this.Orders = this.ordersService.getAllorder();
  }
  ngOnInit(): void {}
}
