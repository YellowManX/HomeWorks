let input = document.getElementById("text");
let result = document.getElementById("result");

function getResult() {
  let firstArr = input.value.split(" ");
  if (firstArr[1] === "+") {
    result.textContent = `${+firstArr[0] + +firstArr[2]}`;
  } else if (firstArr[1] === "-") {
    result.textContent = `${+firstArr[0] - +firstArr[2]}`;
  } else if (firstArr[1] === "*") {
    result.textContent = `${+firstArr[0] * +firstArr[2]}`;
  } else if (firstArr[1] === "/") {
    result.textContent = `${+firstArr[0] / +firstArr[2]}`;
  }
}

// Второе задание

let url = document.getElementById("url");
let urlResult = document.getElementById("url-result");

function getUrlInfo() {
  let protocol = url.value.split("://");
  let domen = url.value.split("/");
  let path = url.value.split(".org");
  urlResult.textContent = `Протокол: ${protocol[0]}; Домен: ${domen[2]}; Путь: ${path[1]}`;
}
