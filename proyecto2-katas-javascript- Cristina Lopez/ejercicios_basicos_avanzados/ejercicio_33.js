const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};


function getCapital(country) {
  for (const capital in capitals) {
    if (capital === country ) {
        return capitals[capital]
    }
  }
}

console.log(getCapital("Spain"));
