import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public userName:string;
  public userNameError:string;
  public password:string;
  public passwordError:string;
  public mobileNumber:string;
  public mobileNumberError:string;
  public emailID:string;
  public emailIDError:string;
  public login:string;
  public homepage: string = "login";


  constructor(public navCtrl: NavController) {
   this.userName="";
   this.userNameError="";
   this.login="login";
   this.password="";
   this.passwordError="";
   this.mobileNumber="";
   this.mobileNumberError="";
   this.emailID="";
   this.emailIDError="";
  }

   CreateAccount(value:any):void
   {
       this.ValidateUserName();
       this.ValidatePassword(value);
       this.ValidateMobileNumber(value);
       this.ValidateEmailID(value);
    }

    ValidateUserName() : void
    {
      var error:string = "";
      if(this.userName=="")    
      error="Username field should not be empty";
    if(this.userName.length < 6)
    error ="Username field should contain atleast 6 charactes";

      this.userNameError=error;
    }

    ValidatePassword(value:any) : void
    {
      var error:string = "";
      if(this.password=="")    
      error="Password field should not be empty";
    if(this.password.length < 6)
      error ="Password field should contain atlease 6 charactes";

      this.passwordError = error;
    }

    ValidateMobileNumber(value:any) : void
    {
      var error:string = "";
      if(this.mobileNumber=="")    
      error="Mobilenumber field should not be empty";
    if(this.mobileNumber.length < 10)
      error ="Mobilenumber should contain 10 digits";

      this.mobileNumberError = error;
    }

    ValidateEmailID(value:any) : void
    {
      var error:string = "";
      var pattern = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      if(this.emailID=="")    
      error="Email ID should not be empty";
      if(pattern.test(this.emailID))
      error ="Invaid mail ID";

      this.emailIDError = error;
    }
}
