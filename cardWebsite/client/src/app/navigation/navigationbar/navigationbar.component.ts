import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.scss']
})
export class NavigationbarComponent implements OnInit {
  navbarItemsAndSubitems: {};
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  // first one is head item the ones following are subitems
  ngOnInit(): void {
    this.apollo
    .watchQuery({
      query: gql`
      {
        navbarItemsAndSubitems {
          title
          link
        }
      }`
    }).valueChanges.subscribe(result => {
      this.navbarItemsAndSubitems = result.data;
      console.log('books', result);
      this.loading = result.loading;
      this.error = result.errors;
    });
  }

}
