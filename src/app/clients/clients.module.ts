import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ClientsRoutingModule} from './clients-routing.module';
import {ListComponent} from './list/list.component';
import {ClientsComponent} from './clients.component';
import {SharedModule} from '../shared/shared.module';
import {FormComponent} from './form/form.component';
import {ProjectionComponent} from './projection/projection.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [ListComponent, ClientsComponent, FormComponent, ProjectionComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatTableModule,
  ]
})
export class ClientsModule {
}
