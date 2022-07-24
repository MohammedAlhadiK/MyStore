import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-view-product-in-cart',
  templateUrl: './view-product-in-cart.component.html',
  styleUrls: ['./view-product-in-cart.component.css'],
})
export class ViewProductInCartComponent implements OnInit {
  @Input() product: Product = new Product();
  @Input() wishList: boolean = true;
  constructor(
    private cartService: CartService,
    private wishListservice: WishListService
  ) {}

  ngOnInit(): void {}
  removeProductFromCart() {
    this.cartService.removeProduct(this.product.id);
  }
  addToCart() {
    let ProductBR = new Product();
    ProductBR.id = this.product.id;
    ProductBR.name = this.product.name;
    ProductBR.quentity = 1;
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
