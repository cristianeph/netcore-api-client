import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-alert-confirm',
  templateUrl: './alert-confirm.component.html',
  styleUrls: ['./alert-confirm.component.css']
})
export class AlertConfirmComponent implements OnInit {
  @ViewChild('buttonYes') buttonYes: MatButton;
  @ViewChild('buttonNo') buttonNo: MatButton;

  constructor(public dialogRef: MatDialogRef<AlertConfirmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  onKey(event: KeyboardEvent): void {
  }

}
