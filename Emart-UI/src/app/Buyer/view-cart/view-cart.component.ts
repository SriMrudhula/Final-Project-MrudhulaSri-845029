import { Component, OnInit } from '@angular/core';
import { Items } from 'src/app/Models/items';
import { BuyerService } from 'src/app/Services/buyer.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  item:Items;
  itemlist:Items[];
  img:string;
  constructor(private service:BuyerService){}

    ngOnInit(): void {
    }
    GetItems()
    {
      this.service.ViewCart().subscribe(res=>{
        this.itemlist=res;
        console.log(this.itemlist);
        this.img=this.itemlist[0].img;
        })
   }    

}
