import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { Purchase } from 'src/app/Models/purchase';
import { BuyerService } from 'src/app/Services/buyer.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.css']
})
export class BuyProductsComponent implements OnInit {
item:Items;
purch:Purchase;
buyerForm:FormGroup;
  constructor(private service:BuyerService,private builder:FormBuilder) { 
    this.item=JSON.parse(localStorage.getItem('item'));
  }

  ngOnInit(): void {

this.buyerForm=this.builder.group(
  {
      NoI:[''],
      transaction:['']
  }
)    
      }

      BuyItems(){

this.service.BuyItem(this.purch).subscribe(res=>{
      console.log("Purchased Successfully");
})

      }

}
