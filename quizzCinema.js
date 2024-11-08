const dataBtn = document.querySelector('#dataBtn');
const dataPara = document.getElementById('dataPara');

let displayData = false;

dataBtn.addEventListener("click", () => {
  displayData = !displayData;
  dataBtn.innerHTML = displayData ? "Hide DATA" : "Display DATA";
  dataPara.style.display = dataPara.style.display === "block" ? "none" : "block";
})

const movie1 = {
  title: "Forrest Gump",
  year: "1991",
  director: "Robert Zemeckis",
  genre: ["Drama", "Romance", "Comedy"],
  actors: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Mykelti Williamson"],
  boxOffice: "679,835,137$",
  synopsis:
    "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
};

const movie2 = {
  title: "The Green Mile",
  year: "2000",
  director: "Frank Darabont",
  genre: ["Drama", "Mystery", "Fantasy"],
  actors: ["Michael Clarke Duncan", "Tom Hanks", "David Morse", "Sam Rockwell"],
  boxOffice: "290,701,374$",
  synopsis:
    "Paul Edgecomb, the head of the block guards during the 1930's at the Cold Mountain Correctional Facility. Through his many years of watching men live and die Paul's faith and sanity has deteriorated. He is assigned to watch over John Coffey, a giant man convicted of murdering two little girls. But John acts more like a child than a cold hearted murderer. Edgecomb and other guards find themselves in a moral dilemma when they witness John accomplish healing miracles.",
};

const movie3 = {
  title: "Fight Club",
  year: "1999",
  director: "David Fincher",
  genre: ["Action", "Drama", "Thriller"],
  actors: ["Edward Norton", "Brad Pitt", "Helena Bonham Carter", "Jared Leto"],
  boxOffice: "100,820,947$",
  synopsis: "The first rule of fight club is you don't talk about fight club.",
};

const movie4 = {
  title: "Hancock",
  year: "2008",
  director: "Peter Berg",
  genre: ["Action", "Drama", "Super-Hero", "Comedy"],
  actors: ["Will Smith", "Charlize Theron", "Jason Bateman"],
  boxOffice: "624,234,272$",
  synopsis:
    "John Hancock (Will Smith) is a drunkard with superhuman powers, including supersonic flight, invulnerability, immortality, and super-strength. Although he uses his powers to rescue people and stop criminals, his activities inadvertently cause millions of dollars in property damage due to his constant intoxication and cynical attitude...",
};

const movie5 = {
  title: "Match Point",
  year: "2005",
  director: "Woody Allen",
  genre: ["Romance", "Drama", "Criminal", "Thriller"],
  actors: ["Jonathan Rhys-Meyers", "Scarlett Johansson", "Emily Mortimer"],
  boxOffice: "87,950,928$",
  synopsis:
    "Chris Wilton, a recently retired tennis professional, is taken on as an instructor at an upmarket club in London. He strikes up a friendship with a wealthy pupil, Tom Hewett, after discovering their common affinity for opera. Tom's older sister, Chloe, is smitten with Chris and the two begin dating. During a family gathering, Chris meets Tom's American fiancée, Nola Rice, and they are instantly attracted to each other. Tom's mother, Eleanor, does not approve of her son's relationship with Nola, a struggling actress, which is a source of tension in the family. Chloe encourages her father, Alec, to give Chris a job as an executive in one of his companies; he begins to be accepted into the family and marriage is discussed.",
};

let movies = [movie1, movie2, movie3, movie4, movie5];

const actor1 = {
  name: "Will Smith",
  age: 54,
  numberOfFilm: 34,
  movies: ["Seven Pounds", "I am legend", "Hancock", "I Robot", "Bad Boys"],
  country: "USA",
};

const actor2 = {
  name: "Helena Bonham Carter",
  age: 57,
  numberOfFilm: 51,
  movies: [
    "Fight club",
    "Alice in Wonderland",
    "Harry Potter and the Order of the Phoenix",
    "Planet of the Apes",
    "Cinderella"
  ],
  country: "USA",
};

const actor3 = {
  name: "Tom Hanks",
  age: 66,
  numberOfFilm: 80,
  movies: ["The Green Mile", "Forrest Gump", "Toy Story", "Sully", "Elvis"],
  country: "USA",
};

const actor4 = {
  name: "Jean Dujardin",
  age: 50,
  numberOfFilm: 25,
  movies: [
    "Brice de Nice",
    "La French",
    "The Wolf Of Wall Street",
    "Möbius",
    "OSS 117: Le Caire Nid d'espion"
  ],
  country: "France",
};

const actor5 = {
  name: "Charlize Theron",
  age: 47,
  numberOfFilm: 56,
  movies: [
    "Prometheus",
    "Mad Max: Fury Road",
    "Hancock",
    "Monster",
    "Atomic Blonde",
    "The Fate of the Furious",
  ],
  country: "USA",
};

const actors = [actor1, actor2, actor3, actor4, actor5];

const cinema = {
  movies,
  actors,
};


// 1) Dans quel 'movie' Jason Bateman a-t-il joué ?
const jBatemanMovie = movies
  .filter((movie) => movie.actors.includes("Jason Bateman"))
  .map((movie) => movie.title);
// console.log(jBatemanMovie);

document.querySelector("#reponse1").innerHTML = `Jason Bateman a joué dans le 'movie' ${jBatemanMovie}.`;


// 2) Quels 'movies' ont un ou des 'actors' en commun et quels 'actors' partagent le même 'movie' ?

//  Chercher TOUS les films de chaque acteur de 'actors' ou de la liste d'actors' d'un 'movie' (chercher Jeffrey Dean Morgan depuis 'favMovie' partout))
// rep : "Les films [.....] ont en commun cet acteur"

let allActorMoviesList= []
let allActorsInOneMovieList= []

for (let movi of movies) {
  movi.actors.map((lact) => {
   let allActorMovies = {
      aName: lact,
      aFilms: movi.title + ", " 
      + movies.filter((otherFilms) => otherFilms.title !== movi.title && otherFilms.actors.includes(lact)).map((film) => film.title).join(', ')
      // + actors.filter((otherActors) => (otherActors.name === lact) && (otherActors.movies.includes(movi.title))).map((acteur) => acteur.movies).join(', ')
    }
    // console.log("allActorMovies ==================== ", allActorMovies);
    return allActorMovies
  }).forEach((el) => el['aFilms'] !== (movi.title+ ", ") ? allActorMoviesList.push(el) : null);
}

// Chercher tous les acteurs de datas dans un film
// rep : "Ces acteurs ont ce film en commun"
for (let act of actors) {
  act.movies.map((mvTitle) => {
    let allActorsInOneMovie = {
      mTitle: mvTitle,
      mActors: act.name + ", " 
      // + movies.filter((film) => film.title === mvTitle).map((film) => film.actors).filter((actrr) => (actrr !== act.name)).join(', ') 
      +
      actors.filter((otherActor) => (otherActor.name !== act.name) && (otherActor.movies.includes(mvTitle))).map((actr) => actr.name).join(', ') 
    }
    // console.log("allActorsInOneMovie ==================== ", allActorsInOneMovie);
    return allActorsInOneMovie
  }).forEach((el) => el['mActors'] !== (act.name+ ", ") ?  allActorsInOneMovieList.push(el) : null);
}


// console.log("allActorMoviesList ::: ", allActorMoviesList);
// console.log("allActorsInOneMovieList ::: ", allActorsInOneMovieList);

const allActorMoviesListDISTINCT =  [...new Set(allActorMoviesList.map((n) => n.aName))].map((newA) => {
  return { acteur: allActorMoviesList.find((m) => m.aName === newA) }
});
// console.log("allActorMoviesListDISTINCT :::::::::: ", allActorMoviesListDISTINCT);

const allActorsInOneMovieListDISTINCT = [...new Set(allActorsInOneMovieList.map((n) => n.mTitle))].map((newM) => {
  return { movie: allActorsInOneMovieList.find((m) => m.mTitle === newM) }
});
// console.log("allActorsInOneMovieListDISTINCT :::::::::: ", allActorsInOneMovieListDISTINCT);


const displayResponse2 = (arr, arr2) => {
  let resp2 = "";
  for (let val of arr) {
    resp2 += `${val.movie.mTitle} a pour acteurs en commun ${val.movie.mActors}. <br>`
  }
  for (let val2 of arr2) {
    resp2 += `${val2.acteur.aName} joue dans les films ${val2.acteur.aFilms}. <br>`
  }
  return resp2;
}

document.querySelector(
  "#reponse2"
).innerHTML = displayResponse2(allActorsInOneMovieListDISTINCT, allActorMoviesListDISTINCT);


// 3) Donne la somme des âges qu'avaient actor1 et actor3 en lors de l'année de sortie de movie3.

const currenntYear = new Date().getFullYear();
const minusYears = currenntYear - movie3.year;

document.querySelector("#reponse3").innerHTML = `L'année de la sortie de ${movie3.title} en ${movie3.year}, ${actor1.name} avait ${actor1.age - minusYears} ans et
  ${actor3.name} en avait ${actor3.age - minusYears} pour une somme de ${(actor1.age - minusYears) + (actor3.age - minusYears)}.`;


// 4) Donne la liste des actors de 'country' USA de moins de 55 ans.

const actorsUS = actors.filter((actor) => actor.country === "USA");
// console.log(actorsUS);

document.querySelector("#reponse4").innerHTML = `Les acteurs de moins de 55 ans dont le 'country' est USA sont
  ${actorsUS.filter((actor) => actor.age < 55).map((actor) => actor.name).join(" et ")}.`;


// 5) Quels sont les titres, les box-offices ainsi que les synopsis des 'movies' dans lesquels Helena Bonham Carter et Tom Hanks ont joué ?

const hanksHBCMovies = movies.filter(
  (list) =>
    list.actors.includes("Helena Bonham Carter") ||
    list.actors.includes("Tom Hanks")
);
// console.log(hanksHBCMovies);

const displayReponse5 = (arr) => {
  let resp5 = "";
  for (let i = 0; i < arr.length; i++) {
    resp5 += `${hanksHBCMovies[i].title} <br> ${hanksHBCMovies[i].boxOffice} <br> Synopsis :<br> ${hanksHBCMovies[i].synopsis}<br>******<br>`;
  }
  return resp5;
};

document.querySelector("#reponse5").innerHTML = displayReponse5(hanksHBCMovies);


// 6) Convertis en € les revenus au box-office de chaque movie.
const dollarToEuroConverter = (dollar) => {
  return (
    parseInt(dollar.replace(",", "").replace(",", "").replace(",", "").replace("$", "")) * 0.91
    ).toLocaleString();
};

for (let mv of movies) {
  document.querySelector("#reponse6").innerHTML += `${mv.title} ::: ${mv.boxOffice} ==> ${dollarToEuroConverter(mv.boxOffice)} € <br>`;
}
// console.log(dollarToEuroConverter(movie2.boxOffice));


// 7) Donne la liste des 'actors' classés par leurs nombres de films dans l'ordre décroissant.

let actorsDesc = [];

actorsDesc = [
  ...actors.sort((act1, act2) =>
    act1.numberOfFilm < act2.numberOfFilm
      ? 1
      : act1.numberOfFilm > act2.numberOfFilm
      ? -1
      : 0
  ),
];
// console.log(actorsDesc);

const displayResp6 = (arr) => {
  let resp6 = "";
  arr.map((el) => (resp6 += `${el.name} avec ${el.numberOfFilm} films. <br>`));
  return resp6;
};

document.querySelector("#reponse7").innerHTML = displayResp6(actorsDesc);

// 8) Ajoute ton film préféré à la liste 'movies'.

const favMovie = {
  title: "Watchmen",
  year: "2009",
  director: "Zack Snyder",
  genre: ["Super-hero", "Drama", "Action", "Thriller", "Sci-Fi"],
  actors: ["Jackie Earle Haley", "Malin Åkerman", "Jeffrey Dean Morgan", "Patrick Wilson", "Billy Crudup", "Carla Gugino"],
  boxOffice: "185,400,000$",
  synopsis:
  `"Watchmen" is set in an alternate 1985 America in which costumed superheroes are part of the fabric of everyday society, and the "Doomsday Clock" -- which charts the USA's tension with the Soviet Union -- is permanently set at five minutes to midnight. When one of his former colleagues is murdered, the masked vigilante Rorschach, washed up but determined, sets out to uncover a plot to kill and discredit all past and present superheroes. As he reconnects with his former crime-fighting legion -- a ragtag group of retired superheroes, only one of whom has true powers -- Rorschach glimpses a wide-ranging and disturbing conspiracy with links to their shared past and catastrophic consequences for the future. Their mission is to watch over humanity... but who is watching the Watchmen ?`,
};

movies.push(favMovie);

document.querySelector("#reponse8").innerHTML = `${movies[5].title} <br> ${movies[5].year} <br>${movies[5].director} <br>${movies[5].genre.join(', ')}. <br>${movies[5].actors.join(', ')}. <br>${movies[5].boxOffice} <br>${movies[5].synopsis} <br>`

// console.log("movies :: ", movies);


// 9) Quel 'actor' a joué dans 'Toy Story' ? Donne son nom.
const actorToyStory = actors.find((actor) => actor.movies.includes('Toy Story'));
console.log(actorToyStory);

document.querySelector("#reponse9").innerHTML += `${(actorToyStory.name).split(' ')[1]}, ${actorToyStory.name}.`;


// 10) Affiche dans la console ou dans le DOM, la phrase :
// "(nom du 'movie') est un film de (genre 1, 2 ou 3 du 'movie') sorti en (année du 'movie'),
// réalisé par (réalisateur du 'movie') et interprété par (acteur 1 du 'movie'),  (acteur 2 du 'movie') et (acteur 3 du 'movie'), il a engrangé (box-office du 'movie') au box-office.
// Synopsis : (synopsis du 'movie')

document.querySelector("#reponse10").innerHTML = `${favMovie.title} est un film de ${favMovie.genre.slice(0, 3).join(', ')} sorti en ${favMovie.year},
  réalisé par ${favMovie.director} et interprété par ${favMovie.actors.slice(0, 2).join(', ')} et ${favMovie.actors[2]}.
  Il a engrangé ${favMovie.boxOffice} au box-office. <br>
  Synopsis : ${favMovie.synopsis}`
