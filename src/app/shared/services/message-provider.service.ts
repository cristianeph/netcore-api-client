import {Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AlertConfirmComponent} from '../components/alert-confirm/alert-confirm.component';
import {AlertMessageComponent} from '../components/alert-message/alert-message.component';
import {AlertSnackComponent} from '../components/alert-snack/alert-snack.component';

@Injectable({
  providedIn: 'root'
})
export class MessageProviderService {

  constructor(public dialog: MatDialog,
              public snackBar: MatSnackBar) {
  }

  showModal(component, config, width?): any {
    return this.dialog.open(component, {width: (width ? width : '800px'), disableClose: false, data: config});
  }

  showModalPromise(component, config, width?): any {
    return this.dialog.open(component, {width: (width ? width : '800px'), disableClose: false, data: config}).afterClosed().toPromise();
  }

  showConfirm(textmessage): any {
    return this.dialog.open(AlertConfirmComponent, {
      width: '450px',
      height: '180px',
      data: {
        message: textmessage
      }
    });
  }

  showConfirmPromise(textmessage): any {
    return this.dialog.open(AlertConfirmComponent, {
      width: '450px',
      height: '180px',
      data: {
        message: textmessage
      }
    }).afterClosed().toPromise();
  }

  showAlert(textmessage): any {
    return this.dialog.open(AlertMessageComponent, {
      width: '450px',
      height: '180px',
      data: {
        message: textmessage
      }
    });
  }

  showSnack(textmessage, error: boolean = false): void {
    this.snackBar.openFromComponent(AlertSnackComponent, {
      duration: 3000,
      verticalPosition: 'top',
      data: {
        message: textmessage
      },
      panelClass: error ? 'snack-error' : 'snack-success'
    });
  }
}
