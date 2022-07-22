import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private productWishList: Product[] = [];

  constructor() {}
  getAllProduct(): Product[] {
    return this.productWishList;
  }
  getProductByID(Productid: number): Product {
    let CurrentProduct = this.productWishList.filter(
      (x) => x.id === Productid
    )[0];
    return CurrentProduct;
  }
  addProductToWishList(targetedProduct: Product) {
    this.productWishList.push(targetedProduct);
  }
  removeProduct(Productid: number): void {
    let CurrentProduct = this.productWishList.filter(
      (x) => x.id === Productid
    )[0];
    this.productWishList.splice(CurrentProduct.id, 1);
  }
  clearCart() {
    this.productWishList = [];
  }
}
