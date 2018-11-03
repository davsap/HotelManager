import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelFormComponent } from './hotel-form/hotel-form.component';
import { ProviderComponent } from './provider/provider.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
              {path: 'admin/hotels/new', component: HotelFormComponent},
              {path: 'admin/hotels/:id', component: HotelFormComponent},
              {path: 'admin/providers/new', component: ProviderComponent},
              {path: 'admin/providers/:id', component: ProviderComponent}
            ] ) ,
  ],
  declarations: [HotelFormComponent, ProviderComponent]
})
export class AdminPanelModule {

}
