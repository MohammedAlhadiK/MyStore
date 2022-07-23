import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';

import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: any = new Product();
  productQuentity: number = 1;
  wishList = true;
  constructor(
    private cartService: CartService,
    private wishListservice: WishListService
  ) {}

  ngOnInit(): void {}
  addToCart() {
    let ProductBR = new Product();
    ProductBR.id = this.product.id;
    ProductBR.name = this.product.name;
    ProductBR.quentity = this.productQuentity;
    ProductBR.description = this.product.description;
    ProductBR.price = this.product.price;
    ProductBR.stock = this.product.stock;
    ProductBR.url = this.product.url;

    this.cartService.addProductToCart(ProductBR);
  }
  addToWishList() {
    let ProductBR = new Product();
    ProductBR.id = this.product.id;
    ProductBR.name = this.product.name;
    ProductBR.quentity = this.product.quentity;
    ProductBR.description = this.product.description;
    ProductBR.price = this.product.price;
    ProductBR.stock = this.product.stock;
    ProductBR.url = this.product.url;

    this.wishListservice.addProductToWishList(ProductBR);
  }
}
