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
    cardImage: 'rose.jpg',
    price: '$1.50',
    serialNumber: '#000001',
    contactInfo: '061151188'
  },
    {
      name: 'cardName',
    cardImage: 'its-not-you-its-me.jpg',
    price: '$1.50',
    serialNumber: '#000001',
    contactInfo: '061151188'
  },
  {
    name: 'cardName',
  cardImage: 'its-not-you-its-me.jpg',
  price: '$1.50',
  serialNumber: '#000001',
  contactInfo: '061151188'
},
{
  name: 'cardName',
cardImage: 'its-not-you-its-me.jpg',
price: '$1.50',
serialNumber: '#000001',
contactInfo: '061151188'
}
,
    {
      name: 'cardName',
    cardImage: 'start-small-dream-big.jpg',
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
