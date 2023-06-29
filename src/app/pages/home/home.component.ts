import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import {ProductService} from 'src/app/services/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any[] = [];
  cartObj : any= {
    "CartId": 0,
    "CustId": 0,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2023-04-27T07:12:40.926Z"
  };
  constructor(private ProductService: ProductService){}

  ngOnInit():void {
    debugger;
    this.loadAllProducts();
  }

  loadAllProducts(){
    debugger;
    this.ProductService.getAllProducts().subscribe((res:any) =>{
      this.productList = res.data;
      console.log(this.productList,"######Product API");
    })
  }

  addItemToCart(data:any) {
    this.ProductService.getAllProducts().subscribe((res:any) =>{
      this.productList = res.data;
      console.log(this.productList,"######Product API");
    })
  }
}
