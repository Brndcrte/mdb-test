import {Injectable} from '@angular/core';


@Injectable({
    providedIn : "root"
})

export class RegistrationModel{
    email : string;
    name : string;
    isEmailInvalid : boolean; // I need this additional parameter because I need to show to user that email is missing even before mdb validation will be fired up
}