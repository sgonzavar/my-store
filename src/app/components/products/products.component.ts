import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product, CreateProductDTO } from '../../models/product.model';

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
  showProductDetail: boolean = false;
  productChoosen: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: {
      id: '',
      name: '',
    },
    images: [],
  }

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

  toggleProductDetal() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetail(id: string) {
    console.log("id",id);
    this.productService.getProduct(id)
    .subscribe(data => {
      this.toggleProductDetal(); // activa el toggle
      this.productChoosen = data;
    });
  }
  
  createNewProduct(){
    const prod: CreateProductDTO = {
      title: 'new product',
      description: 'bla bla bla',
      images: [''],
      price: 1000,
      categoryId: 2,
    }
    this.productService.createProduct(prod)
    .subscribe(data => {
      console.log('create', data);
      this.products.unshift(data);
    });
  }

}
