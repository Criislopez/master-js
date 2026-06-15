const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1963 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(xMen) {
    xMen.sort((a,b) => a.year - b.year);
    return(xMen[0]);
}

console.log(`El xMen más antiguo es: ${findOldestXMen(xMen.name)}, que apareció en el año ${findOldestXMen(xMen.year)}`);
