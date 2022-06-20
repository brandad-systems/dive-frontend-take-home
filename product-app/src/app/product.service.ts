import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_SERVER = environment.apiUrl;

  constructor(private httpClient: HttpClient) {

  }


  addProduct(product: Product): Observable<any> {
    const url: string = this.PRODUCT_SERVER + '/products';
    return this.httpClient.post<any>(url, product);

  }

  getAllProducts(): Observable<any> {
    const url: string = this.PRODUCT_SERVER + '/products';
    return this.httpClient.get<Product>(url);

  }

}
