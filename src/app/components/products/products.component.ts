import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../services/store.service';
import { Product, CreateProductDTO , UpdateProductDTO } from '../../models/product.model';

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
      this.products.unshift(data);
    });
  }

  UpdateProduct(){
    const update = {
      title: 'new title this shit'
    }
    const id = this.productChoosen.id;
    this.productService.updateProduct(id,update)
    .subscribe(data => {
      console.log('update', data);
      const proIndex = this.products.findIndex(item => item.id === this.productChoosen.id);
      this.products[proIndex] = data;
    });
  }

  deleteProduct(){
    const id = this.productChoosen.id;
    this.productService.deleteProduct(id)
    .subscribe(() => {
      const proIndex = this.products.findIndex(item => item.id === this.productChoosen.id);
      this.products.splice(proIndex, 1);
      this.showProductDetail = false;
    });
  }

}
