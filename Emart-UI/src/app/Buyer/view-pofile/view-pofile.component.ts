import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BuyerService } from 'src/app/Services/buyer.service';
import { Buyer } from 'src/app/Models/buyer';

@Component({
  selector: 'app-view-pofile',
  templateUrl: './view-pofile.component.html',
  styleUrls: ['./view-pofile.component.css']
})
export class ViewPofileComponent implements OnInit {
buyerForm:FormGroup;
  buyer:Buyer;
  submitted:boolean=false;
  id:number;
  date:Date;
  constructor(private builder:FormBuilder,private service:BuyerService){}

  ngOnInit(): void {
    this.buyerForm=this.builder.group({
      id:[''],
      username:[''],
      mobile:[''],
      emailid:[''],
      pwd:[''],
      createdatetime:[''],    
    });
   this.GetBuyer();
  }

  onSubmit()
  {
    this.submitted=true;
    if(this.buyerForm.valid)
    {

      console.log(JSON.stringify(this.buyerForm.value));
    }
  }
  GetBuyer()
  {
    this.buyerForm.disable();
    this.service.GetProfile(1).subscribe(res=>{
      this.buyer=res;
      this.id=this.buyer.id;
      this.date=this.buyer.createDateTime;
      console.log(this.buyer);
      this.buyerForm.setValue({
        id:this.id,
      username:this.buyer.username,
      mobile:this.buyer.mobile,
      emailid:this.buyer.email,
      pwd:this.buyer.pwd,
      createdatetime:this.date,
      });
   }
    )
  }
  
  edit()
  {
    this.buyerForm.enable();
  }
    UpdateBuyer()
    {

      this.buyer=new Buyer();
      this.buyer.id=Math.floor(Math.random()*1000);
      this.buyer.username=this.buyerForm.value["username"];
      this.buyer.pwd=this.buyerForm.value["pwd"];
      this.buyer.email=this.buyerForm.value["emailid"];
      this.buyer.mobile=this.buyerForm.value["mobile"];
      this.buyer.createDateTime=this.date;
      console.log(this.buyer);
      this.service.EditProfile(this.buyer).subscribe(res=>{
        console.log('Record Added')
      },err=>{
        console.log(err)
      })
  }
  get f()
{
return this.buyerForm.controls;
}
}
