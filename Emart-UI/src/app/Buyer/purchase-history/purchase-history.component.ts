import { Component, OnInit } from '@angular/core';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Purchase } from 'src/app/Models/purchase';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {
buyerid:number;
purch:Purchase[];
  constructor(private service:BuyerService) { 
    this.buyerid=Number(localStorage.getItem('buyerId'));
    console.log(this.buyerid);
  }

  ngOnInit(): void {
    this.PurchaseHistory();
  }
PurchaseHistory()
{

  this.service.PurchaseHistory(this.buyerid).subscribe(res=>{
this.purch=res;
console.log(this.purch);
  })
}
}
