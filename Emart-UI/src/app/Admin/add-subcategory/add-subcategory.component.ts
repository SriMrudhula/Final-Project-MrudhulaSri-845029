import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { SubCategory } from 'src/app/Models/sub-category';
import { Category } from 'src/app/Models/category';

@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css'],
  providers:[AdminService]
})
export class AddSubcategoryComponent implements OnInit {
  adminForm:FormGroup;
  subCat:SubCategory;
  list:Category[];
  submitted:boolean=false;
  constructor(private builder:FormBuilder,private service:AdminService){}
  
    ngOnInit(): void {
      //bussiness functionality
      this.adminForm=this.builder.group({
        
       subCatName:['',Validators.required],
        subCatDesc:[''],
        catName:[''],
        gst:[''],
      });
      this.Get();
    }
  
  
    get f(){return this.adminForm.controls; }
    onSubmit()
    {
      this.submitted=true;
      //display from values on sucess
      if(this.adminForm.valid)
      {
        this.Add();
        console.log(JSON.stringify(this.adminForm.value));
      }
    }
    Get()
    {
      this.service.GetCategories().subscribe(res=>{
        this.list=res;
        console.log(this.list);
        })
    }
      Add()
      {
        this.subCat=new SubCategory();
        this.subCat.subCatId=Math.floor(Math.random()*1000);
         this.subCat.subCatName=this.adminForm.value["subCatName"];
         this.subCat.subCatDesc=this.adminForm.value["subCatDesc"];
        this.subCat.gst=this.adminForm.value["gst"];
        this.subCat.catId=Number(this.adminForm.value["catName"]);
        console.log(this.subCat);
        this.service.AddSubCategories(this.subCat).subscribe(res=>{
          console.log("record added");
        },err=>{
          console.log(err)
        })
   }
    onReset()
    {
      this.submitted = false;
      this.adminForm.reset();
    }
}
