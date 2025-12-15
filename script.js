//your JS code here. If required.
function addBookToList(title, author, isbn) {

    const newRowHTML = 
        <tr>
            <td>title</td>
            <td>author</td>
            <td>isbn</td>
            <td><button class="delete">X</button></td>
        </tr>
    ;

    bookList.innerHTML += newRowHTML;
}