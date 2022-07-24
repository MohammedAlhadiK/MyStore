import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  // Products: Product[] = [...new Set(this.cartService.getAllProduct())];
  Products: Product[] = this.cartService.getAllProduct();
  total: number = this.calculateTotal();
  order: Order = new Order();

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router,
    private snackbarService: MatSnackBar
  ) {
    this.total = this.calculateTotal();
  }

  ngOnInit(): void {}

  checkOut(userForm: NgForm) {
    if (userForm.valid) {
      if (this.total== 0) {
        this.snackbarService.open(
          'You did not buy any product 🤨 Check it again 🤔 ',
          'Dismiss',
          { duration: 2000 }
        );
      } else {
        this.order.products = this.Products;
        this.order.totalpayed = this.total;

        this.ordersService.addorder(this.order);

        // this.router.navigateByUrl('Success');
        // this.cartService.clearCart();
        this.router.navigateByUrl('/Order-Confirmation');
      }
    } else {
      this.snackbarService.open(
        'Form Is not Valid 🤨 Check it again 🤔 ',
        'Dismiss',
        { duration: 2000 }
      );
    }
  }
  calculateTotal(): number {
    let sum = 0;
    this.cartService.getAllProduct().forEach((x) => {
      sum += x.price * x.quentity;
    });
    return sum;
  }
}
