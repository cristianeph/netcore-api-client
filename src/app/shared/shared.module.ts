import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './components/layout/layout.component';
import {LayoutFormComponent} from './components/layout-form/layout-form.component';
import {AlertConfirmComponent} from './components/alert-confirm/alert-confirm.component';
import {AlertMessageComponent} from './components/alert-message/alert-message.component';
import {AlertSnackComponent} from './components/alert-snack/alert-snack.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HeaderComponent} from './components/header/header.component';
import {MenuComponent} from './components/menu/menu.component';
import {RouterModule} from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {LayoutTabComponent} from './components/layout-tab/layout-tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import {LayoutFormActionsComponent} from './components/layout-form-actions/layout-form-actions.component';
import {LayoutFormContentComponent} from './components/layout-form-content/layout-form-content.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LayoutFormComponent,
    LayoutFormActionsComponent,
    LayoutFormContentComponent,
    AlertConfirmComponent,
    AlertMessageComponent,
    AlertSnackComponent,
    HeaderComponent,
    MenuComponent,
    LayoutTabComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatTabsModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressBarModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    LayoutComponent,
    LayoutFormComponent,
    LayoutFormActionsComponent,
    LayoutFormContentComponent,
    HeaderComponent,
    LayoutTabComponent,
  ]
})
export class SharedModule {
}
