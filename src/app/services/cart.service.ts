import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { observable, Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productCartList: Product[] = [];
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
    const prodID = targetedProduct.id;
    const prodQu = targetedProduct.quentity;
    if (this.existElement2(prodID, this.productCartList)) {
      // this.editProductQuentity(targetedProduct, this.productCartList);
      this.productCartList
        .filter((p) => p.id == prodID)
        .map((p) => (p.quentity += prodQu));
      console.log(targetedProduct);
    } else this.productCartList.push(targetedProduct);

    this.snackbarService.open(
      prodQu + ' of ' + targetedProduct.name + ' successfully added to cart',
      'X'
    );
  }
  removeProduct(Productid: number): void {
    let CurrentProduct = this.productCartList.filter(
      (x) => x.id === Productid
    )[0];
    this.productCartList.splice(CurrentProduct.id, 1);
  }

  clearCart() {
    this.productCartList = [];
  }

  existElement2(elementid: number, array: Product[]): boolean {
    let filteredArray = array.filter((p) => p.id === elementid);
    if (filteredArray.length > 0) return true;
    else return false;
  }
  existElement(element: Product, array: Product[]): boolean {
    let filteredArray = array.filter((p) => p.id === element.id);
    if (filteredArray.length > 0) return true;
    else return false;
  }
  editProductQuentity(element: Product, array: Product[]) {
    array
      .filter((p) => p.id == element.id)
      .map((p) => (p.quentity += element.quentity));
    // array.filter((p) => p.id == element.id)[0].quentity += 1;
  }

  fetchProducts(): Observable<Product[]> {
    let time = new Observable<Product[]>((observer) => {
      setInterval(() => {
        observer.next(this.productCartList);
        console.log('don0e');
      }, 10);
    });

    return time;
  }
}
