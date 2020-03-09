import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
@Component({
  selector: 'app-register-buyer',
  templateUrl: './register-buyer.component.html',
  styleUrls: ['./register-buyer.component.css'],
  providers:[AccountService]
})
export class RegisterBuyerComponent implements OnInit {
accountForm:FormGroup;
buyer:Buyer;
submitted:boolean=false;
constructor(private builder:FormBuilder,private service:AccountService){}

  ngOnInit() {
    this.accountForm=this.builder.group({
      id:[''],
      username:['',[Validators.required,Validators.pattern('^[a-z]{3,10}$')]],
      mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      emailid:['',[Validators.required,Validators.email]],
      pwd:['',[Validators.required,Validators.minLength(6)]],
      createdatetime:[''],    
    });
  }


  get f()
  {
    return this.accountForm.controls;
  }
  
  onSubmit()
  {
    this.submitted=true;
    //display from values on sucess
    if(this.accountForm.valid)
    {
      this.AddBuyer();
      console.log(JSON.stringify(this.accountForm.value));
    }
  }
    AddBuyer()
    {
      this.buyer=new Buyer();
      this.buyer.id=Math.floor(Math.random()*1000);
      this.buyer.username=this.accountForm.value["username"];
      this.buyer.pwd=this.accountForm.value["pwd"];
      this.buyer.email=this.accountForm.value["emailid"];
      this.buyer.mobile=this.accountForm.value["mobile"];
      this.buyer.createDateTime=new Date();
      console.log(this.buyer);
      
      this.service.BuyerRegister(this.buyer).subscribe(res=>{
        console.log('Record Added')
      },err=>{
        console.log(err)
      })
 }
  onReset()
  {
    this.submitted = false;
    this.accountForm.reset();
  }

}
