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
  
  constructor(private builder:FormBuilder,private service:SellerService){}
  
    ngOnInit(): void {
      this.sellerForm=this.builder.group({
        id:[''],
 username:[''],
 mobile:[''],
 emailid:[''],
 pwd:['',],
 addr:[''],
 gstin :[''],
 website:[''],
 cmpName:[''],
abtCmp:[''],
      })
      this.GetSeller();
    }
    onSubmit()
    {
      this.submitted=true;
      if(this.sellerForm.valid)
      {

        console.log(JSON.stringify(this.sellerForm.value));
      }
    }
    GetSeller()
    {
      this.sellerForm.disable();
      this.service.GetSeller(1).subscribe(res=>{
        this.seller=res;
        this.id=this.seller.id;
        console.log(this.seller);
        this.sellerForm.setValue({
          id:this.id,
          username:this.seller.username,
          mobile:this.seller.mobile,
          emailid:this.seller.email,
          pwd:this.seller.pwd,
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
      this.sellerForm.enable();
    }
      UpdateSeller()
      {

        this.seller=new Seller();
        this.seller.id=1;
        this.seller.username=this.sellerForm.value["username"];
        this.seller.pwd=this.sellerForm.value["pwd"];
        this.seller.email=this.sellerForm.value["emailid"];
        this.seller.mobile=this.sellerForm.value["mobile"];
        this.seller.gstin=this.sellerForm.value["gstin"];
        this.seller.companyName=this.sellerForm.value["cmpName"];
        this.seller.compWebsite=this.sellerForm.value["website"];
        this.seller.abtCompany=this.sellerForm.value["abtCmp"];
        this.seller.postalAddr=this.sellerForm.value["addr"]
        console.log(this.seller);
        this.service.EditProfile(this.seller).subscribe(res=>{
          console.log('Record Updated')
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
