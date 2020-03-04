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
  pwd:string;
  n:boolean;
  n1:boolean;
  constructor(private builder:FormBuilder,private service:BuyerService){}

  ngOnInit(): void {
    this.buyerForm=this.builder.group({
      username:[''],
      mobile:[''],
      emailid:['']
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
    this.n1=true;
    this.buyerForm.disable();
    this.service.GetProfile(Number(localStorage.getItem('buyerId'))).subscribe(res=>{
      this.buyer=res;
      this.id=this.buyer.id;
      this.pwd=this.buyer.pwd;
      this.date=this.buyer.createDateTime;
      console.log(this.buyer);
      this.buyerForm.setValue({
      username:this.buyer.username,
      mobile:this.buyer.mobile,
      emailid:this.buyer.email,
      });
   }
    )
  }
  edit()
  {
    this.n=true;
    this.n1=false;
    this.buyerForm.enable();
  }
    UpdateBuyer()
    {

      this.buyer=new Buyer();
      this.buyer.id=this.id;
      this.buyer.username=this.buyerForm.value["username"];
      this.buyer.pwd=this.pwd;
      this.buyer.email=this.buyerForm.value["emailid"];
      this.buyer.mobile=this.buyerForm.value["mobile"];
      this.buyer.createDateTime=this.date;
      console.log(this.buyer);
      this.service.EditProfile(this.buyer).subscribe(res=>{
        console.log('Record Updated');
        this.n=false;
        this.n1=true;
        this.GetBuyer();
      },err=>{
        console.log(err)
      })
  }
  get f()
{
return this.buyerForm.controls;
}
}
