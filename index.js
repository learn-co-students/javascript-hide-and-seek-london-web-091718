function getFirstSelector(selector){
  return document.querySelector(selector)
}


function nestedTarget(){
  return document.querySelector('#nested .target')
}


const deepestChild = () => document.querySelector('#grand-node div div div div')



function increaseRankBy(n) {
  const list = [...document.querySelectorAll('.ranked-list')]
  for (const item of list) {

    for (const number of [...item.children]) {
      debugger
      number.innerHTML = parseInt(number.innerHTML) + n
    }
  }
}
