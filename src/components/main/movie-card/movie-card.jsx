import React from 'react';
import PropTypes from 'prop-types';

const MovieCard = (props) => {

  return (
    <React.Fragment>
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={props.img} alt={props.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{props.title}</a>
        </h3>
      </article>
    </React.Fragment>
  );

};

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default MovieCard;