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
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2023-06-17T07:10:50.224Z"
  };
  constructor(private ProductService: ProductService){}
   
  ngOnInit():void {
    // debugger;  
    this.loadAllProducts();
  }

  loadAllProducts(){
    // debugger;
    this.ProductService.getAllProducts().subscribe((res:any) =>{
      this.productList = res.data;
      console.log(this.productList,"######Product API");
    })  
  }

  addItemToCart(productID: number) {
    // debugger;
    this.cartObj.productID = productID;
    // productID = this.cartObj.productID;

    console.log(productID,"####productID");
    this.ProductService.addItemToCart(this.cartObj).subscribe((res:any) =>{
      if(res.result){
        alert("product added successfully");
        this.ProductService.cartAddedSubject.next(true);
        
      }

    })
  }
}
