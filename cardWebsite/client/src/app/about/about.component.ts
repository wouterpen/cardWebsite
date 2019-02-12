import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

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
export class AboutComponent implements OnInit {
  arrayOfCardImages: {};
  loading = true;
  error: any;

  constructor(public dialog: MatDialog, private apollo: Apollo) { }
  // first one is head item the ones following are subitems
  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: gql`
      {
        arrayOfCardImages {
          name
          cardImage
          price
          serialNumber
          contactInfo
        }
      }`
    }).valueChanges.subscribe(result => {
      this.arrayOfCardImages = result.data;
      this.loading = result.loading;
      this.error = result.errors;
    });
  }

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
