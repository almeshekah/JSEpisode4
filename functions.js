const authors = require("./authors.json");
const books = require("./books.json");

/**************************************************************
 * getBookById(bookId, books):
 * - receives a bookId
 * - recieves an array of book objects
 * - returns the book object that matches that id
 * - returns undefined if no matching book is found
 ****************************************************************/
function getBookById(bookId, books) {
  // Your code goes here
 
  return books.find((book)=> book.id == bookId );
}
//console.log(getBookById(12, books));

/**************************************************************
 * getAuthorByName(authorName, authors):
 * - receives an authorName
 * - recieves an array of author objects
 * - returns the author that matches that name (CASE INSENSITIVE)
 * - returns undefined if no matching author is found
 ****************************************************************/
function getAuthorByName(authorName, authors) {
  // Your code goes here
  return authors.find((author)=> author.name.toLowerCase() == authorName.toLowerCase() );
}
//console.log(getAuthorByName("J.K. Rowling", authors));

/**************************************************************
 * bookCountsByAuthor(authors):
 * - receives an array of authors
 * - returns an array of objects with the format:
 *    [{ author: <NAME>, bookCount: <NUMBER_OF_BOOKS> }]
 ****************************************************************/
function bookCountsByAuthor(authors) {
  // Your code goes here
  let arr=[];
  let newopj= {};
   authors.forEach((author)=>{
     arr.push (newopj= {
      author:author.name,
    bookCount:author.books.length,
  });
    
  });
return arr;
}
//console.log(bookCountsByAuthor(authors));

/**************************************************************
 * booksByColor(books):
 * - receives an array of books
 * - returns an object where the keys are colors
 *   and the values are arrays of book titles:
 *    { <COLOR>: [<BOOK_TITLES>] }
 ****************************************************************/
function booksByColor(books) {
  let colors = {};
  books.forEach((book)=>{
    colors[book.color]= [];
  });
  books.forEach((book)=>{
    colors[book.color].push(book.title);
  });

  // Your code goes here

  return colors;
}
//console.log(booksByColor(books));

/**************************************************************
 * titlesByAuthorName(authorName, authors, books):
 * - receives an authorName
 * - recieves an array of author objects
 * - recieves an array of book objects
 * - returns an array of the titles of the books written by that author:
 *    ["The Hitchhikers Guide", "The Meaning of Liff"]
 ****************************************************************/
function titlesByAuthorName(authorName, authors, books) {
  // Your code goes here
  
  //let numbooks =[];
  let titlesofbooks=[];
  let numbooks = [];
  authors.forEach((author)=>{
    if(author.name.toLowerCase()===authorName.toLowerCase())  numbooks=author.books;

  });
  books.forEach((book)=>{
   if(numbooks.includes(book.id))titlesofbooks.push(book.title);
  });

  return titlesofbooks;


  
}
 //console.log(titlesByAuthorName("George R.R. Martin", authors, books));

/**************************************************************
 * mostProlificAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author with the most books
 *
 * Note: assume there will never be a tie
 ****************************************************************/
function mostProlificAuthor(authors) {
  // Your code goes here
  let max =0;
  let nameofauthor = 'aaaa' ;
  authors.forEach((author)=>{
    if (author["books"].length>max){
      max=author["books"].length;
      nameofauthor = author.name;
    }


  });
  return nameofauthor

}
 //console.log(mostProlificAuthor(authors));

/**************************************************************
 * relatedBooks(bookId, authors, books):
 * - receives a bookId
 * - receives a list of authors
 * - receives a list of books
 * - returns a list of the titles of all the books by
 *   the same author as the book with bookId
 *   (including the original book)
 *
 * e.g. Let's send in bookId 37 ("The Shining Girls" by Lauren Beukes):
 *      relatedBooks(37);
 * We should get back all of Lauren Beukes's books:
 *      ["The Shining Girls", "Zoo City"]
 *
 * NOTE: YOU NEED TO TAKE INTO ACCOUNT BOOKS WITH MULTIPLE AUTHORS
 *
 * e.g. Let's send in bookId 46 ("Good Omens" by Terry Pratchett and Neil Gaiman):
 *      relatedBooks(46);
 * We should get back all of Neil Gaiman's books AND all of Terry Pratchett's books:
 *      ["Good Omens", "Good Omens", "Neverwhere", "Coraline", "The Color of Magic", "The Hogfather", "Wee Free Men", "The Long Earth", "The Long War", "The Long Mars"]
 *
 * BONUS: REMOVE DUPLICATE BOOKS
 ****************************************************************/
function relatedBooks(bookId, authors, books) {
  // Your code goes here

  let numbooks = [];
  let authorbooks =[];
  authors.forEach((author)=>{
    if(author["books"].includes(bookId))  numbooks=author.books;

  });
  books.forEach((book) => {
    if(numbooks.includes(book.id)){
      authorbooks.push(book.title);
    }

  });

  
 


  return (authorbooks) ;



}
console.log(relatedBooks(50, authors, books));

/**************************************************************
 * friendliestAuthor(authors):
 * - receives a list of authors
 * - returns the name of the author that has
 *   co-authored the greatest number of books
 ****************************************************************/
function friendliestAuthor(authors) {
  // Your code goes here
  let greatest =0;
  let nameofauthor = 'aaaa' ;
  authors.forEach((author)=>{
    if (author["books"].length>greatest){
      greatest=author["books"].length;
      nameofauthor = author.name;
    }


  });
  return nameofauthor

}
console.log(friendliestAuthor(authors));

module.exports = {
  getBookById,
  getAuthorByName,
  bookCountsByAuthor,
  booksByColor,
  titlesByAuthorName,
  mostProlificAuthor,
  relatedBooks,
  friendliestAuthor,
};

/**
 * Uncomment the following lines if you
 * want to manually test your code
 */
