import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { AccountService } from 'src/app/Services/account.service';
import { Buyer } from 'src/app/Models/buyer';
import { Token } from 'src/app/Models/Token';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
load:boolean;
  accountForm:FormGroup;
  submitted:boolean=false;
  token:Token;
  constructor(private builder:FormBuilder,private service:AccountService,private route:Router){}
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
        this.Login();
    }
      Login()
      {
         let username=this.accountForm.value["username"];
        let pwd=this.accountForm.value["pwd"];
        let user=this.accountForm.value["user"];
        localStorage.setItem('Username',username);
        if(user=="Admin" && username=="Admin" && pwd=="12345")
        {
          localStorage.setItem('Admin',"admin");          
          this.route.navigateByUrl('/Admin');
        }
        else{
        this.service.Login(username,pwd,user).subscribe(res=>{
          this.token=res;
          if(this.token.msg=="Success" && this.token.sellerId!=0)
          {
            localStorage.setItem('sellerId',this.token.sellerId.toString());
            localStorage.setItem('token',this.token.token);
            this.route.navigateByUrl('/Seller');
          }
          else if(this.token.msg=="Success" && this.token.buyerId!=0){
            localStorage.setItem('buyerId',this.token.buyerId.toString());
            localStorage.setItem('token',this.token.token);
            this.route.navigateByUrl('/Buyer');
          }
          else{
          this.load=true;
          }
        },
        err=>{
          console.log(err)
        })
      }
   }
    onReset()
    {
      this.submitted = false;
      this.accountForm.reset();
    }
}
