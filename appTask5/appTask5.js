
var buttontask = $("#buttontask");
var task = $("#task");
var list1 = $("#list1");
var Delete = $("#delete");


var ItemKey = "Task Values";
var myItems = [];

let contactButton = $('#contact');
let form = $('#popup');
let confirm = $('#confirm')

$(document).ready(function () {
    Contact();
    Local();
    Local2();
    console.log("onload");
})

function Confirmation() {
    $('#submit').on('submit', function () {
        if (confirm.css('display') === 'none') {
            confirm.css('display', 'initial');
            console.log("submit");
        }        
    });
};
$('#submit').trigger('submit');
Confirmation();

function Contact() {
    $('#contact').on('click', function () {
        if (form.css("display") == "block") {
            form.css("display", "none")
        }
        else {
            form.css("display", "block")
        }
    });
}


function Local() { //Task button
    if (localStorage.getItem(ItemKey) !== null) {
        let myItemString = localStorage.getItem(ItemKey);
        myItems = JSON.parse(myItemString);
        $(myItems).each(function () {
            createItem(this);
        })
    }

    buttontask.on('click', function () {
        var curVal = $("#task").val();
        createItem(curVal);
        myItems.push(curVal);
        saveItems();
    });
};



function createItem(itemValue) { //Task button
    var newE = $('<li></li>').text(itemValue)
    var buttondelete = $('<div>X</div>');

    list1.append(newE);
    Delete.append(buttondelete);

    newE.on('click', function () {
        removeItem(this);
        buttondelete.remove();
    });

    buttondelete.on('click', function () {
        this.remove();
        newE.remove();
        removeItem(this);
    });



    buttondelete.addClass('delete');
};

function removeItem(item) { //Task button
    let index = $(item).index();
    myItems.splice(index, 1);
    saveItems();
    $(item).remove();
}



var buttondesc = $("#buttondesc"); //Desc button
var list2 = $("#list2");
var desc = $("#desc");
var Delete1 = $("#delete1");

var ItemKey2 = "Desc Values";
var myItems2 = [];

function Local2() { //Desc button
    if (localStorage.getItem(ItemKey2) !== null) {
        let myItemString2 = localStorage.getItem(ItemKey2);
        myItems2 = JSON.parse(myItemString2);
        $(myItems2).each(function () {
            createItem2(this);
        })
    }

    buttondesc.on('click', function () {
        var curVal2 = $("#desc").val();
        createItem2(curVal2);
        myItems2.push(curVal2);
        saveItems2();
    });
};



function createItem2(itemValue2) { //Desc button
    var newElem = $('<li></li>').text(itemValue2)
    var buttondelete1 = $('<div>X</div>');

    Delete1.append(buttondelete1);

    buttondelete1.on('click', function () {
        this.remove();
        newElem.remove();
        removeItem2(this);
    });

    newElem.on('click', function () {
        buttondelete1.remove();
        removeItem2(this);
    });

    list2.append(newElem);

    buttondelete1.addClass('delete1');
};

function removeItem2(item2) { //Desc button
    let index2 = $(item2).index();
    myItems2.splice(index2, 1);
    saveItems2();
    $(item2).remove();
}


function saveItems() { //Task button
    var myItemString = JSON.stringify(myItems)
    localStorage.setItem(ItemKey, myItemString)
}

function saveItems2() { //Desc button
    var myItemString2 = JSON.stringify(myItems2)
    localStorage.setItem(ItemKey2, myItemString2)
}
