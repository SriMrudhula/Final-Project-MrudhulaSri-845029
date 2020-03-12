import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Purchase } from 'src/app/Models/purchase';
import { Items } from 'src/app/Models/items';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
buyerid:number;
purch:Purchase[];
items:Items[];
  constructor(private service:BuyerService) { 
    this.buyerid=Number(localStorage.getItem('buyerId'));
    this.items=[];
  }

  ngOnInit(): void {
    this.PurchaseHistory();
  }
  PurchaseHistory()
  {

    this.service.PurchaseHistory(this.buyerid).subscribe(res=>{
    this.purch=res;
    for(let i=0;i<this.purch.length;i++)
    {
        this.service.GetItem(this.purch[i].itemId).subscribe(res1=>{
        this.items.push(res1);
        })
    }
    })
  }
}
