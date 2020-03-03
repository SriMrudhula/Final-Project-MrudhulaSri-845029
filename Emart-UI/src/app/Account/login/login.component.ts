import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { Buyer } from 'src/app/Models/buyer';
import { Seller } from 'src/app/Models/seller';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountForm:FormGroup;
  submitted:boolean=false;
  constructor(private builder:FormBuilder,private service:AccountService){}
  
    ngOnInit(): void {
      //bussiness functionality
      this.accountForm=this.builder.group({
        username:['',Validators.required],
        pwd:['',Validators.required],
        user:['',Validators.required]
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
        // this.Login();
        console.log(JSON.stringify(this.accountForm.value));
      }
    }
      Login()
      {
         let username=this.accountForm.value["username"];
        let pwd=this.accountForm.value["pwd"];
        let user=this.accountForm.value["user"];
        console.log(username+" "+pwd+" "+user+"user");
        this.service.Login(username,pwd,user).subscribe(res=>{
          console.log(res);
        },
        err=>{
          console.log(err)
        })
   }
    onReset()
    {
      this.submitted = false;
      this.accountForm.reset();
    }
}
