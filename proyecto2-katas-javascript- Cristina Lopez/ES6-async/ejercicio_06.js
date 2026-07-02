//6.1
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5},
    {name: 'Maria Aranda Jimenez', score: 1},
    {name: 'Cristóbal Martínez Lorenzo', score: 6},
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const sumaScores = exams.reduce((accumulador, exam) => accumulador + exam.score, 0)

console.log(sumaScores);

//6.2

const filtrarAprobados = exams.filter((exam) => exam.score >= 5)

const sumaAprobados = filtrarAprobados.reduce((accumulador,filtrado) => accumulador + filtrado.score, 0)
console.log(sumaAprobados);

//6.3
const average = sumaScores/exams.length;

console.log(average);
