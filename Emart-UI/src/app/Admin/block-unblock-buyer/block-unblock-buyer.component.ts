import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-block-unblock-buyer',
  templateUrl: './block-unblock-buyer.component.html',
  styleUrls: ['./block-unblock-buyer.component.css']
})
export class BlockUnblockBuyerComponent implements OnInit {
  list:Buyer[];
  n:Boolean;
  n1:Boolean;
  constructor(private service:AdminService){}

    ngOnInit(): void {
      this.Get();
    }
    Get()
    {
      this.n1=true;
      this.service.GetBuyer().subscribe(res=>{
        this.list=res;
        console.log(this.list);
        })
   }
   change() 
    {
      this.n=true;
      this.n1=false;
        // var elem = document.getElementById("Button");
        // if (elem.value=="Block") elem.value = "UnBlock";
        // else elem.value = "UnBlock";
    }
}
