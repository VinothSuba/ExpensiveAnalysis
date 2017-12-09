import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController,AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/authservice';
import { LoginUserDTO,User } from '../../providers/domainobjects';
import {ExpensePage} from '../expense/expense';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {

  public userName:string;
  public userNameError:string;
  public password:string;
  public passwordError:string;
  public mobileNumber:string;
  public mobileNumberError:string;
  public emailID:string;
  public emailIDError:string;
  loading: any;
  registrationData :User;
  public isValidationPassed:boolean;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public authService: AuthService,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private alertControl: AlertController) {
    this.registrationData=new User("","","","","","");
    this.userName="";
    this.userNameError="";
    this.password="";
    this.passwordError="";
    this.mobileNumber="";
    this.mobileNumberError="";
    this.emailID="";
    this.emailIDError="";
    this.isValidationPassed=true;
  }

  doSignup() {
    this.showLoader();
    this.authService.register(this.registrationData).then((result) => {
      this.loading.dismiss();
      if(result!=null)
      {
        this.navCtrl.setRoot(ExpensePage);
        this.navCtrl.pop();
        
      }
      
    }, (err) => {
      this.loading.dismiss();
      if(err.status=="200" || err.status=="400")
      this.ShowAlert(err.message);
      this.navCtrl.setRoot(LoginPage);
      this.navCtrl.pop();
      this.presentToast(err);
    });
  }
  ShowAlert(msg:any) : void{
    let alertctrl = this.alertControl.create({
      title: 'Registration failed!',
      message: msg,
      buttons: ['OK']
    });
    alertctrl.present();
  }
  showLoader(){
    this.loading = this.loadingCtrl.create({
        content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
  CreateAccount()
  {
      this.ValidateUserName();
      this.ValidatePassword();
      this.ValidateMobileNumber();
      this.ValidateEmailID();
      if(this.isValidationPassed)
      this.doSignup();
   }

   ValidateUserName()
   {
     var error:string = "";
     if(this.registrationData.user_name=="")    
     error="Username field should not be empty";
   if(this.registrationData.user_name.length < 6)
   error ="Username field should contain atleast 6 charactes";
if(error!="")
this.isValidationPassed=false;
     this.userNameError=error;
   }

   ValidatePassword()
   {
     var error:string = "";
     if(this.registrationData.password=="")    
     error="Password field should not be empty";
   if(this.registrationData.password.length < 6)
     error ="Password field should contain atlease 6 charactes";
     if(error!="")
     this.isValidationPassed=false;
     this.passwordError = error;
   }

   ValidateMobileNumber()
   {
     var error:string = "";
     if(this.registrationData.phone_number == "")    
     error="Mobilenumber field should not be empty";
   if(this.registrationData.phone_number.length < 10)
     error ="Mobilenumber should contain 10 digits";
     if(error!="")
     this.isValidationPassed=false;
     this.mobileNumberError = error;
   }

   ValidateEmailID()
   {
     var error:string = "";
     var pattern = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/;
     if(this.registrationData.email=="")    
     error="Email ID should not be empty";
    //  if(pattern.test(this.registrationData.email))
    //  error ="Invaid mail ID";
     if(error!="")
     this.isValidationPassed=false;
     this.emailIDError = error;
   }
  
}