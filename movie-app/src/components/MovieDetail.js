import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    page : PropTypes.number,
    id : PropTypes.number,
    medium_cover_image : PropTypes.string,
    title_long : PropTypes.string,
    year : PropTypes.number,
    genres : PropTypes.array,
    rating : PropTypes.number,
    description_full : PropTypes.string
}

const defaultProps = {
    page : 0,
    id : -1,
    medium_cover_image : null,
    title_long : null,
    year : 0,
    genres : [],
    rating : 0,
    description_full : null
}

const MovieDetail = (props) => {
    const {
        page,
        id,
        medium_cover_image,
        title_long,
        year,
        genres,
        rating,
        description_full
    } = props;

    return (
        <div className="moviedetail">
            <div className="moviedetail__">{page}</div>
            <div className="moviedetail__">{id}</div>
            <div className="moviedetail__">{medium_cover_image}</div>
            <div className="moviedetail__">{title_long}</div>
            <div className="moviedetail__">{year}</div>
            <div className="moviedetail__">{genres}</div>
            <div className="moviedetail__">{rating}</div>
            <div className="moviedetail__">{description_full}</div>
        </div>
    );
};

MovieDetail.propTypes = propTypes;
MovieDetail.defaultProps = defaultProps;

export default MovieDetail;