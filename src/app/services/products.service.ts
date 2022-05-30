import { Product, CreateProductDTO, UpdateProductDTO } from './../models/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private APIURL: string = 'https://young-sands-07814.herokuapp.com/api/products';

  constructor(
    private http: HttpClient
  ) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.APIURL);
  }

  getProduct(id: string){
    return this.http.get<Product>(`${this.APIURL}/${id}`);
  }

  createProduct(dto: CreateProductDTO){
    return this.http.post<Product>(this.APIURL, dto);
  }

  updateProduct(id: string, dto: UpdateProductDTO){
    return this.http.put<Product>(`${this.APIURL}/${id}`, dto);
  }

  deleteProduct(id: string){
    return this.http.delete<boolean>(`${this.APIURL}/${id}`);
  }
}
