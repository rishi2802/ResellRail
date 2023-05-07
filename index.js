var fwdbut = document.getElementById("fwdbut");
var spin = document.getElementById("spinner");
var but1 = document.getElementById("h1but");
var but2 = document.getElementById("h2but");
var but3 = document.getElementById("h3but");
var waitxt = document.getElementById("waittxt");
var wait = document.getElementById("wait");
var copied = document.getElementById("copied");
var fwd = document.getElementById("fwd");
var line = document.getElementById("line");
var contin = document.getElementById("continue");
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var fwdbtn = document.getElementById("fwdbtn");
var i1 = document.getElementById("i1");
var i2 = document.getElementById("i2");
var i3 = document.getElementById("i3");
contin.style.visibility = "hidden";
function copy() {
  // Get the text field
  var copyText = document.getElementById("emailcopy");
  console.log("HI");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  but1.style.visibility = "visible";
  but1.style.background = "#344054";
  fwdbut.style.visibility = "visible";
  fwd.style.textalign = "center";
  i1.style.visibility = "visible";
  copied.style.visibility = "visible";
  document.getElementById("but2").style.borderColor = "#344054";
  fwd.style.color = "black";
  fwd.style.fontWeight = "700";
  line.style.color = "red";
  p1.style.color = "#667085";
}
function hidestuff() {
  var fwdbut = document.getElementById("fwdbut");
  var spin = document.getElementById("spinner");
  var but1 = document.getElementById("h1but");
  var but2 = document.getElementById("h2but");
  var but3 = document.getElementById("h3but");
  var waitxt = document.getElementById("waittxt");

  var copied = document.getElementById("copied");
  //var buto2=document.getElementById("but2");
  var buto3 = document.getElementById("but3");
  copied.style.visibility = "hidden";
  //var tick1=document.getElementById("tick1");
  fwdbut.style.visibility = "hidden";
  spin.style.visibility = "hidden";
  but1.style.visibility = "hidden";
  but2.style.visibility = "hidden";
  but3.style.visibility = "hidden";
  waitxt.style.visibility = "hidden";
  i1.style.visibility = "hidden";

  //buto2.style.visibility = 'hidden';
  //waitxt.style.visibility = 'hidden';
  //var but3=document.getElementById("h3but");
}
function show() {
  fwdbut.style.color = "white";
  fwdbut.style.background = "#344054";
  but2.style.visibility = "visible";
  but2.style.background = "#344054";
  waitxt.style.visibility = "visible";
  spin.style.visibility = "visible";
  wait.style.color = "black";
  wait.style.fontWeight = "700";
  i2.style.visibility = "visible";
  copied.style.visibility = "hidden";
  document.getElementById("but3").style.borderColor = "#344054";
  p2.style.color = "#667085";
  setTimeout(() => {
    const box = document.getElementById("box");

    // 👇️ hides element (still takes up space on the page)
    spin.style.visibility = "hidden";
    but3.style.visibility = "visible";
    but3.style.background = "#344054";
    i2.style.visibility = "visible";
    contin.style.visibility = "visible";
  }, 5000);
}
