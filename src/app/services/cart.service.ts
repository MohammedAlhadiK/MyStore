import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { observable, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productCartList: Product[] = [];
  cartCounter = this.productCartList.length;
  constructor(private snackbarService: MatSnackBar) {}
  getAllProduct(): Product[] {
    return this.productCartList;
  }
  getProductByID(Productid: number): Product {
    let CurrentProduct = this.productCartList.filter(
      (x) => x.id === Productid
    )[0];
    return CurrentProduct;
  }
  addProductToCart(targetedProduct: Product) {
    if (this.existElement(targetedProduct.id, this.productCartList)) {
      this.productCartList
        .filter((p) => p.id == targetedProduct.id)
        .map((p) => (p.quentity += targetedProduct.quentity));
    } else this.productCartList.push(targetedProduct);

    this.snackbarService.open(
      targetedProduct.quentity +
        ' of ' +
        targetedProduct.name +
        ' successfully added to your cart',
      'Dismiss',
      { duration: 1600 }
    );
  }
  removeProduct(Productid: number): void {
    let CurrentProduct = this.productCartList.filter(
      (x) => x.id === Productid
    )[0];
    this.productCartList.splice(CurrentProduct.id, 1);
  }

  clearCart() {
    for (let index = 0; index <= this.productCartList.length; index++) {
     this.productCartList.pop();
    }

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
