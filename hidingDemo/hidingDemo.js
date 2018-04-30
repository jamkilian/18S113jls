var selection = 0;

function makeItem(x) {
  // if selection is secretly "demo2a"
  console.log(x);
  if (selection === 0) {
  $("#demo2a").css("display", "none");
  $("#demo1a").css("display", "none");
  $("#demo1b").css("display", "initial");
  } else if (selection === 1) {
  $("#demo2a").css("display", "initial");
  $("#demo1a").css("display", "none");
  $("#demo1b").css("display", "none");
  }
 selection += 1;
}


