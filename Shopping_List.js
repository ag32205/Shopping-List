var button1 = document.getElementById("add");
button1.addEventListener("click", AddItem);


function AddItem() {
     var ul = document.getElementsByTagName('ul')[0];
var Newitem = document.getElementById('item');
    var create = document.createElement('li');
    create.textContent = Newitem;
    ul.appendChild(create);

}
