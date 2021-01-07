import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from './clients.component';
import {ListComponent} from './list/list.component';
import {FormComponent} from './form/form.component';
import {ProjectionComponent} from './projection/projection.component';

const routes: Routes = [
  {
    path: '',
    component: ClientsComponent,
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'form',
        component: FormComponent
      },
      {
        path: 'projection',
        component: ProjectionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule {
}
