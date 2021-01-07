import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OauthBridgeService} from '../../services/oauth-bridge.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() openSidenav: EventEmitter<boolean> = new EventEmitter();
  @Input() state: boolean;
  user: string;

  constructor(private oauth: OauthBridgeService,
              private userService: UserService) {
    this.state = false;
  }

  ngOnInit(): void {
    this.user = this.oauth.getToken().userName;
  }

  setMode(): void {
    this.openSidenav.emit(true);
  }

  logout(): void {
    this.oauth.logout();
  }

}
