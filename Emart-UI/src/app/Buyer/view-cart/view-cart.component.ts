import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Cart } from 'src/app/Models/cart';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/Services/item.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  cartlist:Cart;
  item:Items;
  constructor(private service:BuyerService,private route:Router){}

    ngOnInit(): void {
      this.GetCart();

    }
    GetCart()
    {
      let buyerId=Number(localStorage.getItem('buyerId'));
      this.service.ViewCart(buyerId).subscribe(res=>{
        this.cartlist=res;
        console.log(this.cartlist);
        })
   }  
   BuyProduct(itemid:number)
  {
    this.service.GetItem(itemid).subscribe(res=>{
       this.item=res;
       console.log(this.item);
       localStorage.setItem('item',JSON.stringify(this.item));
       this.route.navigateByUrl("/Buyer/Buy-Product");    
    })
  }
RemoveFromCart(cartId:number)
{
this.service.RemoveFromCart(cartId).subscribe(res=>{
  console.log("Removed Successfully");
  this.GetCart();
})
}

}
