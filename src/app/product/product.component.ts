import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Product } from '../models/product.model';

import { HandlecartService } from '../services/handlecart.service';

import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product: any = new Product();
  @Output() updatedproduct: any = new EventEmitter();
  productQuentity: number = 1;
  constructor(
    private cartService: HandlecartService,
    private wishListservice: WishListService
  ) {}

  ngOnInit(): void {}
  addToCart(targetedProduct: Product) {
    this.product.quentity = this.productQuentity;
    this.updatedproduct.emit(this.product);

    // targetedProduct.quentity = this.productQuentity;
    // this.cartService.addProductToCart(targetedProduct);
  }
  addToWishList(targetedProduct: Product) {
    this.wishListservice.addProductToWishList(targetedProduct);
  }
}
