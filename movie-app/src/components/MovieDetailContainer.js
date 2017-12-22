import React, { Component } from 'react';
import MovieDetail from './MovieDetail';

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading : true,
            hasError : false
        };
    }

    componentDidMount() {
        this.getMovieDetailData(this.props.match.params.movieid)
    }

    getMovieDetailData = async (movieId) => {
        try {
            let data = await this.callMovieDetailApi(movieId);

            this.setState({
                isLoading : false,
                id : data.movie.id,
                medium_cover_image : data.movie.medium_cover_image,
                title_long : data.movie.title_long,
                year : data.movie.year,
                genres : data.movie.genres,
                rating : data.movie.rating,
                description_full : data.movie.description_full
            });
        } catch (e) {
            this.setState({
                hasError : true
            })
        }
    }

    callMovieDetailApi = (movieId) => {
        return fetch(`https://yts.am/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`)
            .then( response => response.json() )
            .then( json => json.data )
            .catch( error => console.log(error) )
    }

    render() {
        const {
            isLoading,
            hasError,
            id,
            medium_cover_image,
            title_long,
            year,
            genres,
            rating,
            description_full
        } = this.state;

        const page = this.props.location.page;

        if( isLoading && !hasError ) return <div>Loading...</div>
        if( hasError ) return <div>Error</div>

        return (
            <MovieDetail
                page={page}
                id={id}
                medium_cover_image={medium_cover_image}
                title_long={title_long}
                year={year}
                genres={genres}
                rating={rating}
                description_full={description_full}
            />
        );
    }
}

export default MovieDetailContainer;