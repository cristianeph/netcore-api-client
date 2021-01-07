import {Component, OnInit} from '@angular/core';
import {Platform} from '@angular/cdk/platform';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  menuMode = '';

  constructor(private platform: Platform) {
  }

  ngOnInit(): void {
    this.menuMode = this.platform.ANDROID || this.platform.IOS ? 'over' : 'side';
  }

}
