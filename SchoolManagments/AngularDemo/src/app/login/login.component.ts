import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AdminServiceService} from '../service/admin-service.service'
import { Admin } from '../interface/adminInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

 private username:Number; 
 private password:String;
 private msg:String;
 private admins:Admin;
 constructor(private router:Router,private adminServic :AdminServiceService) { }
  ngOnInit() {
  }

  login():void
  {
    this.adminServic.getAdminDetails(this.username)
    .subscribe( data => {
      this.admins = data; 
    });

    if(this.admins!=null && this.admins.id===+this.username && this.admins.pasword===this.password){
      this.msg="Vallid user";
      console.log(this.admins.first_Name)
    this.router.navigate(['admin']);}
    
     else
     {
       this.msg="Invalid User"
     }
 
  }

}
