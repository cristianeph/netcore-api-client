import {Component, OnInit} from '@angular/core';
import {IClients} from '../../shared/interfaces/clients-interface';
import {ClientsService} from '../../shared/services/clients.service';
import {MessageProviderService} from '../../shared/services/message-provider.service';
import {Router} from '@angular/router';
import to from 'await-to-js';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['firstNames', 'lastNames', 'birthdate'];
  list: IClients[] = [];

  constructor(private clientsService: ClientsService,
              private messageService: MessageProviderService,
              private router: Router) {
  }

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load(): Promise<void> {
    const [error, response] = await to(this.clientsService.get().toPromise());
    this.list = response ? response : [];
  }

}
