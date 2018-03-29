var button1 = document.getElementById("add");
button1.addEventListener("click", AddItem);

function AddItem() {
    var ul = document.getElementsByTagName('ul')[0];
    var Newitem = document.getElementById('item').value;
    var create = document.createElement('li');
    create.textContent = Newitem;
    ul.appendChild(create);
    var button2 = document.createElement("button");
    var span = document.createElement("span")
    create.appendChild(span);
    span.textContent = document.getElementById('item').value;
    create.appendChild(button2);
    button2.textContent = "Delete";

}
