const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  let notDuplicates = [];
  for (element of duplicates) {
    if (!notDuplicates.includes(element)) {
      notDuplicates.push(element)
    }
  }
  console.log(notDuplicates);
}

removeDuplicates(duplicates);