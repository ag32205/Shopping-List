var button1 = document.getElementById("add");
button1.addEventListener("click", AddItem);

function AddItem() {
    var ul = document.getElementsByTagName('ul')[0];
    var Newitem = document.getElementById('item').value;
    var create = document.createElement('li');
    create.textContent = Newitem;
    ul.appendChild(create);
    var button = document.createElement("button");
    button.textContent = "Delete";
    ul.appendChild(button);
}

var button2 = document.getElementById("delete");
button2.addEventListener("click", DeleteItem);

function DeleteItem() {
    var ul = document.getElementsByTagName('ul')[0];
    var Newitem = document.getElementById('item').value;
    var create = document.createElement('li');
    create.textContent = Newitem;
    ul.appendChild(create);
    Newitem.remove();
}

