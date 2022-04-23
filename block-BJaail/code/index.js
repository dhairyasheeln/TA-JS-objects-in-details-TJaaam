let root=document.querySelector('.parent');
console.log(root);


class BookList{
    constructor(root,list=[]){
        this.bookList=list;
        this.root=root;
    }
    add(title,author,url){
        let book=new Book(title,author,url);
        this.bookList.push(book);
        this.createUI();
    }
    delete(title){
        let index=this.bookList.findIndex(book=>{
            return book.title===title;
        });
        this.bookList.splice(index,1);
        this.createUI();
        return this.bookList.length;
    }
    createUI(){
        this.root.innerHTML="";
        this.bookList.forEach((book)=>{
            let ui=book.createUI();
            ui.querySelector('span').addEventListener('click',this.delete.bind(this,book.title));
            this.root.append(ui);
        })
    }
}


class Book{
    constructor(title,author,url){
        this.title=title;
        this.author=author;
        this.url=url;
        this.read=false;
    }

    handleRead(){
        this.read=!this.read;
        this.createUI();  
    }




    createUI(){
        // let li=document.createElement('li');
        // let  title=document.createElement('p');
        // title.innerText=this.title;
        // title.style.display="inline"


        // let author=document.createElement('p');
        // author.innerText=this.author;
        // author.style.display="inline"

        // let url=document.createElement('p');
        // url.innerText=this.url;
        // url.style.display="inline";

        // let checkbox=document.createElement('input');
        // checkbox.type="checkbox";
        // checkbox.style.display="inline"
        // checkbox.addEventListener('click',this.handleRead.bind(this));

        // let deleteBtn=document.createElement('span');
        // deleteBtn.innerText="X";
        // deleteBtn.style.padding="10px";
        // deleteBtn.style.background="orange";
        // deleteBtn.style.display="inline-block";


        // li.append(checkbox,title,author,url,deleteBtn);
        // return li;

        let tr=document.createElement('tr');

        let title=document.createElement('td');
        title.innerHTML=this.title;

        let author=document.createElement('td');
        author.innerHTML=this.author;

        let url=document.createElement('td');
        url.innerHTML=this.url;

        let read=document.createElement('td');
        let checkbox=document.createElement('input');
        checkbox.type="checkbox";
        checkbox.checked=this.read;
        checkbox.style.display="inline";
        checkbox.addEventListener('click',this.handleRead.bind(this));
        read.append(checkbox);

        let del=document.createElement('td');
        let deleteBtn=document.createElement('span');
        deleteBtn.innerHTML="X";
        deleteBtn.style.padding="10px 20px";
        deleteBtn.style.borderRadius="5px"
        deleteBtn.style.background="orange";
        deleteBtn.style.display="inline-block";
        del.append(deleteBtn);

        tr.append(title,author,url,read,del);

        return tr;
    }

}

let books=new BookList(document.querySelector('.parent'));
let addBook=document.querySelector('.add');
let title=document.querySelector('.title');
let author=document.querySelector('.author');
let url=document.querySelector('.url')   ;
addBook.addEventListener('click',()=>{
    books.add(title.value,author.value,url.value);
    title.value="";
    author.value="";
    url.value="";
});


let trCollection=document.querySelectorAll('tr');
trCollection.forEach((tr,index)=>{
    if(index%2!==0){
        r.style.backgroundColor="lightgrey";
    }
});





// books.add('In Search of Lost Time','Marcel Proust','https://thegreatestbooks.org/items/225');
// books.add('Don Quixote','Miguel de Cervantes','https://thegreatestbooks.org/items/122');
// books.add('One Hundred Years of Solitude','Gabriel Garcia Marquez','https://thegreatestbooks.org/items/266');
// books.add('The Great Gatsby','F. Scott Fitzgerald','https://thegreatestbooks.org/items/38');