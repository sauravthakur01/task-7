let itemList = document.getElementById('items');

let form = document.querySelector("#addForm");
let filter = document.querySelector("#filter");

form.addEventListener("submit" , addItem);
itemList.addEventListener("click" , removeitem);
filter.addEventListener('keyup' , filterItems);

function addItem(e){
    e.preventDefault();

    var newItem = document.getElementById('item').value;
    let newDesc = document.getElementById("description").value;

    let li = document.createElement('li');

    li.className="list-group-item";
    li.appendChild(document.createTextNode(newItem));
    
    li.appendChild(document.createTextNode(" "+ newDesc));
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

function filterItems(e){
    let input = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach((item)=>{
        let itemName = item.firstChild.textContent ;
        let discname = item.childNodes[1].textContent ;

        if(itemName.toLowerCase().indexOf(input)!= -1  || discname.toLowerCase().indexOf(input)!=-1){
            item.style.display ="block";
        } else{
            item.style.display = "none";
        }
    })
}