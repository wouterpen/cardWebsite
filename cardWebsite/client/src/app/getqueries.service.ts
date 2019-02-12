// import { Injectable } from '@angular/core';
// import { Apollo } from 'apollo-angular';
// import gql from 'graphql-tag';


// @Injectable({
//   providedIn: 'root'
// })
// export class GetqueriesService {

// constructor(private apollo: Apollo) { }

// this.apollo
//   .watchQuery({
//     query: gql`
//     {
//       query {
//   navbarItemsAndSubitems {
//     title
//     link
// 	}
//   arrayOfCardImages{
//     name
//     cardImage
//     price
//     serialNumber
//     contactInfo

//   }
// }
//     }`
//   })

//   .valueChanges.subscribe(result => {
//     this.arrayOfCardImages = result.data;
//     this.loading = result.loading;
//     this.error = result.errors;
//   });
// }
