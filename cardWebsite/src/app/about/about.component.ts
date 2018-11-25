import { Component } from '@angular/core';
import {
  DialogRole,
  MatDialog,
  MatDialogConfig
} from '@angular/material';
import { CardInformationDialogComponent } from '../card-information-dialog/card-information-dialog.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  arrayOfCardImages = [
    {
      name: 'cardName',
    cardImage: 'ansichtkaarten_66.jpg',
    price: '$1.50',
    serialNumber: '#000001',
    contactInfo: '061151188'
  },
    {
      name: 'cardName',
    cardImage: 'Ansichtkaarten.jpg',
    price: '$1.50',
    serialNumber: '#000001',
    contactInfo: '061151188'
  },
    {
      name: 'cardName',
    cardImage: 'ansichtkaarten_66.jpg',
    price: '$1.50',
    serialNumber: '#000001',
    contactInfo: '061151188'
  }
];

  constructor(public dialog: MatDialog) { }

  openDialog(dataCard): void {
    const DialogConfig: MatDialogConfig = {
      panelClass: 'card-information-dialog',
      data: {
        dataKey: dataCard
      },
      role: 'dialog' as DialogRole
    };

    this.dialog.open(CardInformationDialogComponent, DialogConfig);
  }

}
