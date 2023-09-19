import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const Movies = () => {

    const [searchResult, setSearchResult] = useState("");
    const [moviesToDisplay, setMoviesToDisplay] = useState([]);
    const [displayTopRating, setDisplayTopRating] = useState(true);

    useEffect(() => {

        axios
            .get("https://api.themoviedb.org/3/search/movie?query=" + searchResult + "&api_key=56d1ac13f2d4be73ee7ccd462fc960fb&language=fr-FR")
            .then((res) => setMoviesToDisplay(res.data.results));
    });

    return (
        <div className="movies-container">
            <section className="search">
                <input 
                    type="text" 
                    name="" 
                    id=""
                    placeholder='Entrez votre recherche' 
                    onChange={(e) => setSearchResult(e.target.value)}
                />
                <section className="display-by-rating">
                    <button
                        onClick={() => setDisplayTopRating(true)}
                        >Top ↑</button>
                    <button
                        onClick={() => setDisplayTopRating(false)}
                    >Flop ↓</button>
                </section>
            </section>
            <section className="movies">
                {
                    moviesToDisplay &&
                        moviesToDisplay
                            .sort((a, b) => displayTopRating ? Number(b.vote_average) - Number(a.vote_average) : Number(a.vote_average) - Number(b.vote_average))
                            .map((movie, index) => <MovieCard key={index} movie={movie} />)
                }
            </section>
            <aside className="filters">

            </aside>
        </div>
    );
};

export default Movies;