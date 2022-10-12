import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-order-confirmation-page',
  templateUrl: './order-confirmation-page.component.html',
  styleUrls: ['./order-confirmation-page.component.css'],
})
export class OrderConfirmationPageComponent implements OnInit {
  order: Order = new Order();
  Products: Product[] = [];
  total: number = 0;
  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router,
    private snackbarService: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.order =
      this.ordersService.getAllorder()[
        this.ordersService.getAllorder().length - 1
      ];
    this.total = this.order.totalpayed;

    this.Products = this.order.products;
  }
  checkOut() {
    this.router.navigateByUrl('Success');
    this.cartService.clearCart();
  }
}
