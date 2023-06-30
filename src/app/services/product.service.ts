import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService  {
  // after item added to cart true / false
  public cartAddedSubject = new Subject<boolean>();
  constructor( private http: HttpClient) { }


  getAllProducts(): Observable<any[]>{
    // debugger;
    return this.http.get<any[]>('http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts');
  }

  addItemToCart(obj: any): Observable<any>{
    debugger;
    return this.http.post<any>('http://onlinetestapi.gerasim.in/api/Ecomm/AddToCart', obj);
  }

  getCartItemByCustomerId(customerId: number): Observable<any[]>{
    return this.http.get<any[]>('http://onlinetestapi.gerasim.in/api/Ecomm/GetCartProductsByCustomerId?id='+ customerId);
  }


  removeCartItemByCustomerId(cartId: number): Observable<any[]>{
    return this.http.get<any[]>('http://onlinetestapi.gerasim.in/api/Ecomm/DeleteProductFromCartById?id='+ cartId);
  }


  makeSale(obj: any): Observable<any>{
    return this.http.post<any>('http://onlinetestapi.gerasim.in/api/Ecomm/AddNewSale', obj);
  }
}
