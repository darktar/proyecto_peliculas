document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = '0571e019cd62b2cea267f829da04437d';
    const BASE_URL = 'https://api.themoviedb.org/1';
    const LANGUAGE = 'es-AR';
    const MOVIE_CONTAINER = document.getElementById('movie-container');
    function getTrendingMovies() {
        fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=${LANGUAGE}`)
            .then(response => response.json())
            .then(data => {
                displayMovies(data.results);
            })
            .catch(error => console.error('Error =( no funciona ):', error));
    }
    function displayMovies(movies) {
        MOVIE_CONTAINER.innerHTML = '';

        movies.forEach(movie => {
            const movieCard = `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <div class="card">
                        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.overview}</p>
                        </div>
                    </div>
                </div>
            `;

            MOVIE_CONTAINER.innerHTML += movieCard;
        });
    }
    getTrendingMovies();
});