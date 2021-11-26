import { useState } from 'react';

import Header from "../../components/Header";
import Filme from "../../components/Filme";
import "./style.css";

export default function Movies(){
    const [filmes, setFilmes] = useState([]);

    async function addFilmes() {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular', 
        {
            method: 'GET',
            headers: {
                Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMmY3Mjg3MGMxNjcxMjlhOGYxOTFkZDcwMmI3YmQ0MiIsInN1YiI6IjYxYTAyYzA3NmY0M2VjMDA5Mzc0M2NjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.p2ytz8vYn9x91x4bgqq3Nl7hnneqK3S2whiSibbJjrA"
            }
        });
        const data = await response.json();
        setFilmes([...data.results, ...filmes]);
    }

    return (
    <main id="movies">
        <Header/>
        <div className="list-movies">
            <button onClick={addFilmes}>Adidionar Filme</button>
            {flimes.map((filme, index) => {
                return (
                    <Filme 
                    titulo={filme.original_title}
                    duracao={filme.vote_average}
                    data={filme.release_data}
                    poster={`https://image.tmdb.org/t/p/w500/${filme.poster}`}
                    />
                );
            })}
        </div>
    </main>
    );
}