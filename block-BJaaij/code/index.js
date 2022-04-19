/*
## An object-oriented book-list!

- [ ] Create a class BookList
- [ ] Create another class called Book

#### Each Book should have several properties:

1. Title
2. Category
3. Author
4. isRead (default to `false`)
5. finishedDate

Book class will have the following methods:

- `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.



After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.

*/

class Book{
    constructor(title,category,author,read=false){
        this.title=title;
        this.category=category;
        this.author=author;
        this.isRead=read;
        this.finishedDate=" ";
    }
    markBookAsRead(){
        this.isRead=true;
        this.finishedDate=Date();
    }
}

/*
#### BookList should have the following properties:

1. An array of all the Books
2. Current read book index

#### BookList Methods

- [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
- [] `getCurrentBook()` should return the current book using the `index` and the book array
- [] `getNextBook()` should return the next book using the `index` and the book array
- [] `getPrevBook()` should return the previous book using the `index` and the book array
- [] `changeCurrentBook` should accept one parameter and update the current index.
*/


class BookList extends Book{
    constructor(title,category,author,bookIndex,read=false,){
        super(title,category,author,read);

        this.bookArr=[];
        this.bookIndex=bookIndex;
    }

    add(bookArr){
        bookArr.forEach(element => {
            this.bookArr.push(element);
        });
        this.bookArr.push(this.title);   
    }
    getCurrentBook(){
        return this.bookArr[this.bookIndex];
    }
    getNextBook(){
        return this.bookArr[this.bookIndex+1];
    }
    getPrevBook(){
        return this.bookArr[this.bookIndex-1]
    }
    changeCurrentBook(curIndex){
        this.bookIndex=curIndex;
    }
}

let b1=new BookList('arabian Nights','Fictional','James Diamond',0);


