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

function removeDuplicates(list) {
  // Completar
    const result = []
    for (let i = 0; i < list.length; i++) {
    if (!result.includes(list[i])) {
      result.push(list[i])
        }
    }

  return result
}

console.log(removeDuplicates(duplicates))