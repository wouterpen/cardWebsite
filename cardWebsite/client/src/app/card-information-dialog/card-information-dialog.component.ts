import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-card-information-dialog',
  templateUrl: './card-information-dialog.component.html',
  styleUrls: ['./card-information-dialog.component.scss']
})
export class CardInformationDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  CARDDATA = this.data.dataKey;
  ngOnInit(): void {
    console.log(this.CARDDATA);
  }
}
