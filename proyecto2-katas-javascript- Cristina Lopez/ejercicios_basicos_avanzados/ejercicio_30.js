const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

const metal = [];
const rock = [];
const country = [];
const pop = [];
const grunge = [];

for(const song of tracks){
    if(song.genre == "Metal"){
        metal.push(song.title)
    } else if(song.genre == "Rock"){
        rock.push(song.title)
    } else if(song.genre == "Pop"){
        pop.push(song.title)
    } else if(song.genre == "Grunge"){
        grunge.push(song.title)
    }else {
        console.log("Error")
    }
}

const newTracks = [
    {Metal: metal,
        Rock: rock,
        Country: country,
        Pop: pop,
        Grunge: grunge
    }
]

console.log(newTracks)
console.log(JSON.stringify(newTracks,null,2));
