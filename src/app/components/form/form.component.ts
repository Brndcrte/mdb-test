import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-uikit-pro-standard';
import { RegistrationModel } from '../../Models/RegistrationModel';
import { HttpServiceService } from '../../Services/http-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  regModel : RegistrationModel = new RegistrationModel;

  constructor(private toastrService: ToastService, private http : HttpServiceService) { }

  ngOnInit(): void {
  }

 
  SendData(isEmailValid){
    if(isEmailValid){
       this.http.SendEmailFirstName(this.regModel).subscribe(resp =>{
        this.toastrService.success("Server returned Email : " + JSON.parse(resp['data']).email + " and name : " + JSON.parse(resp['data']).name);    
        console.log(resp);
      })
    }else{
      this.regModel.isEmailInvalid = true; // will show that email field is invalid even before mdb validation functionality will be activated 
                                            //(when user try to submit a form without touching any field)
      this.toastrService.error("Email field is required!");
    }
   
  }
}
