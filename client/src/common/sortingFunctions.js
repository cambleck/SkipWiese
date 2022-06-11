export function shuffleList(list) {
  for (var i = list.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
  return list;
}

export function reverseObjectList(list) {
  list.sort((a, b) => (a.title > b.title ? 1 : -1));
  list.reverse((a, b) => (a.title > b.title ? 1 : -1));
}

export function sortObjectList(list) {
  list.sort((a, b) => (a.title > b.title ? 1 : -1));
}
