import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  cartCounter: any = this.cart.getAllProduct();
  wishListCounter: any = this.wishList.getAllProduct();

  constructor(private cart: CartService, private wishList: WishListService) {}

  ngOnInit(): void {}
}
