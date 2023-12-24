// Close button for each item in the list---------------------------
let itemList = document.getElementsByTagName("LI");

for (let i = 0; i < itemList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  itemList[i].appendChild(span);
}

// Logic for the close button---------------------------------------
let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Add check mark for completed tasks on click----------------------
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Add a new task to the list---------------------------------------
function addNewTask() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("inp").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Write a task to add in the list...");
  } else {
    document.getElementById("list-items").appendChild(li);
  }
  document.getElementById("inp").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}
