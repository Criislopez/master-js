const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, name) {
    const position = nameList.indexOf(name)

    if(position !== -1) {
        console.log(true , position)
    } else {
        console.log(false)
    }
}

//Nombre encontrado
console.log(nameFinder(names, "Tony"))

//Nombre sin encontrar
console.log(nameFinder(names, "dcsdcsdfs"))
