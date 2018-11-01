
function getFirstSelector(selector) {
return  document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector(".target")
}


function deepestChild() {
  return document.querySelector("#grand-node div div div div")
}

function increaseRankBy() {

  const lis = document.querySelectorAll(".ranked-list")

  for (let i = 0; i < lis.length; i++) {
  lis[i].innerHTML = (i + 1).toString();
  }
}
