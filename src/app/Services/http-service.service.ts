import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http'; 


import 'rxjs' 



let headers : HttpHeaders;


  headers = new HttpHeaders({
  'Content-Type': 'application/json;charset=UTF-8',
  
  })
 

const httpOptions = {
  headers: headers
};

@Injectable({
  providedIn: 'root'
}) 
 
 
/**
 * HttpService  that will handle  Authorized Actions 
 */
export class HttpServiceService  {
 
  
            constructor( private http: HttpClient ) {}
            
            SendEmailFirstName(model){              
              var Jmodel = JSON.stringify(model);
              return this.http.post("https://httpbin.org/post", Jmodel, httpOptions); // this api service just returns back (echos) what we send via post              
            }
         
          
} 