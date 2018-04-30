var myKey = "awesomeKey";
var myItems = [];

function setupLocal() {
  if (localStorage.getItem(myKey) !== null) {
    // Read in the value of the localStorage and save it;
    let stringOfItems = localStorage.getItem(myKey);
    jsonOfItems = JSON.parse(stringOfItems);
    console.log("Found Key. JSON: " + jsonOfItems);
    $(jsonOfItems).each(function() {
      createItem(this);
    });
  } else {
    // Create a default list
    createItem("Default List");
  }
}


function targetValueDom() {
  setupLocal();
  $buttonElement = $("#buttonElement");
  $listOne = $("#listOne");
  //let inputColor = document.getElementById("inputColor");
  //let inputContent = document.getElementById("inputContent");

  // We'll add a listener to our create element button
  $inputField = $("#inputContent").on("keyup", function() {
    if (event.keyCode === 13) {
      makeItem();
    }
  });


  $buttonElement.on("click", function() {
    makeItem();
  });
  //saveItems();
}

function makeItem() {
  let newContent = $("#inputContent").val();
  console.log("Creating: " + newContent);
  createItem(newContent);
  saveItems();
}

function createItem(itemValue) {
  // first we'll create a list element and text node
  // let newElem = document.createElement("LI");
  console.log(itemValue);
  $newElem = $("<li></li>").text(itemValue.toString());
  $newButton = $("<button></button>").text("x");
  $newButton.addClass("button");

  // we'll add the text node as a child to our new element
  //newElem.appendChild(itemValue);

  $newButton.on("click", function() {
    this.parentNode.parentNode.removeChild(this.parentNode);
    removeItem(this.parentNode);
  });
  $newElem.append($newButton);

  $newElem.css("background-color", inputColor.value);
  $listOne = $("#listOne");
  $listOne.append($newElem);
  myItems.push(itemValue.toString());
  console.log("Adding this element: " + itemValue.toString());
 
  $("demo1a").css("display", "initial");
}

function saveItems() {
  let myItemsString = JSON.stringify(myItems);
  localStorage.setItem(myKey, myItemsString);
  console.log(myItems);
}

function removeItem(item) {
  // Split the string of innerHTML into the value + <button>
  var targetValue = item.innerHTML.split('<');
  //
  console.log("Removing the item: " + targetValue[0]);
  let index = jQuery.inArray(targetValue[0], myItems);
  console.log("Found item at index: " + index);

  // now we can remove the item from the array
  myItems.splice(index, 1);

  // then save the array to localStorage
  saveItems();

  // finally, we can remove it from the DOM
  $(item).remove();

}

$(document).ready(targetValueDom());
