import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';

//http
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { ListDepositWithdraw1Component } from './components/schcoolbank/primary1/list-deposit-withdraw1/list-deposit-withdraw1.component';
import { ListDepositWithdraw2Component } from './components/schcoolbank/primary2/list-deposit-withdraw2/list-deposit-withdraw2.component';
import { ListDepositWithdraw3Component } from './components/schcoolbank/primary3/list-deposit-withdraw3/list-deposit-withdraw3.component';
import { ListDepositWithdraw4Component } from './components/schcoolbank/primary4/list-deposit-withdraw4/list-deposit-withdraw4.component';
import { ListDepositWithdraw5Component } from './components/schcoolbank/primary5/list-deposit-withdraw5/list-deposit-withdraw5.component';
import { ListDepositWithdraw6Component } from './components/schcoolbank/primary6/list-deposit-withdraw6/list-deposit-withdraw6.component';
import { ListStudent6Component } from './components/schcoolbank/primary6/list-student6/list-student6.component';
import { ListStudent5Component } from './components/schcoolbank/primary5/list-student5/list-student5.component';
import { ListStudent4Component } from './components/schcoolbank/primary4/list-student4/list-student4.component';
import { ListStudent3Component } from './components/schcoolbank/primary3/list-student3/list-student3.component';
import { ListStudent2Component } from './components/schcoolbank/primary2/list-student2/list-student2.component';
import { ListStudent1Component } from './components/schcoolbank/primary1/list-student1/list-student1.component';

//admin
import { ListMoneySumComponent } from './components/schcoolbank/admin/list-money-sum/list-money-sum.component';
import { ListTeachersComponent } from './components/schcoolbank/admin/list-teachers/list-teachers.component';


import { DashboardComponent } from './components/schcoolbank/dashboard/dashboard.component';
import { ViewListDepositsComponent } from './components/schcoolbank/view-list-deposits/view-list-deposits.component';
import { ViewListWithdrawsComponent } from './components/schcoolbank/view-list-withdraws/view-list-withdraws.component';


import { ViewLitsStudent1Component } from './components/schcoolbank/primary1/view-lits-student1/view-lits-student1.component';
import { ViewLitsStudent2Component } from './components/schcoolbank/primary2/view-lits-student2/view-lits-student2.component';
import { ViewLitsStudent3Component } from './components/schcoolbank/primary3/view-lits-student3/view-lits-student3.component';
import { ViewLitsStudent4Component } from './components/schcoolbank/primary4/view-lits-student4/view-lits-student4.component';
import { ViewLitsStudent5Component } from './components/schcoolbank/primary5/view-lits-student5/view-lits-student5.component';
import { ViewLitsStudent6Component } from './components/schcoolbank/primary6/view-lits-student6/view-lits-student6.component';


import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ///////////////////
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    //////////////////

    LoginComponent,
    ListDepositWithdraw1Component,
    ListDepositWithdraw2Component,
    ListDepositWithdraw3Component,
    ListDepositWithdraw4Component,
    ListDepositWithdraw5Component,
    ListDepositWithdraw6Component,
    ListStudent6Component,
    ListStudent5Component,
    ListStudent4Component,
    ListStudent3Component,
    ListStudent2Component,
    ListStudent1Component,
    ListMoneySumComponent,
    ListTeachersComponent,
    DashboardComponent,
 
    ViewListDepositsComponent,
    ViewListWithdrawsComponent,
    ViewLitsStudent1Component,
    ViewLitsStudent2Component,
    ViewLitsStudent3Component,
    ViewLitsStudent4Component,
    ViewLitsStudent5Component,
    ViewLitsStudent6Component,

    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
