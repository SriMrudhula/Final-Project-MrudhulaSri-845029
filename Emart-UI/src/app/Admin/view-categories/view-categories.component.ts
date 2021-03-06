import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AdminLandingPageComponent } from '../admin-landing-page/admin-landing-page.component';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css'],
  providers:[AdminService]
})
export class ViewCategoriesComponent implements OnInit {
  list:Category[];
  cat:Category;
  adminForm:FormGroup;
  id:number;
  constructor(private service:AdminService,private builder:FormBuilder,){}

    ngOnInit(): void {
      this.adminForm=this.builder.group({
        cName:['',Validators.required],
         cDesc:[''],
        
       });
      this.Get();
    }
    Get()
    {
      this.service.GetCategories().subscribe(res=>{
        this.list=res;
        })
   } 
    Delete(catId:number)
    {
      this.service.DeleteCategory(catId).subscribe(res=>{
        this.Get();
      })
    }   

CategoryById(cat_id:number)
   {
    this.service.GetCategoryById(cat_id).subscribe(res=>{
      this.cat=res;
      this.id=cat_id;
      this.adminForm.setValue({
        cName:this.cat.catName,
        cDesc:this.cat.catDesc,
      });
   })
  }
  UpdateCategory()
    {
      this.cat=new Category();
      this.cat.catId=this.id;
  this.cat.catName=this.adminForm.value["cName"];
  this.cat.catDesc=this.adminForm.value["cDesc"];
  this.service.UpdateCategory(this.cat).subscribe(res=>{
    this.Get();
  },err=>{
    console.log(err)
  })
    }
}