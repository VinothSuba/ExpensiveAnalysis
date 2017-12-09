import { Component,OnInit } from '@angular/core';
import { NavController, App  } from 'ionic-angular';
import { DataService } from '../../providers/onlineservice';
import { Expensive } from '../../providers/domainobjects';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import {LoginPage} from '../login/login';
import {TabsPage} from'../tabs/tabs';
import { HomePage } from '../home/home';
import { Loading } from 'ionic-angular/components/loading/loading';

@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html' 
})
export class ExpensePage implements OnInit {
 
  constructor(public navCtrl: NavController, public authService: DataService, private _app:App  ) {
    
  } 

  createColumn(args:object):void{     
   }

 logOut(){
  localStorage.removeItem("token");
  this._app.getRootNav().setRoot(LoginPage); 
 }

 ngOnInit(): void {
  this.authService.getExpensiveDataList().then( 
    expenseData => this.expenseData=expenseData
  );
 }

  
}


