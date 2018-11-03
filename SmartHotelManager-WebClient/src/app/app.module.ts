import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AdminPanelModule} from './admin-panel/admin-panel.module';
import {HotelDashboardModule} from './hotel-dashboard/hotel-dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HotelDashboardModule,
    AdminPanelModule,
    RouterModule.forRoot([
        {path: '', component: HomeComponent}
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
