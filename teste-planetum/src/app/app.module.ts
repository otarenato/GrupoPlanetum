import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { InspectionsModule } from './inspections/inspections.module';
import { ReportsModule } from './reports/reports.module';
import {HttpClientModule} from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    AppRoutingModule,
    AuthModule,
    InspectionsModule,
    ReportsModule,
    HttpClientModule,

    MatButtonModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
