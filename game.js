var game1024 = false;
function getRandomNumber() {
  return parseInt(Math.random() * 4) % 2 == 0 ? 2 : 4;
}

function setRandomBox(o = null, b = false) {
  let isEveryBoxNotEmtpy = true;
  for (const r of document.querySelectorAll(".row")) {
    for (const c of r.children) {
      if (c.children[0].innerText == "") {
        isEveryBoxNotEmtpy = false;
        break;
      }
    }
    if (!isEveryBoxNotEmtpy) {
      break;
    }
  }
  if (isEveryBoxNotEmtpy) {
    return null;
  }
  let i;
  let j;
  do {
    i = parseInt((Math.random() * 4));
    j = parseInt((Math.random() * 4));
  } while (o != null && Object.hasOwnProperty.call(o, "x") && Object.hasOwnProperty.call(o, "y") && i == o.y && j == o.x);
  let ro = { x: j, y: i }
  let startRow = document.querySelectorAll(".row")[i];
  let startBox = startRow.querySelectorAll(".col")[j];
  if (startBox.children[0].innerText != "") {
    return setRandomBox(ro, b);
  } else {
    startBox.children[0].innerText = b ? getRandomNumber() : 2;
  }
  return ro;
}

function doArrowLeft() {
  let movements = false;
  for (let i = 1; i < 4; i++) {
    for (const box of document.querySelectorAll(`.c${i}`)) {
      if (box.children[0].innerText == "") {
        let r = box.parentElement;
        for (let j = i; j < 4; j++) {
          if (r.children[j].children[0].innerText != "") {
            movements = true;
            box.children[0].innerText = r.children[j].children[0].innerText;
            r.children[j].children[0].innerText = "";
            break;
          }
        }
      }
    }
  }
  for (let i = 1; i < 4; i++) {
    for (const box of document.querySelectorAll(`.c${i}`)) {
      if (box.nextElementSibling) {
        if (box.nextElementSibling.children[0].innerText != "" && (parseInt(box.nextElementSibling.children[0].innerText) == parseInt(box.children[0].innerText))) {
          movements = true;
          box.children[0].innerText = parseInt(box.children[0].innerText) * 2;
          box.nextElementSibling.children[0].innerText = "";
        }
      }
    }
  }
  for (let i = 1; i < 4; i++) {
    for (const box of document.querySelectorAll(`.c${i}`)) {
      if (box.children[0].innerText == "") {
        let r = box.parentElement;
        for (let j = i; j < 4; j++) {
          if (r.children[j].children[0].innerText != "") {
            movements = true;
            box.children[0].innerText = r.children[j].children[0].innerText;
            r.children[j].children[0].innerText = "";
            break;
          }
        }
      }
    }
  }
  return movements;
}


//fix this arrow up and fix arrow down
function doArrowUp() {
  let movements = false;
  for (let i = 1; i < 4; i++) {
    let r = document.querySelector(`.r${i}`);
    for (let j = 0; j < r.children.length; j++) {
      let nR = r.nextElementSibling;
      if (r.children[j].children[0].innerText == "") {
        while (nR.children[j].children[0].innerText == "" && nR.nextElementSibling) {
          nR = nR.nextElementSibling;
        }
        if (nR && nR.children[j].children[0].innerText != "") {
          movements = true;
          r.children[j].children[0].innerText = nR.children[j].children[0].innerText;
          nR.children[j].children[0].innerText = "";
        }
      }
    }
  }
  for (let i = 1; i < 4; i++) {
    let r = document.querySelector(`.r${i}`);
    let nR = r.nextElementSibling;
    if (nR) {
      for (let j = 0; j < r.children.length; j++) {
        if (r.children[j].children[0].innerText != "" && parseInt(r.children[j].children[0].innerText) == parseInt(nR.children[j].children[0].innerText)) {
          movements = true;
          r.children[j].children[0].innerText = parseInt(r.children[j].children[0].innerText) * 2;
          nR.children[j].children[0].innerText = "";
        }
      }
    }
  }
  for (let i = 1; i < 4; i++) {
    let r = document.querySelector(`.r${i}`);
    for (let j = 0; j < r.children.length; j++) {
      let nR = r.nextElementSibling;
      if (r.children[j].children[0].innerText == "") {
        while (nR.children[j].children[0].innerText == "" && nR.nextElementSibling) {
          nR = nR.nextElementSibling;
        }
        if (nR && nR.children[j].children[0].innerText != "") {
          movements = true;
          r.children[j].children[0].innerText = nR.children[j].children[0].innerText;
          nR.children[j].children[0].innerText = "";
        }
      }
    }
  }
  return movements;
}

function doArrowRight() {
  let movements = false;
  for (let i = 4; i > 1; i--) {
    for (const box of document.querySelectorAll(`.c${i}`)) {
      if (box.children[0].innerText == "") {
        let r = box.parentElement;
        for (let j = i - 2; j >= 0; j--) {
          if (r.children[j].children[0].innerText != "") {
            movements = true;
            box.children[0].innerText = r.children[j].children[0].innerText;
            r.children[j].children[0].innerText = "";
            break;
          }
        }
      }
    }
  }
  for (let i = 4; i > 0; i--) {
    for (const box of document.querySelectorAll(`.c${i}`)) {
      if (box.previousElementSibling) {
        if (box.previousElementSibling.children[0].innerText != "" && (parseInt(box.previousElementSibling.children[0].innerText) == parseInt(box.children[0].innerText))) {
          movements = true;
          box.children[0].innerText = parseInt(box.children[0].innerText) * 2;
          box.previousElementSibling.children[0].innerText = "";
        }
      }
    }
  }
  for (let i = 4; i > 1; i--) {
    for (const box of document.querySelectorAll(`.c${i}`)) {
      if (box.children[0].innerText == "") {
        let r = box.parentElement;
        for (let j = i - 2; j >= 0; j--) {
          if (r.children[j].children[0].innerText != "") {
            movements = true;
            box.children[0].innerText = r.children[j].children[0].innerText;
            r.children[j].children[0].innerText = "";
            break;
          }
        }
      }
    }
  }
  return movements;
}

//fix this arrow down and fix arrow up
function doArrowDown() {
  let movements = false;
  for (let i = 4; i > 1; i--) {
    let r = document.querySelector(`.r${i}`);
    for (let j = 0; j < r.children.length; j++) {
      let nR = r.previousElementSibling;
      if (r.children[j].children[0].innerText == "") {
        while (nR.children[j].children[0].innerText == "" && nR.previousElementSibling) {
          nR = nR.previousElementSibling;
        }
        if (nR && nR.children[j].children[0].innerText != "") {
          movements = true;
          r.children[j].children[0].innerText = nR.children[j].children[0].innerText;
          nR.children[j].children[0].innerText = "";
        }
      }
    }
  }
  for (let i = 4; i > 1; i--) {
    let r = document.querySelector(`.r${i}`);
    let nR = r.previousElementSibling;
    if (nR) {
      for (let j = 0; j < r.children.length; j++) {
        if (r.children[j].children[0].innerText != "" && parseInt(r.children[j].children[0].innerText) == parseInt(nR.children[j].children[0].innerText)) {
          movements = true;
          r.children[j].children[0].innerText = parseInt(r.children[j].children[0].innerText) * 2;
          nR.children[j].children[0].innerText = "";
        }
      }
    }
  }
  for (let i = 4; i > 1; i--) {
    let r = document.querySelector(`.r${i}`);
    for (let j = 0; j < r.children.length; j++) {
      let nR = r.previousElementSibling;
      if (r.children[j].children[0].innerText == "") {
        while (nR.children[j].children[0].innerText == "" && nR.previousElementSibling) {
          nR = nR.previousElementSibling;
        }
        if (nR && nR.children[j].children[0].innerText != "") {
          movements = true;
          r.children[j].children[0].innerText = nR.children[j].children[0].innerText;
          nR.children[j].children[0].innerText = "";
        }
      }
    }
  }
  return movements;
}

function gameOver() {
  let gameOver = true;
  for (const box of document.querySelectorAll(".col")) {
    if (box.children[0].innerText == "") {
      gameOver = false;
    } else if (!game1024 && parseInt(box.children[0].innerText) == 1024) {
      game1024 = true;
      document.getElementById("modal-container").style.display = "flex";
      document.getElementById("msg").innerText = "WINNER WINNER CHICKEN DINER";
    }
  }
  return gameOver;
}

function windowKeyDownEvent(e) {
  let setRandomBoxB = false;
  if (game1024) {
    document.getElementById("modal-container").style.display = "none";
  }
  switch (e.keyCode) {
    case 37:
      setRandomBoxB = doArrowLeft();
      break;

    case 38:
      setRandomBoxB = doArrowUp();
      break;

    case 39:
      setRandomBoxB = doArrowRight();
      break;

    case 40:
      setRandomBoxB = doArrowDown();
      break;
  }

  if (setRandomBoxB && !gameOver()) {
    setRandomBox();
    setColors();
  } else if (gameOver()) {
    document.getElementById("modal-container").style.display = "flex";
    document.getElementById("msg").innerText = "YOU LOOSE :(";
  }
}

function setColors() {
  for (const box of document.querySelectorAll(".col")) {
    switch (parseInt(box.children[0].innerText)) {
      case 0b10:
        box.style.backgroundColor = "#8cc7e9";
        break;
      
      case 0b100:
        box.style.backgroundColor = "#8cade9";
        break;
      
      case 0b1000:
        box.style.backgroundColor = "#8d8ce9";
        break;
      
      case 0b10000:
        box.style.backgroundColor = "#b88ce9";
        break;
      
      case 0b100000:
        box.style.backgroundColor = "#db8ce9";
        break;
      
      case 0b1000000:
        box.style.backgroundColor = "#e98cc8";
        break;
      
      case 0b10000000:
        box.style.backgroundColor = "#e98c95";
        break;
      
      case 0b100000000:
        box.style.backgroundColor = "#e9d18c";
        break;
      
      case 0b1000000000:
        box.style.backgroundColor = "#d6e98c";
        break;
      
      case 0b1000000000:
        box.style.backgroundColor = "#8de98c";
        break;

      case 0b10000000000:
        box.style.backgroundColor = "#dee124";
        break;

      case 0b100000000000:
        box.style.backgroundColor = "#ff6060";
        break;

      default:
        box.style.backgroundColor = "#8ce9e5";
        break;
      
    }
  }
}

function initializeControls() {
  window.addEventListener("keydown", windowKeyDownEvent);
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    initializeControls();
    setRandomBox(setRandomBox());
  }
};