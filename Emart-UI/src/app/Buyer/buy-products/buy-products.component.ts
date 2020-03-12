import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { Purchase } from 'src/app/Models/purchase';
import { BuyerService } from 'src/app/Services/buyer.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.css']
})
export class BuyProductsComponent implements OnInit {
item:Items;
purch:Purchase;
buyerForm:FormGroup;
buyer1Form:FormGroup;
noi:number;
card:boolean=false;
price:number;
transaction:string;
cardname:string;
cvv:number;
cardno:number;
n:boolean=true;
submitted:boolean=false;
  constructor(private service:BuyerService,private builder:FormBuilder,private route:Router) { 
    this.item=JSON.parse(localStorage.getItem('item'));
    this.noi=1;
    this.price=this.item.price;
  }

  ngOnInit(): void {
this.buyerForm=this.builder.group({
  transaction:['',Validators.required],
}),
this.buyer1Form=this.builder.group({
  cvv:['',Validators.required],
  cardName:['',Validators.required],
  cardNo:['',Validators.required],
})
      }
      onSubmit()
    {
      this.submitted=true;
      if(this.buyerForm.valid)
      {
        this.BuyItems();
        this.n=false;
      }
     
    }
      Decrement()
      {
        if(this.noi-1<=0){
           this.noi=1;
           this.price=this.item.price*this.noi;
        }
           else{
this.noi==--this.noi;
this.price=this.item.price*this.noi;
           }
      }
Increment()
{
  this.noi=++this.noi;
  this.price=this.item.price*this.noi;
}
BuyItems(){
this.cardname=this.buyerForm.value['cardName'];
this.cardno=this.buyerForm.value['cardNo'];
this.cvv=this.buyerForm.value['cvv'];
this.purch=new Purchase();
this.purch.Id=Math.floor(Math.random()*1000);
this.purch.sellerId=this.item.sellerId;
this.purch.buyerId=Number(localStorage.getItem('buyerId'));
this.purch.itemId=this.item.itemId;
this.purch.noOfItems=this.noi;
this.purch.transStatus="Success";
this.purch.transType=this.buyerForm.value['transaction'];
this.purch.dateTime=new Date();
this.purch.remarks=this.item.remarks;
      }
      Purchase()
      {
        if(this.purch!=null)
        {
        this.service.BuyItem(this.purch).subscribe(res=>{
          alert("Purchased Successfully");
          this.route.navigateByUrl("/Buyer/Search");
        })
        }else{
          alert("Payment Unsuccessfull....plz Enter All Details... ");
        }
   
      }
      display()
      {
      this.transaction=this.buyerForm.value['transaction'];
        if(this.transaction=="Card"){
         this.card=true;
        }
         else
         this.card=false;
      }
      get f()
      {
        return this.buyerForm.controls;
      }
}
