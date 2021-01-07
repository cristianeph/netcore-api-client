import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientsService} from '../../shared/services/clients.service';
import {IClients} from '../../shared/interfaces/clients-interface';
import to from 'await-to-js';
import {Router} from '@angular/router';
import * as moment from 'moment';
import {MessageProviderService} from '../../shared/services/message-provider.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl({value: null, disabled: false}, [Validators.required]),
    lastName: new FormControl({value: null, disabled: false}, [Validators.required]),
    birthdate: new FormControl({value: null, disabled: false}, [Validators.required]),
  });

  constructor(private clientsService: ClientsService,
              private messageService: MessageProviderService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.form.reset();
  }

  async save(): Promise<void> {
    const raw: IClients = this.form.getRawValue();
    raw.birthdate = moment(raw.birthdate).format('DD/MM/YYYY');
    const [error, response] = await to(this.clientsService.post(raw).toPromise());
    if (response) {
      this.messageService.showSnack('Registro guardado!');
      this.form.reset();
      await this.router.navigate(['/clients/list']);
    } else {
      this.messageService.showSnack('Error, intente nuevamente', true);
    }
  }

}
