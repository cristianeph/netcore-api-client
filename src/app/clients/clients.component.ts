import {Component, OnInit} from '@angular/core';
import {ITabLayout} from '../shared/interfaces/layout-interface';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  tabs: ITabLayout[] = [
    {
      label: `Lista de clientes`,
      route: `/clients/list`
    },
    {
      label: `Creación de clientes`,
      route: `/clients/form`
    },
    {
      label: `Análisis y Proyección de clientes`,
      route: `/clients/projection`
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
