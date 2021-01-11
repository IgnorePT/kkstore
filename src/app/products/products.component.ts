import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../shared/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products = null;

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productService
      .all()
      .subscribe((products) => (this.products = products));
  }

  addToCart(product) {
    console.log('Add to cart:', product);
  }
}
