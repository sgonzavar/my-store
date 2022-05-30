import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  total: number = 0;
  // products: Product[] = [
    //   {
      //     id: '1',
  //     name: 'EL mejor juguete',
  //     price: 565,
  //     image: 'https://source.unsplash.com/random'
  //   },
  //   {
  //     id: '2',
  //     name: 'Bicicleta casi nueva',
  //     price: 356,
  //     image: 'https://source.unsplash.com/random'
  //   },
  //   {
  //     id: '3',
  //     name: 'Colleción de albumnes',
  //     price: 34,
  //     image: 'https://source.unsplash.com/random'
  //   },
  //   {
  //     id: '4',
  //     name: 'Mis libros',
  //     price: 23,
  //     image: 'https://source.unsplash.com/random'
  //   },    
  //   {
  //     id: '5',
  //     name: 'Otras cosas',
  //     price: 500,
  //     image: 'https://source.unsplash.com/random'
  //   },
  // ];


  private myShoppingCar: Product[] =[];
  
  getMyShoppingCar() {
    return this.myShoppingCar;
  }

  onAddToShopping(product: Product){
    this.myShoppingCar.push(product);
    this.total += product.price;

    console.log(this.total);
  }

  getTotalShopping() {
    return this.myShoppingCar.reduce((sum, item) => sum + item.price, 0);
  }
}
