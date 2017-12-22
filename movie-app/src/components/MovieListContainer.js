import React, { Component } from 'react';
import MovieList from './MovieList';

class MovieListContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading : true,
            hasError : false
        };
    }

    componentDidMount() {
        this.getMovieListData();
    }

    getMovieListData = async (page=1) => {
        try {
            let data = await this.callMovieListApi(page);

            this.setState({
                isLoading : false,
                movie_count : data.movie_count,
                page_number : data.page_number,
                movies : data.movies
            });
        } catch(e) {
            this.setState({
                hasError : true
            });
        }
    }

    callMovieListApi = (page) => {
        return fetch(`https://yts.am/api/v2/list_movies.json?limit=10&page=${page}&sort_by=year&order_by=desc`)
            .then( response => response.json() )
            .then( json => json.data )
            .catch( error => console.log(error) )
    }

    render() {
        const {
            isLoading,
            hasError,
            movie_count,
            page_number,
            movies
        } = this.state;

        if( isLoading && !hasError ) return <div>Loading...</div>
        if( hasError ) return <div>Error</div>

        return(
            <MovieList
               movie_count={movie_count}
               page_number={page_number}
               movies={movies}
            />
        );
    }
}

export default MovieListContainer;