import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ReportsPage } from '../pages/reports/report';
import { SummaryPage } from '../pages/summary/summary';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ExpensePage } from '../pages/expense/expense';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DataService } from '../providers/onlineservice';
import { Configuration } from '../providers/serverconfig';
import { AuthService } from '../providers/authservice';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Tabs } from 'ionic-angular/components/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    ReportsPage,
    SummaryPage,
    HomePage, 
    LoginPage,
    RegisterPage,
    ExpensePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Ng2SmartTableModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [ 
    LoginPage,
    HomePage,
    ExpensePage,
    ReportsPage,
    SummaryPage,
    TabsPage,
    RegisterPage
  ],
  providers: [
    Configuration,
    AuthService,
    DataService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
