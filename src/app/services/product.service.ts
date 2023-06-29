import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService  {

  constructor( private http: HttpClient) { }


  getAllProducts(): Observable<any[]>{
    debugger;
    return this.http.get<any[]>('http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts')
  }

  addItemToCart(obj: any): Observable<any>{
    debugger;
    return this.http.post<any>('http://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts', obj);
  }
}
