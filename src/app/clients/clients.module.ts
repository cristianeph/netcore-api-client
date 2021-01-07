import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientsRoutingModule} from './clients-routing.module';
import {ListComponent} from './list/list.component';
import {ClientsComponent} from './clients.component';
import {SharedModule} from '../shared/shared.module';
import {FormComponent} from './form/form.component';
import {ProjectionComponent} from './projection/projection.component';


@NgModule({
  declarations: [ListComponent, ClientsComponent, FormComponent, ProjectionComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule {
}
