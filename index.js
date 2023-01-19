var hr = 00;
var min = 00;
var sec = 00;
var timer = false;

var list = document.getElementById("list");

function start() {
  timer = true;
  stopwatch();
}

function stop() {
  timer = false;
}

function reset() {
  timer = false;
  hr = 00;
  min = 00;
  sec = 00;
  sec < 10
    ? (document.getElementById("sec").innerHTML = "0" + sec)
    : (document.getElementById("sec").innerHTML = sec);

  min < 10
    ? (document.getElementById("min").innerHTML = "0" + min)
    : (document.getElementById("min").innerHTML = min);

  hr < 10
    ? (document.getElementById("hr").innerHTML = "0" + hr)
    : (document.getElementById("hr").innerHTML = hr);

  // console.log(document.getElementById("list").length);
  list.innerHTML = "";
}

function lap() {
  let add = document.createElement("p");
  let secCount = 0;
  let minCount = 0;
  let hrCount = 0;
  sec < 10 ? (secCount = "0" + sec) : (secCount = sec);

  min < 10 ? (minCount = "0" + min) : (minCount = min);

  hr < 10 ? (hrCount = "0" + hr) : (hrCount = hr);
  add = hrCount + ":" + minCount + ":" + secCount;
  let li = document.createElement("li");
  li.append(add);
  list.append(li);
  li.style.background = "#e0e0e0";
  (li.style.boxShadow = "20px 20px 60px #bebebe"), "-20px -20px 60px #ffffff;";
  li.style.width = "80%";
  li.style.height = "2rem";
  li.style.padding = "12px";
  list.style.marginTop = "10rem";
  li.style.fontSize = "36px";
  li.style.textAlign = "center";
  li.style.color = "grey";
  li.style.listStyle = "none";
  li.style.marginTop = "1rem";
  li.style.marginLeft = "3rem";
  console.log(Number(list).length);
}

function stopwatch() {
  if (timer === true) {
    sec = sec + 1;

    if (sec === 60) {
      min = min + 1;
      sec = 0;
    }
    if (min === 60) {
      hr = hr + 1;
      sec = 0;
      min = 0;
    }
    sec < 10
      ? (document.getElementById("sec").innerHTML = "0" + sec)
      : (document.getElementById("sec").innerHTML = sec);

    min < 10
      ? (document.getElementById("min").innerHTML = "0" + min)
      : (document.getElementById("min").innerHTML = min);

    hr < 10
      ? (document.getElementById("hr").innerHTML = "0" + hr)
      : (document.getElementById("hr").innerHTML = hr);

    setTimeout("stopwatch()", 1000);
    document.getElementById("start").disabled = true;
  } else document.getElementById("start").disabled = false;
}
