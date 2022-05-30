import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {

  myShoppingCar: Product[] = [];
  total: number = 0;
  products: Product[] = [];
  today = new Date();
  date = new Date(2021,5,19);

  constructor(
    private storeService: StoreService,
    private productService: ProductsService
    ) {
    this.myShoppingCar = this.storeService.getMyShoppingCar();
  }

  ngOnInit(): void { 
    this.productService.getAllProducts()
    .subscribe(data => {
      this.products = data;
    });
  }

  onAddToShopping(product: Product) {
    this.storeService.onAddToShopping(product);
    this.total = this.storeService.getTotalShopping();
  }
}
