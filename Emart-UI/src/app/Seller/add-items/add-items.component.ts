import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Items } from '../../Models/items';
import { ItemService } from 'src/app/Services/item.service';
import { Category } from 'src/app/Models/category';
import { SubCategory } from 'src/app/Models/sub-category';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.component.html',
  styleUrls: ['./add-items.component.css']
})
export class AddItemsComponent implements OnInit {
  sellerForm:FormGroup;
  item:Items;
  catlist:Category[];
  subcatlist:SubCategory[];
  submitted:boolean=false;
  seller:Seller;
  file:string;
  constructor(private builder:FormBuilder,private router: Router,private service:ItemService){}
  
    ngOnInit(): void {
      //bussiness functionality
      this.sellerForm=this.builder.group({
       iName:['',Validators.required],
        iDesc:[''],
        price:['',Validators.required],
        stock:[''],
        remarks:[''],
        subcatName:['',Validators.required],
        catName:['',Validators.required]
      });
      this.Get();
    }
    onSubmit()
    {
      this.submitted=true;
      //display from values on sucess
      if(this.sellerForm.valid)
      {
        this.Add();
        console.log(JSON.stringify(this.sellerForm.value));
      }
    }
    Get()
    {
      this.service.GetCategories().subscribe(res=>{
        this.catlist=res;
        console.log(this.catlist);

        })
   } 
   GetSubCategory()
   {
    let catId=Number(this.sellerForm.value["catName"]);
    console.log(catId);
    this.service.GetSubCategories(catId).subscribe(res=>{
      this.subcatlist=res;
      console.log(this.subcatlist);
    },err=>{
      console.log(err)
    })
   }
    get f()
    {
      return this.sellerForm.controls;
  
    }
    onFileChanged(event) {
      this.file = event.target.files[0].name;
    }
      Add()
      {
        this.item=new Items();
         this.item.itemName=this.sellerForm.value["iName"];
         this.item.itemDesc=this.sellerForm.value["iDesc"];
         this.item.price=this.sellerForm.value["price"];
         this.item.stockNumber=this.sellerForm.value["stock"];
         this.item.catId=Number(this.sellerForm.value["catName"]);
         this.item.subCatId=Number(this.sellerForm.value["subcatName"]);
         this.item.remarks=this.sellerForm.value["remarks"];
         this.item.itemId=Math.floor(Math.random()*1000);
         this.item.sellerId=Number(localStorage.getItem('sellerId'));
         this.item.img=this.file;
        console.log(this.item);
        this.service.AddItem(this.item).subscribe(res=>{
          console.log("record added");
          this.router.navigateByUrl('/Seller/View-Items');
        },err=>{
          console.log(err)
        })
   }
   GetIdByName(name:string):any
   { 
    this.service.GetIdByName(name).subscribe(res=>{
this.seller=res;
      console.log(this.seller.id);
return this.seller.id;
    },err=>{
      return err;
    })   
   }
    onReset()
    {
      this.submitted = false;
      this.sellerForm.reset();
    }
}
