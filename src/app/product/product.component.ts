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
  // @Output() updatedproduct: any = new EventEmitter();
  productQuentity: number = 1;
  constructor(
    private cartService: HandlecartService,
    private wishListservice: WishListService
  ) {}

  ngOnInit(): void {}
  addToCart() {
    // this.product.quentity = this.productQuentity;
    // this.updatedproduct.emit(this.product);
    let ProductBR = new Product();
    ProductBR.id = this.product.id;
    ProductBR.name = this.product.name;
    ProductBR.quentity = this.productQuentity;
    ProductBR.description = this.product.description;
    ProductBR.price = this.product.price;
    ProductBR.stock = this.product.stock;
    ProductBR.url = this.product.url;

    this.cartService.addProductToCart(ProductBR);
    // targetedProduct.quentity = this.productQuentity;
    // this.cartService.addProductToCart(targetedProduct);
  }
  addToWishList() {
    let ProductBR = new Product();
    ProductBR.id = this.product.id;
    ProductBR.name = this.product.name;
    ProductBR.quentity = this.productQuentity;
    ProductBR.description = this.product.description;
    ProductBR.price = this.product.price;
    ProductBR.stock = this.product.stock;
    ProductBR.url = this.product.url;

    this.wishListservice.addProductToWishList(ProductBR);
    // this.wishListservice.addProductToWishList(targetedProduct);
  }
}
