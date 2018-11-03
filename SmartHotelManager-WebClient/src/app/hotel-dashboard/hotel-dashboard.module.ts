import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReservationModule} from './reservation/reservation.module';

@NgModule({
  imports: [
    CommonModule,
    ReservationModule,
  ],
  declarations: []
})
export class HotelDashboardModule { }
