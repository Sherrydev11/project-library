const movies = [
  {
    title: 'Inception',
    director: 'Christopher Nolan',
    year: 2010,
    genre: 'sci-fi',
    description:
      'A mind-bending exploration of dreams within dreams, directed by Christopher Nolan.',
    image: './movie-images/inception-movie.jpg'
  },
  {
    title: 'Get Out',
    director: 'Jordan Peele',
    year: 2017,
    genre: 'horror',
    description:
      'A social horror film that blends suspense with sharp commentary on race and society.',
    image: './movie-images/get-out-movie.jpeg'
  },
  {
    title: 'Back to the Future',
    director: 'Robert Zemeckis',
    year: 1985,
    genre: 'sci-fi',
    description:
      'A classic time-travel adventure with humor, starring Michael J. Fox.',
    image: './movie-images/back-to-future.jpg'
  },
  {
    title: 'The Exorcist',
    director: 'William Friedkin',
    year: 1973,
    genre: 'horror',
    description:
      'One of the scariest films of all time, revolving around demonic possession.',
    image: './movie-images/the-exorcist.jpg'
  },
  {
    title: 'The Hangover',
    director: 'Todd Phillips',
    year: 2009,
    genre: 'comedy',
    description:
      'A hilarious tale of a wild night gone wrong, featuring unforgettable misadventures.',
    image: './movie-images/the-hangover.jpeg'
  },
  {
    title: 'The Matrix',
    director: 'Lana Wachowski, Lilly Wachowski',
    year: 1999,
    genre: 'sci-fi',
    description:
      'A groundbreaking sci-fi action film about reality, artificial intelligence, and rebellion.',
    image: './movie-images/matrix.jpg'
  },
  {
    title: "Shaun of the Dead",
    director: 'Edgar Wright',
    year: 2004,
    genre: 'horror',
    description:
      'A man\'s uneventful life takes a turn when he has to lead his friends and family through a zombie apocalypse.',
    image: './movie-images/shaun-of-the-dead.jpg'
  },
  {
    title: 'A Quiet Place',
    director: 'John Krasinski',
    year: 2018,
    genre: 'horror, sci-fi',
    description:
      'A tense, almost silent thriller about surviving in a world where making noise can be deadly.',
    image: './movie-images/a-quiet-place.jpg'
  },
  {
    title: 'Guardians of the Galaxy',
    director: 'James Gunn',
    year: 2014,
    genre: 'sci-fi, comedy',
    description:
      'A fun-filled space adventure with a quirky band of misfits saving the universe.',
    image: './movie-images/guardian-of-galaxy.jpg'
  },
  {
    title: 'Her',
    director: 'Spike Jonze',
    year: 2013,
    genre: 'sci-fi, romance',
    description:
      'A futuristic love story between a man and an artificial intelligence operating system.',
    image: './movie-images/her.jpeg'
  }
];

// Function to display movies (generic to handle sorting and filtering)
function displayMovies(movieList) {
  const moviesSection = document.getElementById('movies-section');
  moviesSection.innerHTML = ''; // Clear previous movies

  movieList.forEach(movie => {
    const movieElement = `
      <article>
        <img src="${movie.image}" alt="${movie.title}">
        <div class="card-content">
          <h2>${movie.title}</h2>
          <p><strong>Director:</strong> ${movie.director} | <strong>Year:</strong> ${movie.year}</p>
          <p><strong>Genre:</strong> ${movie.genre}</p>
          <p class="description">${movie.description}</p>
        </div>
      </article>`;
    moviesSection.innerHTML += movieElement;
  });
}

// Function to display all movies
function displayAllMovies() {
  displayMovies(movies);
}

// Function to filter and display movies based on genre
function recommendMovieByGenre(genre) {
  const filteredMovies = movies.filter(movie => {
    const genres = movie.genre.split(',').map(g => g.trim().toLowerCase());
    return genres.includes(genre.toLowerCase());
  });

  if (filteredMovies.length === 0) {
    document.getElementById('movies-section').innerHTML = '<p>No movies found for the selected genre.</p>';
  } else {
    displayMovies(filteredMovies);
  }
}

// Sorting functions
function sortMoviesNewToOld() {
  const sortedMovies = [...movies].sort((a, b) => b.year - a.year);
  displayMovies(sortedMovies);
}

function sortMoviesOldToNew() {
  const sortedMovies = [...movies].sort((a, b) => a.year - b.year);
  displayMovies(sortedMovies);
}

// Variable to track the currently selected genre
let currentGenre = '';

// Function to handle genre button click
function handleGenreClick(genre) {
  if (currentGenre === genre) {
    currentGenre = '';
    displayAllMovies();
  } else {
    currentGenre = genre;
    recommendMovieByGenre(currentGenre);
  }
}

// Add event listeners for the genre buttons
document.getElementById('sci-fi').addEventListener('click', () => handleGenreClick('sci-fi'));
document.getElementById('horror').addEventListener('click', () => handleGenreClick('horror'));
document.getElementById('comedy').addEventListener('click', () => handleGenreClick('comedy'));
document.getElementById('romance').addEventListener('click', () => handleGenreClick('romance'));

// Add event listeners for the sorting buttons
document.getElementById('sort-new-to-old').addEventListener('click', sortMoviesNewToOld);
document.getElementById('sort-old-to-new').addEventListener('click', sortMoviesOldToNew);

// Initially display all movies
displayAllMovies();
