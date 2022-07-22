import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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
    private wishListservice: WishListService
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
    // console.log(this.product.quentity);
    // this.product.quentity = this.productQentity;
    // this.cartService.addProductToCart(this.product);
    // this.updatedproduct.emit(this.product);
    if (
      this.cartService.existElement(
        this.product,
        this.cartService.getAllProduct()
      )
    ) {
      this.product.quentity += this.productQentity;
    } else {
      this.product.quentity = this.productQentity;
    }

    this.cartService.addProductToCart(this.product);
  }
  addToWishList() {
    this.wishListservice.addProductToWishList(this.product);
  }
}
