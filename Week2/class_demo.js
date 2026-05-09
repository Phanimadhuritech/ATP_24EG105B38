// Problem Statement: Library Book Management System
// Objective : Create a Book class and use it to manage a collection of books in a library.
// Requirements:
//   Create a Book class with the following:
//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)
class Book
{
    title;
    author;
    pages;
    isAvailable;

    constructor(title,author,pages,isAvailable){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.isAvailable=isAvailable;
    }
    // Methods:
    //   borrow() - Marks the book as not available
    borrow(){
        this.isAvailable=false;
    }
    //   returnBook() - Marks the book as available
    returnBook(){
        this.isAvailable=true;
    }
     //   getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
    getInfo(){
        return this.title="The Hobbit",this.author="J.R.R.Tolkien",this.pages='310 pages';
    }
    //   isLongBook() - Returns true if pages > 300, false otherwise
    isLongBook(){
        if(this.pages>300)
        {
            return true
        }
         else{
            return false;
         }
    }
}
let b1 = new Book('Pride and Prejudice,',"Jane Austen,",'200 pages');
let b2 = new Book('Twisted Games',"Ana Huang",'400 pages');
console.log('The book is',b1.title,'The author is',b1.author,'The no of pages are:',b1.pages);
