import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  cartProducts: any[] = [];
  subTotal: number = 0;
  saleObj: any =  {
    "SaleId": 0,
    "CustId": 1,
    "SaleDate": new Date(),
    "TotalInvoiceAmount": 0,
    "Discount": 0,
    "PaymentNaration": "Patmm ",
    "DeliveryAddress1": "Plot st 122",
    "DeliveryAddress2": "infront of gate",
    "DeliveryCity": "berlin",
    "DeliveryPinCode": "456546",
    "DeliveryLandMark": "waterway"
};
  constructor(private productService: ProductService){  }


  ngOnInit(): void {
    this.loadCart();
  }


  loadCart(){
    this.subTotal = 0;
    this.productService.getCartItemByCustomerId(1).subscribe((res:any) =>{
      this.cartProducts = res.data;
      this.cartProducts.forEach(element => {
        this.subTotal = this.subTotal + element.productPrice;
      })
      // debugger;
      console.log(this.cartProducts, "####cartProducts");
    })
  }

  
  RemoveItem(id:number){
    this.productService.removeCartItemByCustomerId(id).subscribe((res: any)=>{
      if(res.result){
        this.loadCart();
        this.productService.cartAddedSubject.next(true);
      }
    })
  }


  makeSale(){
    this.saleObj.TotalInvoiceAmount = this.subTotal;
    this.productService.cartAddedSubject.next(true);
    this.productService.makeSale(this.saleObj).subscribe((res: any)=>{
      if(res.result){
        alert("sale success");
        this.loadCart();
        this.productService.cartAddedSubject.next(true);
      }
    })
  }
}
