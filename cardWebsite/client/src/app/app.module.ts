import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';


import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationbarComponent } from './navigation/navigationbar/navigationbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { ShowCardsComponent } from './show-cards/show-cards.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { CardInformationDialogComponent } from './card-information-dialog/card-information-dialog.component';
import { HeaderComponent } from './header/header.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    ShowCardsComponent,
    PortfolioComponent,
    AboutComponent,
    CardInformationDialogComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatDialogModule,
    GraphQLModule,
    HttpClientModule

  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory (httpLink: HttpLink) {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: 'http://localhost:4000/graphql?'
        })
      };
    },
    deps: [HttpLink]
  }],
  entryComponents: [CardInformationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
