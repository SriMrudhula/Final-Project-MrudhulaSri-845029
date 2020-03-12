import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/Models/sub-category';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItemService } from 'src/app/Services/item.service';
import { Items } from 'src/app/Models/items';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-items',
  templateUrl: './view-items.component.html',
  styleUrls: ['./view-items.component.css']
})
export class ViewItemsComponent implements OnInit {
  list:Category[];
  sublist:SubCategory[];
  item:Items;
  sellerForm:FormGroup;
  itemlist:Items[];
  subcat:SubCategory;
  cat:Category;
id:number;
catId:number;
subcatId:number;
sid:number;
subcatname:string;
  submitted:boolean=false;
  img:string;
  subId:number;
  constructor(private builder:FormBuilder,private service:ItemService,private route:Router){}

    ngOnInit(): void {
      this.sellerForm=this.builder.group({
        iName:[''],
         iDesc:[''],
         price:[''],
         stock:[''],
         remarks:[''],
         subCatName:[''],
         catName:[''],
       });
 
      this.GetCategory();
    
    }
  get f(){return this.sellerForm.controls; }
  

    GetCategory()
    {
      this.service.GetCategories().subscribe(res=>{
        this.list=res;
        })
   }  

   GetSubCategory()
   {
    let catId=Number(this.sellerForm.value["catName"]);
    console.log(catId);
    this.service.GetSubCategories(catId).subscribe(res=>{
      this.sublist=res;
    },err=>{
      console.log(err)
    })
   }
   GetItem(itemid:number)
   {
        this.service.GetItems(itemid).subscribe(res=>{
      this.item=res;
      this.id=itemid;
      this.catId=this.item.catId;
      this.subcatId=this.item.subCatId;
      this.sid=this.item.sellerId;
      this.img=this.item.img;
      console.log(this.item);
      this.service.GetSubCategoryById(this.item.subCatId).subscribe(res=>{
        this.subcat=res;
        this.subcatname=this.subcat.subCatName;
        this.service.GetCategoryById(this.item.catId).subscribe(res=>{
          this.cat=res;
      this.sellerForm.setValue({
        iName:this.item.itemName,
         iDesc:this.item.itemDesc,
         price:this.item.price,
         stock:this.item.stockNumber,
         remarks:this.item.remarks,
         subCatName:this.subcat.subCatName,
         catName:this.cat.catName,
      
        })
      })
      });
   }
    )
  }
   ViewItems()
   {
     this.subId=Number(this.sellerForm.value["subCatName"]);
     console.log(this.subId);
     this.service.ViewItems(Number(localStorage.getItem('sellerId')),this.subId).subscribe(res=>{
       this.itemlist=res;
       console.log(this.itemlist);
     },err=>{
        console.log(err)
     })
   }
   Delete(ItemId:number)
   {
     
     this.service.DeleteItem(ItemId,).subscribe(res=>{
       console.log("record deleted");
      //  alert("Record Deleted Successfully");
       this.ViewItems();
     })
   }   

  UpdateItem()
    {
      this.item=new Items();
this.item.catId=this.catId;
this.item.subCatId=this.subcatId;
this.item.itemId=this.id;  
this.item.sellerId=this.sid;
this.item.img=this.img;
  this.item.itemName=this.sellerForm.value["iName"];
  this.item.itemDesc=this.sellerForm.value["iDesc"];
  this.item.price=this.sellerForm.value["price"];
  this.item.stockNumber=this.sellerForm.value["stock"];
  this.item.remarks=this.sellerForm.value["remarks"];
  console.log(this.item);
  this.service.UpdateItem(this.item).subscribe(res=>{
    console.log('Record Updated');
    this.subId=this.item.sellerId;
    this.ViewItems();
  },err=>{
    console.log(err)
  })
    }
}
