import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/authservice';
import { ExpensePage } from '../expense/expense';
import { RegisterPage } from '../register/register';
import { LoginUserDTO } from '../../providers/domainobjects';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

  loading: any;
  loginData:LoginUserDTO;
  data: any;

  constructor(private navCtrl: NavController, public authService: AuthService, public loadingCtrl: LoadingController, private toastCtrl: ToastController) {
          this.loginData=new LoginUserDTO("","");         
  }
  doLogin() {
    this.showLoader();
    this.authService.login(this.loginData).then((result) => {
      this.loading.dismiss();
      this.data = result;
      localStorage.setItem('token', JSON.stringify(this.data));
      this.navCtrl.setRoot(ExpensePage);
    }, (err) => {
      this.loading.dismiss();
      this.presentToast(err);
    });
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
      this.navCtrl.setRoot(ExpensePage);
    }
  }
}