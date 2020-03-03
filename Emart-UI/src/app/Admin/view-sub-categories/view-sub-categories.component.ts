import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { AdminService } from 'src/app/Services/admin.service';
import { SubCategory } from 'src/app/Models/sub-category';

@Component({
  selector: 'app-view-sub-categories',
  templateUrl: './view-sub-categories.component.html',
  styleUrls: ['./view-sub-categories.component.css'],
  providers:[AdminService]
})
export class ViewSubCategoriesComponent implements OnInit {
  list:Category[];
  sublist:SubCategory;
  subcat:SubCategory;
  adminForm:FormGroup;
id:number;
catname:string="";
cat:Category;
  submitted:boolean=false;
  constructor(private builder:FormBuilder,private service:AdminService){}

    ngOnInit(): void {
      this.adminForm=this.builder.group({
        Name:[''], 
        cName:[''],
         scName:[''],
         scDesc:['']
         
        
       });
      this.GetCategory();

    }
    get f(){return this.adminForm.controls; }
    onSubmit()
    {
      this.submitted=true;
      //display from values on sucess
      if(this.adminForm.valid)
      {
        console.log(JSON.stringify(this.adminForm.value));
      }
    }
    GetCategory()
    {
      this.service.GetCategories().subscribe(res=>{
        this.list=res;
        console.log(this.list);
        })
   }    
   GetSubCategory()
   {
    let catId=Number(this.adminForm.value["Name"]);
    console.log(catId);
    this.service.GetSubCategories(catId).subscribe(res=>{
      this.sublist=res;
    },err=>{
      console.log(err)
    })
   }
   Delete(subcatId:number)
   {
     
     this.service.DeleteSubcategory(subcatId).subscribe(res=>{
       console.log("record deleted");
       alert("Record Deleted Successfully");
       this.GetSubCategory();
     })
   }   
   SubCategoryById(subcat_id:number)
   {
    this.service.GetSubCategoryById(subcat_id).subscribe(res=>{
      this.subcat=res;
      this.service.GetCategoryById(this.subcat.catId).subscribe(res=>{
        this.cat=res;
        this.catname=this.cat.catName;     
      console.log(this.subcat+"sub cat");
      console.log(this.catname+" jfkgjm");
      this.adminForm.setValue({
        cName:this.catname,
        Name:"",
        scName:this.subcat.subCatName,
        scDesc:this.subcat.subCatDesc,
      })
      });
   }
    )
  }
  UpdateSubCategory()
    {
      this.subcat=new SubCategory();
      this.subcat.catId=this.id;
  this.subcat.subCatName=this.adminForm.value["scName"];
  this.subcat.subCatDesc=this.adminForm.value["scDesc"];
  console.log(this.subcat);
  this.service.UpdateSubCategory(this.subcat).subscribe(res=>{
    console.log('Record Updated')
    this.GetSubCategory();
  },err=>{
    console.log(err)
  })
    }
   }


