import { Component, OnInit } from '@angular/core';
import { Seller } from 'src/app/Models/seller';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-block-unblock-seller',
  templateUrl: './block-unblock-seller.component.html',
  styleUrls: ['./block-unblock-seller.component.css']
})
export class BlockUnblockSellerComponent implements OnInit {
  list:Seller[];

  constructor(private service:AdminService){}

    ngOnInit(): void {
      this.Get();
    }
    Get()
    {
      this.service.GetSeller().subscribe(res=>{
        this.list=res;
        console.log(this.list);
        })
   }
}
