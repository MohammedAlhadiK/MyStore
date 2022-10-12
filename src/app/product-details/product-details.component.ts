import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ServerMediatorService } from '../services/server-mediator.service';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product = new Product();
  products: Product[] = [];
  currentProductID: any = 0;
  productQentity: number = 0;
  @Output() updatedproduct: any = new EventEmitter();

  constructor(
    private serverMediator: ServerMediatorService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService,
    private wishListservice: WishListService,
    private snackbarService: MatSnackBar
  ) {
    console.log(this.product);
    this.serverMediator.getProducts().subscribe((result) => {
      this.products = result;
      this.findProduct();
    });
    this.activatedRoute.paramMap.subscribe((params) => {
      this.currentProductID = params.get('id');
    });
  }

  ngOnInit(): void {}

  findProduct(): void {
    this.product = this.products.filter(
      (x) => x.id == this.currentProductID
    )[0];
  }
  addToCart() {
    let ProductBR = new Product();
    ProductBR.id = this.product.id;
    ProductBR.name = this.product.name;
    ProductBR.quentity = this.productQentity;
    ProductBR.description = this.product.description;
    ProductBR.price = this.product.price;
    ProductBR.stock = this.product.stock;
    ProductBR.url = this.product.url;

    this.cartService.addProductToCart(ProductBR);
  }
  addToWishList() {
    this.wishListservice.addProductToWishList(this.product);
  }
  validateQuentity() {
    if (this.productQentity == 5) {
      this.snackbarService.open('product Qentity = 5 😁 ', 'Dismiss', {
        duration: 2000,
      });
    }
  }
}
