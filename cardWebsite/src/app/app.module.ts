import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigation/navigationbar/navigationbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ShowCardsComponent } from './show-cards/show-cards.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { CardInformationDialogComponent } from './card-information-dialog/card-information-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    ShowCardsComponent,
    PortfolioComponent,
    AboutComponent,
    CardInformationDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatDialogModule

  ],
  providers: [],
  entryComponents: [CardInformationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
