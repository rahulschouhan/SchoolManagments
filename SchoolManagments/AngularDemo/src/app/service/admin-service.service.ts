import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../interface/adminInterface';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Teachers } from '../interface/teachersInterface.';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private http: HttpClient)  { 
  }
  articleUrl = "http://localhost:8080/admin";
  public getAdminDetails(id:Number):Observable<Admin>
  {
    return this.http.get<Admin>(this.articleUrl + '/' + id);
  }
  public addTeachers(teachers:Teachers):Observable<Boolean>
  {
    let httpHeaders = new HttpHeaders()
            .set('Content-Type', 'application/json');   
        let options = {
            headers: httpHeaders
        };        
        return this.http.post<Boolean>(this.articleUrl+"/addTeachers", teachers, options);
  }
  public getTeachers():Observable<Teachers[]>
  {
    return this.http.get<Teachers[]>(this.articleUrl + '/getTeachers' );
  }
}
