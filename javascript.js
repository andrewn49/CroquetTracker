function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
    tablinks[i].style.color = "white";
  }

  if (pageName == "white") {
    elmnt.style.color = "black";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.backgroundColor = color;
}

function playgame() {
  const players = [];
  if (document.getElementById("ck1").checked) {
    players.push("1");
  }
  if (document.getElementById("ck2").checked) {
    players.push("2");
  }
  if (document.getElementById("ck3").checked) {
    players.push("3");
  }
  if (document.getElementById("ck4").checked) {
    players.push("4");
  }
  if (document.getElementById("ck5").checked) {
    players.push("5");
  }
  if (document.getElementById("ck6").checked) {
    players.push("6");
  }
  moveOn(players);
}

function moveOn(players) {
  var x = document.getElementsByClassName("gameplay");
  var y = document.getElementsByClassName("start");
  x[0].style.display = "initial";
  y[0].style.display = "none";
  if (players.includes("1") == true) {
    var a = document.querySelectorAll("[id='bluelnk']");
    for (var i = 0; i < a.length; i++) {
      a[i].removeAttribute("disabled");
    }
  }
  if (players.includes("2") == true) {
    var a = document.querySelectorAll("[id='redlnk']");
    for (var i = 0; i < a.length; i++) {
      a[i].removeAttribute("disabled");
    }
  }
  if (players.includes("3") == true) {
    var a = document.querySelectorAll("[id='blacklnk']");
    for (var i = 0; i < a.length; i++) {
      a[i].removeAttribute("disabled");
    }
  }
  if (players.includes("4") == true) {
    var a = document.querySelectorAll("[id='yellowlnk']");
    for (var i = 0; i < a.length; i++) {
      a[i].removeAttribute("disabled");
    }
  }
  if (players.includes("5") == true) {
    var a = document.querySelectorAll("[id='whitelnk']");
    for (var i = 0; i < a.length; i++) {
      a[i].removeAttribute("disabled");
    }
  }
  if (players.includes("6") == true) {
    var a = document.querySelectorAll("[id='greenlnk']");
    for (var i = 0; i < a.length; i++) {
      a[i].removeAttribute("disabled");
    }
  }
  $(".me").prop("disabled", true);
}

function hoop(color) {
  $("#" + color)
    .find(":checkbox")
    .prop("checked", false);
}
