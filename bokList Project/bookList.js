//Book constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
} 
//UI constructor
function UI(){}
//Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');
//create table element
    const row = document.createElement('tr'); 
    //insert cols
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class = "delete">X<a></td>
    `;
    list.appendChild(row);
}
//show alert
UI.prototype.showAlert = function(message, className){
//creat div
const div = document.createElement('div');
//add class
div.className = `alert ${className}`;
//add text
div.appendChild(document.createTextNode(message));
//get parent
const container = document.querySelector('.container');  
//get form
const form = document.querySelector('#book-form');
//insert alert
container.insertBefore(div, form);
//timeout after 3 seconds
setTimeout(function(){
    document.querySelector('.alert').remove();
}, 3000)
 


}
// Event listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
    //get form values
        const title = document.getElementById('title').value;
            author = document.getElementById('author').value;
            isbn = document.getElementById('isbn').value;
            //instantaite boook
    const book = new Book(title, author, isbn)
            // instantaite UI
            const ui =  new UI(); 
    //Validation
    if(title === '' || author === '' || isbn === ''){
        //error alert
        ui.showAlert('Please fill in the fields', 'error')
    } else{
            //UI Add book to list
            ui.addBookToList(book);
            //show success
            ui.showAlert('Book Added', 'success')
            ui.clearFields();
    }
  
    e.preventDefault();
});
  //clear fields
  UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';

    document.getElementById('isbn').value = '';
}   
//delete book
UI.prototype.deleteBook = function(target){
    if(target.className === 'delete'){
        target.parentElement.parentElement.remove();
    }
}
//event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
    
    const ui =  new UI(); 
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed!', 'success')
    
    e.preventDefault();
})