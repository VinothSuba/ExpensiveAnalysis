import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { AuthService } from '../../providers/authservice';
import { ExpensePage } from '../expense/expense';
import { RegisterPage } from '../register/register';
import { LoginUserDTO } from '../../providers/domainobjects';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

  loading: any;
  loginData:LoginUserDTO;
  data: any;
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
  public isKeepmeSigned:boolean;
  public loginError:string;

  constructor(private navCtrl: NavController, 
    public authService: AuthService, 
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController, 
    private alertControl: AlertController)
  {

    this.userName="";
    this.userNameError="";
    this.login="login";
    this.password="";
    this.passwordError="";
    this.mobileNumber="";
    this.mobileNumberError="";
    this.emailID="";
    this.emailIDError="";
    this.isKeepmeSigned = false;
    this.loginData=new LoginUserDTO(this.userName,this.password);
    this.loginError="";
  }
  doLogin() 
  {
    this.passwordError="";
    this.userNameError="";
    this.ValidateUserName();
    this.ValidatePassword();
    if(this.passwordError=="" && this.userNameError=="")
    {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {  
      this.data = result;
      localStorage.setItem('token', JSON.stringify(this.data));
      this.navCtrl.setRoot(HomePage);
      this.loading.dismiss();
    }, (err) => {
      this.loading.dismiss();      
      if(err.status==400)
      {      
       this.ShowAlert(err._body);
      }
      else
      {
      this.ShowAlert("Please contact admin");
      }
    });
  }
}

ShowAlert(msg:any) : void{
  let alertctrl = this.alertControl.create({
    title: 'Login failed!',
    message: msg,
    buttons: ['OK']
  });
  alertctrl.present();
}

  ValidateUserName() : void
  {
    var error:string = "";
    if(this.loginData.username=="" || this.loginData.username==undefined)    
    this.userNameError="Username field should not be empty!";
  }

  ValidatePassword() : void
  {
    var error:string = "";
    if(this.loginData.password=="" || this.loginData.password == undefined)    
    this.passwordError="Password field should not be empty!";
  }

  register() {
    this.navCtrl.push(RegisterPage);
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

  ngOnInit(){
    if (localStorage.getItem("token")) {
      this.navCtrl.setRoot(HomePage);
    }
  }
    CreateAccount()
    {      
        this.navCtrl.push(RegisterPage);
     }
}