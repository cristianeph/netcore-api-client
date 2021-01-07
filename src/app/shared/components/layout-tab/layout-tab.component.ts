import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ITabLayout} from '../../interfaces/layout-interface';

@Component({
  selector: 'app-layout-tab',
  templateUrl: './layout-tab.component.html',
  styleUrls: ['./layout-tab.component.scss']
})
export class LayoutTabComponent implements OnInit {
  @Input() title = '';
  @Input() tabs: ITabLayout[] = [];
  @Output() navigatePath: EventEmitter<ITabLayout> = new EventEmitter<ITabLayout>();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  navigate(tab: ITabLayout): void {
    this.router.navigate([`${tab.route}`]);
  }

}
