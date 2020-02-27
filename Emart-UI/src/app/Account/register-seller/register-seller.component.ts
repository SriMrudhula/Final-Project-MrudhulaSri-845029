import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';
@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.css']
})
export class RegisterSellerComponent implements OnInit {
  accountForm:FormGroup;
  seller:Seller;
  submitted:boolean=false;
  constructor(private builder:FormBuilder,private service:AccountService){}
  
    ngOnInit(): void {
      this.accountForm=this.builder.group({
        id:[''],
 username:['',[Validators.required,Validators.pattern('^[a-z]{3,6}$')]],
 mobile:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
 emailid:['',[Validators.required,Validators.email]],
 pwd:['',[Validators.required,Validators.minLength(6)]],
 addr:['',Validators.required],
 gstin :['',Validators.required],
 website:['',[Validators.required,Validators.maxLength(25)]],
 cmpName:['',[Validators.required,Validators.maxLength(30)]],
abtCmp:['',[Validators.required,Validators.maxLength(70)]],
 // acceptTerms:[false,Validators.requiredTrue]
      })
    }
    onSubmit()
    {
      this.submitted=true;
      //display from values on sucess
      if(this.accountForm.valid)
      {
        this.AddSeller();
        console.log(JSON.stringify(this.accountForm.value));
      }
    }
      AddSeller()
      {
        this.seller=new Seller();
        this.seller.id=Math.floor(Math.random()*1000);
        this.seller.username=this.accountForm.value["username"];
        this.seller.pwd=this.accountForm.value["pwd"];
        this.seller.email=this.accountForm.value["emailid"];
        this.seller.mobile=this.accountForm.value["mobile"];
        this.seller.gstin=this.accountForm.value["gstin"];
        this.seller.companyName=this.accountForm.value["cmpName"];
        this.seller.compWebsite=this.accountForm.value["website"];
        this.seller.abtCompany=this.accountForm.value["abtCmp"];
        this.seller.postalAddr=this.accountForm.value["addr"]
        console.log(this.seller);
        this.service.SellerRegister(this.seller).subscribe(res=>{
          console.log('Record Added')
        },err=>{
          console.log(err)
        })
    }
    get f()
{
return this.accountForm.controls;
}
    onReset()
    {
      this.submitted = false;
      this.accountForm.reset();
    }
    
  }
