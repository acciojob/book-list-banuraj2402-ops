//your JS code here. If required.
const bookForm = document.getElementById('book-form'); 
const bookList = document.getElementById('book-list'); 

bookForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

 
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields.');
        return;
    }

    const newRowHTML = `
        <tr>
            <td>${title}</td>
            <td>${author}</td>
            <td>${isbn}</td>
            <td><button class="delete">X</button></td> 
        </tr>
    `;
    bookList.innerHTML += newRowHTML; 


    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});



bookList.addEventListener('click', (e) => {
  
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});