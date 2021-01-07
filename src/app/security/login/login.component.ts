import {Component, OnInit} from '@angular/core';
import {OauthBridgeService} from '../../shared/services/oauth-bridge.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loading: boolean;
  form: FormGroup;

  constructor(private oauthService: OauthBridgeService) {
    this.loading = false;
    this.form = new FormGroup({
      userName: new FormControl({value: null, disabled: false}, [Validators.required]),
      password: new FormControl({value: null, disabled: false}, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.oauthService.loadingLoginStatus.subscribe(value => {
      this.loading = value;
    });
  }

  login(): void {
    this.oauthService.logout(true);
    this.oauthService.obtainToken(this.form.getRawValue());
  }

}
