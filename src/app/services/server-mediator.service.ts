import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
@Injectable({
  providedIn: 'root',
})
export class ServerMediatorService {
  private productCartList: Product[] = [];

  constructor(private _http: HttpClient) {}
  URL: string = '/assets/data/data.json';
  getProducts(): Observable<Product[]> {

    return this._http.get<Product[]>(this.URL);
  }

  getProductByID(Productid: number): Product {
    let CurrentProduct = this.productCartList.filter(
      (x) => x.id === Productid
    )[0];
    return CurrentProduct;
  }
  addProductToCart(targetedProduct: Product) {
    this.productCartList.push(targetedProduct);
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
}
