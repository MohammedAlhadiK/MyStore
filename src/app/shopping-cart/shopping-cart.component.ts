import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  // Products: Product[] = [...new Set(this.cartService.getAllProduct())];
  Products: Product[] = this.cartService.getAllProduct();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}
}
