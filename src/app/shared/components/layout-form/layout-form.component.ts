import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout-form',
  templateUrl: './layout-form.component.html',
  styleUrls: ['./layout-form.component.css']
})
export class LayoutFormComponent implements OnInit {
  @Input() loading: boolean;
  @Input() titleicon: string;
  @Input() maintitle: string;
  @Input() subtitle: string;

  constructor() {
    this.loading = false;
    this.titleicon = 'keyboard';
    this.maintitle = '';
    this.subtitle = '';
  }

  ngOnInit() {
  }

}
