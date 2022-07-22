import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from '../models/product.model';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class HandlecartService {
  private productCartList: Product[] = [];

  constructor(private snackbarService: MatSnackBar, cartservice: CartService) {
    this.productCartList = cartservice.getAllProduct();
  }
  addProductToCart(targetedProduct: Product) {
    if (this.existElement(targetedProduct, this.productCartList)) {
      this.editProductQuentity(targetedProduct, this.productCartList);
    } else this.productCartList.push(targetedProduct);

    this.snackbarService.open(
      targetedProduct.quentity +
        ' of ' +
        targetedProduct.name +
        ' successfully added to cart',
      'X',
      { duration: 1600 }
    );
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
  }
}
