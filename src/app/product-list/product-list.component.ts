import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { HandlecartService } from '../services/handlecart.service';
import { ServerMediatorService } from '../services/server-mediator.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public Products: Product[] = [];
  constructor(private ServerMediator: ServerMediatorService, private cartService: HandlecartService,) {
    // this.ServerMediator.getProducts().subscribe((res) => {
    //   this.Products = res;
    // });
    this.getProductsFromAPI();
  }

  ngOnInit(): void {}
  addtocart(eventll: any) {
    console.log(eventll, 'from parent');

    // this.cartService.addProductToCart(eventll);
    this.getProductsFromAPI()
  }

  getProductsFromAPI(){
    this.ServerMediator.getProducts().subscribe((res) => {
      this.Products = res;
    });
  }
}
