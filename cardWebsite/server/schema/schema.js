const graphql = require('graphql');
const _ = require('lodash');


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// dummy data
// var books = [
//     { name: 'Name of the Wind', genre: 'Fantasy', id: '1', authorId: '1' },
//     { name: 'The Final Empire', genre: 'Fantasy', id: '2', authorId: '2' },
//     { name: 'The Hero of Ages', genre: 'Fantasy', id: '4', authorId: '2' },
//     { name: 'The Long Earth', genre: 'Sci-Fi', id: '3', authorId: '3' },
//     { name: 'The Colour of Magic', genre: 'Fantasy', id: '5', authorId: '3' },
//     { name: 'The Light Fantastic', genre: 'Fantasy', id: '6', authorId: '3' },
// ];

// var authors = [
//     { name: 'Patrick Rothfuss', age: 44, id: '1' },
//     { name: 'Brandon Sanderson', age: 42, id: '2' },
//     { name: 'Terry Pratchett', age: 66, id: '3' }
// ];

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



var navbarItemsAndSubitems = [
  {
    title: 'home ',
    link: '/home'
  },
  {
    title: 'about ',
    link: '/about'
  },
  {
    title: 'portfolio ',
    link: '/portfolio'
  }
];

// const BookType = new GraphQLObjectType({
//     name: 'Book',
//     fields: ( ) => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         genre: { type: GraphQLString },
//         author: {
//             type: AuthorType,
//             resolve(parent, args){
//                 return _.find(authors, { id: parent.authorId });
//             }
//         }
//     })
// });

const navbarType = new GraphQLObjectType({
  name: 'navbar',
  fields: ( ) => ({
      title: { type: GraphQLString },
      link: { type: GraphQLString }
  })
});
const cardType = new GraphQLObjectType({
  name: 'card',
  fields: ( ) => ({
    name: { type: GraphQLString },
    cardImage: { type: GraphQLString },
    price: { type: GraphQLString },
    serialNumber: { type: GraphQLString },
    contactInfo:{ type: GraphQLString }
  })
});

// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     fields: ( ) => ({
//         id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         age: { type: GraphQLInt },
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent, args){
//                 return _.filter(books, { authorId: parent.id });
//             }
//         }
//     })
// });

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        // book: {
        //     type: BookType,
        //     args: { id: { type: GraphQLID } },
        //     resolve(parent, args){
        //         // code to get data from db / other source
        //         return _.find(books, { id: args.id });
        //     }
        // },
        // author: {
        //     type: AuthorType,
        //     args: { id: { type: GraphQLID } },
        //     resolve(parent, args){
        //         return _.find(authors, { id: args.id });
        //     }
        // },
        // books: {
        //     type: GraphQLList(BookType),
        //     resolve(parent, args){
        //         return books
        //     }
        // },
        // authors: {
        //     type: GraphQLList(AuthorType),
        //     resolve(parent, args){
        //         return authors
        //     }
        // },
          navbarItemsAndSubitems: {
            type: GraphQLList(navbarType),
            resolve(parent, args){
                return navbarItemsAndSubitems
            }
          },
          arrayOfCardImages: {
              type: GraphQLList(cardType),
              resolve(parent, args){
                  return arrayOfCardImages
              }
          }
      }

});
    // const Mutation = new GraphQLObjectType({
    //     name: 'Mutation',
    //     fields: {
    //         addAuthor:{
    //             type: AuthorType,
    //             args: {
    //                 name: {type: new GraphQLNonNull(GraphQLString)},
    //                 age: { type: new GraphQLNonNull(GraphQLInt)}
    //             },
    //             resolve(parents, args){
    //                 let author = {
    //                     name: args.name,
    //                     age: args.age
    //                 };
    //                 if(args){
    //                 authors.push(author)
    //                 console.log(authors)}
    //             }
    //         },
    //         addBook:{
    //             type: BookType,
    //             args: {
    //                 name: {type: new GraphQLNonNull(GraphQLString)},
    //                 genre: { type: new GraphQLNonNull(GraphQLString)}
    //             },
    //             resolve(parents, args){
    //                 let book ={
    //                     name: args.name,
    //                     genre: args.genre
    //                 };
    //                 if(args){
    //                     books.push(book)
    //                     console.log(books)
    //                 }
    //             }
    //         }
    //     }
    // })

module.exports = new GraphQLSchema({
    query: RootQuery,
    // mutation: Mutation
});
