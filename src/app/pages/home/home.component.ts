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
}
