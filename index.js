function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let lists = document.querySelectorAll('.ranked-list');
  for (let i = 0; i < lists.length; i++) {
    console.log(lists[i].children)
    for (let j = 0; j < lists[i].children.length; j++) {
      // console.log(parseInt(lists[i].children[j].innerText))
      // why the fuck doesnt' innerText work?
      lists[i].children[j].innerHTML = parseInt(lists[i].children[j].innerHTML) + n;
    }
  }
}

function deepestChild() {
  let gd = document.querySelector('#grand-node');
  function hasChild(parent){
    return parent.children[0] != null;
  }
  while (hasChild(gd)) {
    gd = gd.children[0];
  }
  return gd;
}
