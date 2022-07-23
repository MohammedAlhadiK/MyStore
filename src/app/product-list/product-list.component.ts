import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ServerMediatorService } from '../services/server-mediator.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public Products: Product[] = [];
  constructor(private ServerMediator: ServerMediatorService) {
    this.ServerMediator.getProducts().subscribe((result) => {
      this.Products = result;
    });
  }
  ngOnInit(): void {}
}
