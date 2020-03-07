import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AdminService } from 'src/app/Services/admin.service';
import { Category } from 'src/app/Models/category';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  adminForm:FormGroup;
  cat:Category;
  cat1:Category;
  load:boolean=false;
  submitted:boolean=false;
  constructor(private builder:FormBuilder,private service:AdminService,private router: Router){}
  
    ngOnInit(): void {
      //bussiness functionality
      this.adminForm=this.builder.group({
        
       cName:['',Validators.required],
        cDesc:[''],
        CatId:[''],
      });
    }
  
  
    get f()
    {
      return this.adminForm.controls;
  
    }
    
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
      Add()
      {
        this.cat=new Category();
        this.cat.catId=Math.floor(Math.random()*1000);;
         this.cat.catName=this.adminForm.value["cName"];
         this.cat.catDesc=this.adminForm.value["cDesc"];
        console.log(this.cat);
        this.service.GetCategoryByName(this.cat.catName).subscribe(res=>{
          this.cat1=res;
          console.log(this.cat1);
          if(!this.cat1)
        {
          this.load=false;
        this.service.AddCategories(this.cat).subscribe(res=>{
          console.log("record added");
          this.router.navigateByUrl('/Admin/View-Category');
        },err=>{
          console.log(err)
        })
      }
      else{
        this.load=true;
      }
      })

   }
    onReset()
    {
      this.submitted = false;
      this.adminForm.reset();
    }

}
