import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-view-product-in-cart',
  templateUrl: './view-product-in-cart.component.html',
  styleUrls: ['./view-product-in-cart.component.css']
})
export class ViewProductInCartComponent implements OnInit {
  @Input() product: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

}
