import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  //ANGULAR SIEMPRE DEBE TENER UN ESTADO INICIAL
  @Input() product: Product = {
    id: '',
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  }

  @Output() addProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCar(){
    this.addProduct.emit(this.product)
  }

}
