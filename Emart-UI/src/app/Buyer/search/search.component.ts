import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Items } from 'src/app/Models/items';
import { Router } from '@angular/router';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
import { Cart } from 'src/app/Models/cart';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
buyerForm:FormGroup;
load:number;
items:Items[];
itemname:string;
cat:Category;
subcat:SubCategory;
cart:Cart;
cart1:Cart[];
  constructor(private builder:FormBuilder,private route:Router,private service:BuyerService) { }

  ngOnInit(): void {
    this.buyerForm=this.builder.group({
      itemName:[''],
    })
  }

  SearchItem()
  {
    let name=this.buyerForm.value['itemName'];
    console.log(name);
    this.service.SearchItem(name).subscribe(res=>{
    this.items=res;
    console.log(this.items);
    if((this.items).length!=0){
      this.load=1;
      console.log("1");
    }  
  else{
    this.load=2;
    console.log("false");
   }

})
  }

  BuyProduct(item:Items)
  {
    localStorage.setItem('item',JSON.stringify(item));
    this.route.navigateByUrl("/Buyer/Buy-Product");
  }
AddToCart(item:Items)
{
  let f=0;     
         this.cart=new Cart();
       this.cart.cartid=Math.floor(Math.random()*1000);
       this.cart.itemName=item.itemName;
       this.cart.itemDesc=item.itemDesc;
       this.cart.price=item.price;
       this.cart.img=item.img;
       this.cart.buyerId=Number(localStorage.getItem('buyerId'));
       this.cart.itemId=item.itemId;
       this.service.ViewCart(this.cart.buyerId).subscribe(res=>{
         this.cart1=res;
         console.log("hello this is view cart")
         console.log(this.cart1);
          for(let i=0;i<this.cart1.length;i++){
            console.log(this.cart1[i].itemId+" "+this.cart.itemId)
            if(this.cart1[i].itemId==this.cart.itemId)
            {
              f=1;
              break;
            }
            else
            f=0;
          } 
      
       if(f==0){
       this.service.AddToCart(this.cart).subscribe(res=>{
         console.log("Added Successfully");
         alert("Item Add Successfully");
       })}
       else{
         alert("Already Added to cart")
       }
      })
}

}
