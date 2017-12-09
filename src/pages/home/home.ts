import { Component } from '@angular/core';
import { AuthService } from '../../providers/authservice';
import { NavController, App, LoadingController, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'
import { LoginPage } from '../login/login';
import { ReportsPage } from '../reports/report';
import { SummaryPage } from '../summary/summary';
import { ExpensePage } from '../expense/expense';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  loading: any;
  isLoggedIn: boolean = false;

  rootPage = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public app: App, 
    public navCtrl: NavController, 
    public authService: AuthService, 
    public loadingCtrl: LoadingController, 
    private toastCtrl: ToastController) {
    
      this.pages = [
        { title: 'Expensive', component: TabsPage },
        { title: 'Reports', component: ReportsPage },
        { title: 'Summary', component: SummaryPage }
      ];
      
    if(localStorage.getItem("token")) {
      this.isLoggedIn = true;
    }
  }

 

}