import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AdminServiceService } from '../service/admin-service.service';
import { Teachers } from '../interface/teachersInterface.';
import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  public savedTeachers:Boolean;
  public addFlag:boolean;
  public viewFlag:boolean;
  public teachersList:Teachers[];
   public dataSource;
  displayedColumns: string[] = ['tId', 'fName', 'lName', 'adress','subject','mobile','tEmailId','dob','doj'];
  public doj= new Date();
  @ViewChild(MatSort) sort: MatSort;

  public teachers:Teachers=
  {tId:undefined,
  fName:undefined,
  lName:undefined,
  adress:undefined,
  mobile:undefined,tEmailId:undefined,subject:undefined,dob:undefined,doj:undefined
}
loginForm: FormGroup;
    submitted = false;
    constructor(private adminServic :AdminServiceService,private fb: FormBuilder,private router:Router) { }
ngOnInit() {


// set the form field default values and validation rules
// set the form field default values and validation rules
// set the form field default values and validation rules
this.loginForm = this.fb.group({
  fName: ['',[
    Validators.required,
    Validators.minLength(2)
  ]],
  lName: ['',[
    Validators.required,
    Validators.minLength(2)
  ]],
  subject: ['',[
    Validators.required,
    Validators.minLength(2)
  ]],
  adress: ['',[
    Validators.required,
    Validators.minLength(2)
  ]],
  mobile: ['',[
    Validators.required,
    Validators.maxLength(11),
    Validators.minLength(10)
  ]],
  tEmailId: ['',[
    Validators.required,
    Validators.email
  ]],
  dob: ['',[
    Validators.required,
  ]],
  
});


}

get fName(){
  return this.loginForm.get('fName');
}
get lName(){
  return this.loginForm.get('lName');
}
get adress(){
  return this.loginForm.get('adress');
}
get subject(){
  return this.loginForm.get('subject');
}
get mobile(){
  return this.loginForm.get('mobile');
}
get tEmailId(){
  return this.loginForm.get('tEmailId');
}
get dob(){
  return this.loginForm.get('dob');
}
    onLogin(){ 
                    this.teachers.fName=this.fName.value;
                    this.teachers.lName=this.lName.value;
                    this.teachers.adress=this.adress.value;
                    this.teachers.subject=this.subject.value;
                    this.teachers.mobile=this.mobile.value;
                    this.teachers.tEmailId=this.tEmailId.value;
                    this.teachers.dob=this.dob.value;
                    this.teachers.doj=this.doj;
                    this.adminServic.addTeachers(this.teachers). subscribe(res => { 
                      this.savedTeachers= res;
                      this.router.navigate(['admin']);
                    },
                (err: HttpErrorResponse) => {
                  }
                    );
  }
public openAdd():void
 {
this.addFlag=true;
this.viewFlag=false;  
}
  public openView():void
 {
   this.viewFlag=true;
this.addFlag=false;
this.adminServic.getTeachers(). subscribe(res => { 
  this.teachersList= res;
  this.dataSource= new MatTableDataSource(this.teachersList)
  this.dataSource.sort = this.sort;
},
(err: HttpErrorResponse) => {
}
);

   }
 
}



