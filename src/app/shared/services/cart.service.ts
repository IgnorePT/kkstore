import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  getCart() {
    console.log('Return Cart Elements');
  }

  removeFromCart() {
    console.log('Remove Element from Cart');
  }

  getTotal() {
    console.log('Return Total');
  }
}
