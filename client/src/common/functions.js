export const shuffleList = (list) => {
  for (var i = list.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = list[i];
    list[i] = list[j];
    list[j] = temp;
  }
  return list;
};

export const reverseObjectList = (list) => {
  console.log(list);
  list.sort((a, b) => (a.title > b.title ? 1 : -1));
  list.reverse((a, b) => (a.title > b.title ? 1 : -1));
};

export const sortObjectList = (list) => {
  console.log(list);
  list.sort((a, b) => (a.title > b.title ? 1 : -1));
};
