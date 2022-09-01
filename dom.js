let itemList = document.getElementById('items');
let form = document.querySelector("#addForm");

form.addEventListener("submit" , addItem);
itemList.addEventListener("click" , removeitem);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem));
    itemList.appendChild(li);

    let deleteBtn = document.createElement('button');
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);

    let editButton = document.createElement('button');
    editButton.className = "btn btn-success btn-sm float-right edit";
    editButton.appendChild(document.createTextNode('edit'));
    li.append(editButton);
}

function removeitem(e){
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}