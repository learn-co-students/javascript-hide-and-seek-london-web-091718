function getFirstSelector(selector) {
  return document.querySelector(selector)
}

const nestedTarget = () => document.querySelector('#nested .target')

const deepestChild = () => document.querySelector('#grand-node div div div div')

function increaseRankBy(n) {
  const list = [...document.querySelectorAll('.ranked-list')]
  for (const item of list) {
    for (const number of [...item.children]) {
      number.innerHTML = parseInt(number.innerHTML) + n
    }
  }
}
