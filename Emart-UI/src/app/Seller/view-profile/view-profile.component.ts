import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { SellerService } from 'src/app/Services/seller.service';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
sellerForm:FormGroup;
  seller:Seller;
  submitted:boolean=false;
  id:number;
  n:Boolean;
  n1:Boolean;
  pwd:string;
  constructor(private builder:FormBuilder,private service:SellerService){}
  
    ngOnInit(): void {
      this.sellerForm=this.builder.group({
        id:[''],
 username:[''],
 mobile:[''],
 emailid:[''],
 addr:[''],
 gstin :[''],
 website:[''],
 cmpName:[''],
abtCmp:[''],
      })
      this.GetSeller();
    }

    GetSeller()
    {
      this.n1=true;
      this.sellerForm.disable();
      this.service.GetSeller(Number(localStorage.getItem('sellerId'))).subscribe(res=>{
        this.seller=res;
        this.id=this.seller.id;
        this.pwd=this.seller.pwd;
        console.log(this.seller);
        this.sellerForm.setValue({
          id:this.id,
          username:this.seller.username,
          mobile:this.seller.mobile,
          emailid:this.seller.email,
          addr:this.seller.postalAddr,
          gstin :this.seller.gstin,
          website:this.seller.compWebsite,
          cmpName:this.seller.companyName,
         abtCmp:this.seller.abtCompany,
        });
     }
      )
    }
    
    edit()
    {
      this.n=true;
      this.n1=false;
      this.sellerForm.enable();
    }
      UpdateSeller()
      {

        this.seller=new Seller();
        this.seller.id=Number(localStorage.getItem('sellerId'));
        this.seller.username=this.sellerForm.value["username"];
        this.seller.pwd=this.pwd;
        this.seller.email=this.sellerForm.value["emailid"];
        this.seller.mobile=this.sellerForm.value["mobile"];
        this.seller.gstin=this.sellerForm.value["gstin"];
        this.seller.companyName=this.sellerForm.value["cmpName"];
        this.seller.compWebsite=this.sellerForm.value["website"];
        this.seller.abtCompany=this.sellerForm.value["abtCmp"];
        this.seller.postalAddr=this.sellerForm.value["addr"]
        console.log(this.seller);
        this.service.EditProfile(this.seller).subscribe(res=>{
          console.log('Record Updated');
          this.n=false;
          this.n1=true;
          this.GetSeller();
        },err=>{
          console.log(err)
        })
    }
    get f()
{
return this.sellerForm.controls;
}    
}
