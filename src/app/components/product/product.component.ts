import { Product } from './../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  //ANGULAR SIEMPRE DEBE TENER UN ESTADO INICIAL
  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    name: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
