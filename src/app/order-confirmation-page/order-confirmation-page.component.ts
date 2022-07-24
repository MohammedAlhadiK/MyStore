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
  order: Order = this.ordersService.getAllorder()[0];
  Products: Product[] = [];
  total: number = this.order.totalpayed;
  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router,
    private snackbarService: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.Products = this.order.products;
  }
  checkOut() {
    this.router.navigateByUrl('Success');
    this.cartService.clearCart();
  }
}
