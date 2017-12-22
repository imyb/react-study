import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
    movie_count : PropTypes.number,
    page_number : PropTypes.number,
    movies : PropTypes.array
};

const defaultProps = {
    movie_count : 0,
    page_number : 0,
    movies : []
};

const MovieList = ({ movie_count, page_number, movies }) => {
    return (
        <div className="movielist-container">
            <div className="movielist-head">
                total : {movie_count}<br />
                page : {page_number}
            </div>

            <div className="movielist-body">
                <ul className="movielist">
                    {movies.map(movies => (
                        <li className="movielist__item" key={movies.id}>
                            <Link to={{ pathname: `/detail/${movies.id}`, page: page_number }}>
                                <div className="moviecard">
                                    <div className="moviecard__id">{movies.id}</div>
                                    <div className="moviecard__cover">{movies.small_cover_image}</div>
                                    <div className="moviecard__title">{movies.title}</div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="pagination">
                    pagination
                </div>
            </div>
        </div>
    );
};

MovieList.propTypes = propTypes;
MovieList.defaultProps = defaultProps;

export default MovieList;