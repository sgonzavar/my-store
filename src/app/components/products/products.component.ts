import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  private myShoppingCar: Product[] = [];

  constructor(private storeService: StoreService) {
    this.myShoppingCar = this.storeService.getMyShoppingCar();
  }

  ngOnInit(): void { }

  total: number = 0;
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random',
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random',
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random',
    },
    {
      id: '5',
      name: 'Otras cosas',
      price: 500,
      image: 'https://source.unsplash.com/random',
    },
  ];

  onAddToShopping(product: Product) {
    this.storeService.onAddToShopping(product);
    this.total = this.storeService.getTotalShopping();

    console.log(this.total);
  }
}
