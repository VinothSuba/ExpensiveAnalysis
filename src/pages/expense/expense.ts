import { Component,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { DataService } from '../../providers/onlineservice';
import { Expensive } from '../../providers/domainobjects';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
@Component({
  selector: 'page-expense',
  templateUrl: 'expense.html' 
})
export class ExpensePage implements OnInit {
   expenseData:Expensive[];
    settings = {
        columns: {      
          id: {
            title: 'ID'
          },
          user_id: {
            title: 'userId'
          },
          user_name: {
            title: 'user_name'
          }    ,
          amount: {
            title: 'amount'
          } ,
         description: {
            title: 'Description'
          }      
        }
  };

  createColumn(args:object):void{     
 }
 ngOnInit(): void {
  this.authService.getExpensiveDataList().then( 
    expenseData => this.expenseData=expenseData
  );
 }

  constructor(public navCtrl: NavController, public authService: DataService ) {

  }  
}


