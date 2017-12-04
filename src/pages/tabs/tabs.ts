import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { ExpensePage } from '../expense/expense';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // tab1Root = ExpensePage;
  // tab2Root = AboutPage;
  // tab3Root = ContactPage;
  // tab4Root = HomePage;

  constructor(public navCtrl: NavController) {
    if (!localStorage.getItem("token")) {
      navCtrl.setRoot(ExpensePage);
    }
  }
}
