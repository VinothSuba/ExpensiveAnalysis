import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ReportsPage } from '../reports/report';
import { SummaryPage } from '../summary/summary';
import { ExpensePage } from '../expense/expense';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root : any = ExpensePage;
  tab2Root : any  = ReportsPage;
  tab3Root : any = SummaryPage;

  constructor(public navCtrl: NavController) {
    if (!localStorage.getItem("token")) {
      navCtrl.setRoot(ExpensePage);
    }
  }
}
