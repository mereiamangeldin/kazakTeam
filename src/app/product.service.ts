import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  BASE_URL = 'url'
  constructor(private client: HttpClient) { }

  updateProduct(product: Product){
    this.client.put("url", product)
  }

  getFavoriteProductsOfUser(): Observable<Product[]>{
    return this.client.get<Product[]>(this.BASE_URL)
  }
  getProductsByTitle(title:string): Observable<Product[]>{
    return this.client.get<Product[]>(this.BASE_URL)
  }
  getProductsByID(id:number): Observable<Product>{
    return this.client.get<Product>(this.BASE_URL)
  }

}
