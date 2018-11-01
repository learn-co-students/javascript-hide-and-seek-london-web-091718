function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list')
  const firstList = lists[0]
  const secondList = lists[1]
  let childrenFirst = firstList.children

  for (let i = 0; i < childrenFirst.length; i++) {
    childrenFirst[i].innerHTML = (parseInt(childrenFirst[i].innerHTML) + n)
  }

   let childrenSecond = secondList.children

  for (let i = 0; i < childrenSecond.length; i++) {
    childrenSecond[i].innerHTML = (parseInt(childrenSecond[i].innerHTML) + n)
  }
}



function deepestChild() {
  return document.querySelector('div#grand-node div div div div')
}
