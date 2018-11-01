
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector("#nested .target");
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')
  const firstList = rankedLists[0]
  const secondList = rankedLists[1]

  let childrenFirst = firstList.children;

  for (let i = 0; i < childrenFirst.length; i++) {
    childrenFirst[i].innerHTML = (parseInt(childrenFirst[i].innerHTML) + n)
  }
  let childrenSecound = secondList.children;

  for (let i = 0; i < childrenSecound.length; i++) {
    childrenSecound[i].innerHTML = (parseInt(childrenSecound[i].innerHTML) + n)
  }
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}
  // childrenFirst.forEach(child => child.innerHTML = (parseInt(child.innerHTML) + n);
  // childrenSecound.forEach(child => child.innerHTML = (parseInt(child.innerHTML) + n);
