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
load:boolean;
buyer:Buyer;
load1:boolean;
buyer1:Buyer[];
submitted:boolean=false;
constructor(private builder:FormBuilder,private service:AccountService){}

  ngOnInit() {
    this.accountForm=this.builder.group({
      id:[''],
      username:['',[Validators.required,Validators.pattern('^[a-z][0-9][A-Z]{3,15}$')]],
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
  Exist():void{
    let username=this.accountForm.value["username"];
    let email=this.accountForm.value["emailid"];
    this.service.GetBuyer().subscribe(res=>{
      this.buyer1=res;
        let f=0;
        for(let i=0;i<this.buyer1.length;i++) {
          if(this.buyer1[i].username==username){
            f=1;
            break;
          }
          if(this.buyer1[i].email==email){
            f=2;
            break;
          }
        }
        if(f==1)
          this.load=true;
        else 
          this.load=false;
        if(f==2)
        this.load1=true;
        else
        this.load1=false;
    })
  }
}
