import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  private myShoppingCar: Product[] =[];
  private myCar = new BehaviorSubject<Product[]>([]);

  myCar$ = this.myCar.asObservable();

  
  getMyShoppingCar() {
    return this.myShoppingCar;
  }

  onAddToShopping(product: Product){
    this.myShoppingCar.push(product);
    this.myCar.next(this.myShoppingCar);
  }

  getTotalShopping() {
    return this.myShoppingCar.reduce((sum, item) => sum + item.price, 0);
  }
}
