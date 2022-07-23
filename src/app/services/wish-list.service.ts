import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../models/product.model';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class WishListService {
  private productWishList: Product[] = [];

  constructor(private snackbarService: MatSnackBar) {}

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
    if (this.existElement(targetedProduct.id, this.productWishList)) {
      this.snackbarService.open(
        targetedProduct.name + ' is already Exist in your WishList 😍',
        'Dismiss'
      );
    } else {
      this.productWishList.push(targetedProduct);
      this.snackbarService.open(
        targetedProduct.name +
          ' has been added successfully to your WishList 😁',
        'Dismiss',{duration:1600}
      );
    }



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

  existElement(elementid: number, array: Product[]): boolean {
    return array.filter((p) => p.id === elementid).length > 0;
  }

  editProductQuentity(element: Product, array: Product[]) {
    array
      .filter((p) => p.id == element.id)
      .map((p) => (p.quentity += element.quentity));
  }
}
