import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent   {

  //ANGULAR SIEMPRE DEBE TENER UN ESTADO INICIAL
  @Input() product: Product = {
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

  @Output() addProduct = new EventEmitter<Product>();
  @Output() showProduct = new EventEmitter<string>();

  constructor() { }

  onAddToCar(){
    this.addProduct.emit(this.product)
  }

  onShowDetail() {
    this.showProduct.emit(this.product.id);
  }

}
