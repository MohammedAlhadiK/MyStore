import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product.model';
import { WishListService } from '../services/wish-list.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  Products: Product[] = this.wishListService.getAllProduct();

  constructor(
    private wishListService: WishListService

  ) {}

  ngOnInit(): void {}

}
