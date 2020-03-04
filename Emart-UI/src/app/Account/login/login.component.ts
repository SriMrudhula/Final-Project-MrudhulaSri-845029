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
      {
        this.Login();
        console.log(JSON.stringify(this.accountForm.value));
      }
    }
      Login()
      {
         let username=this.accountForm.value["username"];
        let pwd=this.accountForm.value["pwd"];
        let user=this.accountForm.value["user"];
        console.log(username+" "+pwd+" "+user+"user");
        if(user=="Admin" && username=="Admin" && pwd=="12345")
        {
          this.route.navigateByUrl('/Admin');
        }
        else{
        this.service.Login(username,pwd,user).subscribe(res=>{
          this.token=res;
          if(this.token.msg=="Success" && this.token.sellerId!=0)
          {
            this.route.navigateByUrl('/Seller');
            localStorage.setItem('sellerId',this.token.sellerId.toString());
            localStorage.setItem('token',this.token.token);
            console.log(this.token);
          }
          else if(this.token.msg=="Success" && this.token.buyerId!=0){
            this.route.navigateByUrl('/Buyer');
            localStorage.setItem('buyerId',this.token.buyerId.toString());
            localStorage.setItem('token',this.token.token);
            console.log(this.token);
          }
          else{
            alert("Invaild User");
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
